package com.healthriskassessment.dto.report;

import java.util.List;

import com.healthriskassessment.model.enums.RiskLevel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DiseaseReportDTO {
	
	private String diseaseName;
	private RiskLevel riskLevel;
	private List<DiseaseReportDataDTO> reportData;

}
