package com.healthriskassessment.dto;


import com.healthriskassessment.model.enums.RiskLevel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserRiskDTO {
	
	private String riskName;
	private String riskDescription;
	private RiskLevel riskLevel;
	
}
