package com.healthriskassessment.converters;

import com.healthriskassessment.dto.RiskDTO;
import com.healthriskassessment.model.Risk;

public class RiskConverter {
	
	public static RiskDTO riskToDto(Risk risk) {
		return new RiskDTO(risk.getId(), risk.getName(), risk.getDescription());
	}
	
	public static Risk dtoToRisk(RiskDTO dto) {
		return new Risk(dto.getId(), dto.getName(), dto.getDescription());
	}
}
