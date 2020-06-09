package com.healthriskassessment.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.healthriskassessment.dto.JwtResponseDTO;
import com.healthriskassessment.dto.LogInDTO;
import com.healthriskassessment.dto.UserDTO;
import com.healthriskassessment.exceptions.EntityAlreadyExistsException;
import com.healthriskassessment.exceptions.EntityNotFoundException;
import com.healthriskassessment.exceptions.PasswordConfirmationException;
import com.healthriskassessment.service.UserService;

@RestController
@CrossOrigin
@RequestMapping(value = "/auth", produces = MediaType.APPLICATION_JSON_VALUE)
public class AuthenticationController {

	@Autowired
	private UserService userService;

	// LogIn method checks if user exists, generates and returns jwt token
	@PostMapping(value = "/login")
	public ResponseEntity<JwtResponseDTO> createAuthenticationToken(@RequestBody LogInDTO authenticationRequest)
			throws EntityNotFoundException {
		String jwt = userService.createAuthenticationToken(authenticationRequest);
		return new ResponseEntity<>(new JwtResponseDTO(jwt), HttpStatus.OK);
	}

	@PostMapping(value = "/register", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Boolean> register(@RequestBody @Valid UserDTO dto)
			throws EntityAlreadyExistsException, PasswordConfirmationException {

		boolean success = userService.register(dto);
		return new ResponseEntity<>(success, HttpStatus.OK);

	}

}
