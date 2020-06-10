package com.healthriskassessment.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.healthriskassessment.dto.RiskDTO;
import com.healthriskassessment.service.RiskService;

@RestController
@CrossOrigin
@RequestMapping(value = "/hra/risks", produces = MediaType.APPLICATION_JSON_VALUE)
public class RiskController {
	
	@Autowired
	private RiskService riskService;

	@GetMapping
	public ResponseEntity<List<RiskDTO>> getAll() {

		return new ResponseEntity<>(riskService.getAll(), HttpStatus.OK);
	}

	@GetMapping(value = "/{name}")
	public ResponseEntity<RiskDTO> getByName(@PathVariable("name") String name) {

		return new ResponseEntity<>(riskService.getByName(name), HttpStatus.OK);
	}
	
	@PreAuthorize("hasAuthority('ADMIN')")
	@GetMapping(value = "/stressLevel")
	public ResponseEntity<Integer> calculateStressLevel() {

		return new ResponseEntity<>(riskService.calculateStressLevel(), HttpStatus.OK);
	}
}
