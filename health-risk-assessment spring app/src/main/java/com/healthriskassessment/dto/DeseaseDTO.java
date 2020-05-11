package com.healthriskassessment.dto;

import java.util.Set;

import com.healthriskassessment.model.enums.RiskLevel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DeseaseDTO {
	
	private String deseaseName;
	private String deseaseDescription;
	private RiskLevel riskLevel;
	private Set<RiskDTO> risks;

}
