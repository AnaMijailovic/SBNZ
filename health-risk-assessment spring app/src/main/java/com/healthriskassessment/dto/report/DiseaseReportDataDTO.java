package com.healthriskassessment.dto.report;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DiseaseReportDataDTO {

	private String ageGroup;
	private int numberMale;
	private int numberFemale;

}
