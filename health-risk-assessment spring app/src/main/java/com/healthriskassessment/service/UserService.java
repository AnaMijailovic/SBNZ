package com.healthriskassessment.service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.healthriskassessment.converters.UserConverter;
import com.healthriskassessment.dto.LogInDTO;
import com.healthriskassessment.dto.UserDTO;
import com.healthriskassessment.exceptions.EntityAlreadyExistsException;
import com.healthriskassessment.exceptions.EntityNotFoundException;
import com.healthriskassessment.exceptions.PasswordConfirmationException;
import com.healthriskassessment.model.Authority;
import com.healthriskassessment.model.RegisteredUser;
import com.healthriskassessment.model.User;
import com.healthriskassessment.repository.UserRepository;
import com.healthriskassessment.security.JwtTokenUtil;

@Service
public class UserService {

	@Autowired
	UserRepository repository;

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtUserDetailsService jwtUserDetailsService;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private AuthorityService authorityService;

	public User findOne(Long id) {
		return repository.getOne(id);
	}

	public Optional<User> findOneByUsername(String username) {
		return repository.findOneByUsername(username);
	}

	public List<User> findAll() {
		return repository.findAll();
	}

	public User save(User user) {
		return repository.save(user);
	}

	public void deleteById(Long id) {
		repository.deleteById(id);
	}

	public void delete(User entity) {
		repository.delete(entity);
	}

	public UserDTO getProfile() throws EntityNotFoundException {
		User loggedUser = getLoggedUser();
		if (loggedUser == null) {
			throw new EntityNotFoundException("User was not found");
		}
		return UserConverter.convertToDTO(loggedUser);
	}
	

	// Checks if user exists, generates and returns jwt token
	public String createAuthenticationToken(LogInDTO authenticationRequest)
			throws EntityNotFoundException {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
					authenticationRequest.getUsername(), authenticationRequest.getPassword()));
		} catch (BadCredentialsException | InternalAuthenticationServiceException e) {
			throw new EntityNotFoundException(authenticationRequest.getUsername());
		}
		final UserDetails userDetails = jwtUserDetailsService.loadUserByUsername(authenticationRequest.getUsername());
		User user = (User) userDetails;

		final String jwt = jwtTokenUtil.generateToken(userDetails);
		return jwt;
	}

	public boolean register(UserDTO dto) throws EntityAlreadyExistsException, PasswordConfirmationException {

		// Checks if password is valid
		if (!dto.getPassword().equals(dto.getRepeatedPassword())) {
			throw new PasswordConfirmationException();
		}
		// Checks if username is taken
		Optional<User> optinalUser = findOneByUsername(dto.getUsername());
		if (optinalUser.isPresent()) {
			throw new EntityAlreadyExistsException(dto.getUsername());
		}
		// Create new user and save to database
		User user = UserConverter.convertFromDTO(dto);
		Authority authority = authorityService.findByID(1l);
		ArrayList<Authority> authorities = new ArrayList<>();
		authorities.add(authority);
		user.setAuthorities(authorities);
		save(user);
		
		return true;
	}

	// Returns currently logged user
	public RegisteredUser getLoggedUser() throws EntityNotFoundException {

		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if (!(authentication instanceof AnonymousAuthenticationToken)) {
			String username = authentication.getName();
			RegisteredUser user = (RegisteredUser) findOneByUsername(username)
					.orElseThrow(() -> new EntityNotFoundException("User with username: " + username + " was not found."));
			return user;
		}
		return null;
	}

}
