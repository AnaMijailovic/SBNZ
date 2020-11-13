package com.healthriskassessment.dto.report;

import com.healthriskassessment.model.enums.RiskLevel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DiseaseReportRequestDTO {
	
	private String diseaseName;
	private RiskLevel riskLevel;

}
