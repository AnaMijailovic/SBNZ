package com.healthriskassessment.converters;

import java.util.stream.Collectors;

import com.healthriskassessment.dto.DeseaseDTO;
import com.healthriskassessment.model.Desease;

public class DeseaseConverter {

	public static DeseaseDTO deseaseToDto(Desease desease) {
		DeseaseDTO dto = new DeseaseDTO();
		dto.setId(desease.getId());
		dto.setName(desease.getName());
		dto.setDescription(desease.getDescription());
		dto.setRisks(desease.getRisks().stream().map(risk -> {
			return RiskConverter.riskToDto(risk);
		}).collect(Collectors.toSet()));
		return dto;
	}
	
	public static Desease dtoToDesease(DeseaseDTO dto) {
		return new Desease(dto.getId(), dto.getName(), dto.getDescription(), dto.getRisks().stream().map(risk -> {
			return RiskConverter.dtoToRisk(risk);
		}).collect(Collectors.toSet()));
	}
}
