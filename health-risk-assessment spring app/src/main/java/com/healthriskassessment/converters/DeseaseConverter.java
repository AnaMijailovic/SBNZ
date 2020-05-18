package com.healthriskassessment.converters;

import com.healthriskassessment.dto.DeseaseDTO;
import com.healthriskassessment.model.Desease;

public class DeseaseConverter {
	
	public static DeseaseDTO deseaseToDto(Desease desease) {
		DeseaseDTO dto = new DeseaseDTO();
		dto.setId(desease.getId());
		dto.setName(desease.getName());
		dto.setDescription(desease.getDescription());
		return dto;
	}

}
