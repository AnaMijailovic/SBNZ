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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.healthriskassessment.converters.DiseaseConverter;
import com.healthriskassessment.dto.DiseaseDTO;
import com.healthriskassessment.exceptions.EntityAlreadyExistsException;
import com.healthriskassessment.exceptions.EntityNotFoundException;
import com.healthriskassessment.model.Disease;
import com.healthriskassessment.service.DiseaseService;

@RestController
@CrossOrigin
@RequestMapping(value = "/hra/diseases", produces = MediaType.APPLICATION_JSON_VALUE)
public class DiseaseController {

	@Autowired
	private DiseaseService diseaseService;

	@GetMapping
	public ResponseEntity<List<DiseaseDTO>> getAll() {

		return new ResponseEntity<>(diseaseService.getAll(), HttpStatus.OK);
	}

	@GetMapping(value = "/{name}")
	public ResponseEntity<DiseaseDTO> getByName(@PathVariable("name") String name) {
		
		return new ResponseEntity<>(diseaseService.getByName(name), HttpStatus.OK);
	}
	
	@PreAuthorize("hasAuthority('ADMIN')")
	@PostMapping(consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<DiseaseDTO> addNewDisease(@RequestBody DiseaseDTO dto){
		
		System.out.println(dto);
		Disease newDisease = diseaseService.addDisease(dto);
		return new ResponseEntity<>(DiseaseConverter.diseaseToDto(newDisease), HttpStatus.CREATED);
	}
	
	@PreAuthorize("hasAuthority('ADMIN')")
	@PutMapping(consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<DiseaseDTO> updateDisease(@RequestBody DiseaseDTO dto) throws EntityNotFoundException, EntityAlreadyExistsException{
		
		System.out.println(dto);
		Disease newDisease = diseaseService.updateDisease(dto);
		return new ResponseEntity<>(DiseaseConverter.diseaseToDto(newDisease), HttpStatus.OK);
	}
	
	@PreAuthorize("hasAuthority('ADMIN')")
	@DeleteMapping(value="/{name}")
	public ResponseEntity<Boolean> deleteDisease(@PathVariable("name") String name){

		diseaseService.deleteDisease(name);
		return new ResponseEntity<>(true, HttpStatus.OK);
	}
	
	
}
