package com.healthriskassessment.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.healthriskassessment.dto.report.DiseaseReportDTO;
import com.healthriskassessment.dto.report.DiseaseReportRequestDTO;
import com.healthriskassessment.service.ReportService;

@RestController
@CrossOrigin
@RequestMapping(value = "/hra/reports", produces = MediaType.APPLICATION_JSON_VALUE)
public class ReportController {
	
	@Autowired
	private ReportService reportService;
	
	@GetMapping(value = "/diseaseReport")
	public ResponseEntity<DiseaseReportDTO> getByName(@RequestBody DiseaseReportRequestDTO dto) {
				
		return new ResponseEntity<>(reportService.getDiseaseReport(dto), HttpStatus.OK);
	}
	
}
