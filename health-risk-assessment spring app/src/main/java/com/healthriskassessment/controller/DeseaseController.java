package com.healthriskassessment.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.healthriskassessment.dto.DeseaseDTO;
import com.healthriskassessment.service.DeseaseService;

@RestController
@RequestMapping(value = "/hra/deseases", produces = MediaType.APPLICATION_JSON_VALUE)
public class DeseaseController {
	
	@Autowired
	private DeseaseService deseaseService;
	
	@GetMapping
	public ResponseEntity<List<DeseaseDTO>> getAll(){
		
		
		return new ResponseEntity<>(deseaseService.getAll(), HttpStatus.OK);
	}

}
