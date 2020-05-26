package com.healthriskassessment.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.BAD_REQUEST, reason = "Passwords don't match")
public class PasswordConfirmationException extends Exception{

	private static final long serialVersionUID = 5458988181614659722L;

	public PasswordConfirmationException() {
		super("You must re-enter the password so that it matches with the original one.");
	}
}
