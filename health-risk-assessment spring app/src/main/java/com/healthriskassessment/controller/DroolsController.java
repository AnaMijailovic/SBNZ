package com.healthriskassessment.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.healthriskassessment.service.DroolsService;

@RestController
@RequestMapping(value = "/hra", produces=MediaType.APPLICATION_JSON_VALUE)
public class DroolsController {
	
	@Autowired
    private DroolsService droolsService;
	
	@GetMapping()
	public ResponseEntity<String> getDrools(){
		
		droolsService.run();
		
		return new ResponseEntity<>("This works!", HttpStatus.OK);

		
	}
	

}
