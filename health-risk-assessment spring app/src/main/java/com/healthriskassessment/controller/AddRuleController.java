package com.healthriskassessment.controller;

import java.io.FileNotFoundException;

import org.apache.maven.shared.invoker.MavenInvocationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.healthriskassessment.dto.NewRuleDTO;
import com.healthriskassessment.service.AddRuleService;

@RestController
@CrossOrigin
@RequestMapping(value = "/hra/rules", produces = MediaType.APPLICATION_JSON_VALUE)
public class AddRuleController {
	
	
	@Autowired
	private AddRuleService addRuleService;
	
	@PostMapping(consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Boolean> addNewDisease(@RequestBody NewRuleDTO dto) throws FileNotFoundException, RuntimeException, MavenInvocationException{
		
		System.out.println(dto);		
		return new ResponseEntity<>(addRuleService.addNewRule(dto), HttpStatus.CREATED);
	}

}
