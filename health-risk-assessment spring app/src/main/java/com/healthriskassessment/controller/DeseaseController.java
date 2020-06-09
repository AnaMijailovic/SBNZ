package com.healthriskassessment.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.healthriskassessment.converters.DeseaseConverter;
import com.healthriskassessment.dto.DeseaseDTO;
import com.healthriskassessment.model.Desease;
import com.healthriskassessment.service.DeseaseService;

@RestController
@CrossOrigin
@RequestMapping(value = "/hra/deseases", produces = MediaType.APPLICATION_JSON_VALUE)
public class DeseaseController {

	@Autowired
	private DeseaseService deseaseService;

	@GetMapping
	public ResponseEntity<List<DeseaseDTO>> getAll() {

		return new ResponseEntity<>(deseaseService.getAll(), HttpStatus.OK);
	}

	@GetMapping(value = "/{name}")
	public ResponseEntity<DeseaseDTO> getByName(@PathVariable("name") String name) {
		
		return new ResponseEntity<>(deseaseService.getByName(name), HttpStatus.OK);
	}
	
	@PreAuthorize("hasAuthority('ADMIN')")
	@PostMapping(consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<DeseaseDTO> addNewDisease(@RequestBody DeseaseDTO dto){
		
		System.out.println(dto);
		Desease newDesease = deseaseService.addDesease(dto);
		return new ResponseEntity<>(DeseaseConverter.deseaseToDto(newDesease), HttpStatus.CREATED);
	}
	
	@PreAuthorize("hasAuthority('ADMIN')")
	@DeleteMapping(value="/{name}")
	public ResponseEntity<Boolean> deleteDisease(@PathVariable("name") String name){

		deseaseService.deleteDisease(name);
		return new ResponseEntity<>(true, HttpStatus.OK);
	}
	
	
}
