package com.healthriskassessment.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.healthriskassessment.converters.RiskConverter;
import com.healthriskassessment.dto.RiskDTO;
import com.healthriskassessment.model.Risk;
import com.healthriskassessment.repository.RiskRepository;

@Service
public class RiskService {
	
	@Autowired
	private RiskRepository riskRepository;

	public List<RiskDTO> getAll() {

		List<Risk> risks = riskRepository.findAll();

		return risks.stream().map(risk -> {
			return RiskConverter.riskToDto(risk);
		}).collect(Collectors.toList());
	}
	
	public RiskDTO getByName(String name) {

		Risk risk = riskRepository.findByName(name);
		return RiskConverter.riskToDto(risk);

	}
	
	
}
