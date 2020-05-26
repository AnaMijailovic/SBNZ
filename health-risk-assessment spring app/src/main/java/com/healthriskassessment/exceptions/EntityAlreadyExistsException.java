package com.healthriskassessment.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONFLICT, reason = "Entity already exists")
public class EntityAlreadyExistsException extends Exception {
	
	private static final long serialVersionUID = 1162089917433587369L;

	public  EntityAlreadyExistsException(String message){
		super(message);
	}
}
