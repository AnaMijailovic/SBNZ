package com.healthriskassessment.converters;

import java.util.stream.Collectors;

import com.healthriskassessment.dto.DiseaseDTO;
import com.healthriskassessment.model.Disease;

public class DiseaseConverter {

	public static DiseaseDTO diseaseToDto(Disease disease) {
		DiseaseDTO dto = new DiseaseDTO();
		dto.setId(disease.getId());
		dto.setName(disease.getName());
		dto.setDescription(disease.getDescription());
		dto.setRisks(disease.getRisks().stream().map(risk -> {
			return RiskConverter.riskToDto(risk);
		}).collect(Collectors.toSet()));
		return dto;
	}
	
	public static Disease dtoToDisease(DiseaseDTO dto) {
		return new Disease(dto.getId(), dto.getName(), dto.getDescription(), dto.getRisks().stream().map(risk -> {
			return RiskConverter.dtoToRisk(risk);
		}).collect(Collectors.toSet()));
	}
}
