package com.healthriskassessment.dto;

import java.util.Set;

import com.healthriskassessment.model.enums.RiskLevel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDiseaseDTO {
	
	private String diseaseName;
	private String diseaseDescription;
	
	// estimated level of risk of developing this disease
	private RiskLevel riskLevel;
	
	// the risks that the user has and are related to this disease
	private Set<UserRiskDTO> risks;

}
