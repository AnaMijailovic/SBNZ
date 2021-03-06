package com.healthriskassessment.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.healthriskassessment.model.User;
import com.healthriskassessment.repository.UserRepository;

@Service
public class JwtUserDetailsService implements UserDetailsService {
	
	
	@Autowired
	UserRepository userRepository;

	//Method gets the User with given username from database
	// if user with that username doesn't  exists the method will throw exception
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepository.findOneByUsername(username).get();
		if (user == null) {
			throw new UsernameNotFoundException(String.format("No user found with username '%s'.", username));
		} else {
			return user;
		}
	} 

}
