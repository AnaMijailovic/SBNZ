package com.healthriskassessment.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.healthriskassessment.converters.DiseaseConverter;
import com.healthriskassessment.converters.RiskConverter;
import com.healthriskassessment.dto.DiseaseDTO;
import com.healthriskassessment.dto.RiskDTO;
import com.healthriskassessment.exceptions.EntityAlreadyExistsException;
import com.healthriskassessment.exceptions.EntityNotFoundException;
import com.healthriskassessment.model.Disease;
import com.healthriskassessment.model.Risk;
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
	
	@GetMapping(value = "/{name}/diseases")
	public ResponseEntity<List<DiseaseDTO>> getRiskDiseases(@PathVariable("name") String name) {
		List<Disease> diseases = riskService.getRiskDiseases(name);
		List<DiseaseDTO> diseaseDtos = diseases.stream().map(disease -> {
			return DiseaseConverter.diseaseToDto(disease);
		}).collect(Collectors.toList());

		return new ResponseEntity<>(diseaseDtos, HttpStatus.OK);
	}

	@GetMapping(value = "/stressLevel")
	public ResponseEntity<Integer> calculateStressLevel() {

		return new ResponseEntity<>(riskService.calculateStressLevel(), HttpStatus.OK);
	}
	
	@PreAuthorize("hasAuthority('ADMIN')")
	@PutMapping(consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<RiskDTO> updateRisk(@RequestBody RiskDTO dto) throws EntityNotFoundException, EntityAlreadyExistsException{
		
		System.out.println(dto);
		Risk risk = riskService.updateRisk(dto);
		return new ResponseEntity<>(RiskConverter.riskToDto(risk), HttpStatus.OK);
	}
}
