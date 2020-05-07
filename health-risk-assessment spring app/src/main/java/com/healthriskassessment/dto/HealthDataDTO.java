package com.healthriskassessment.dto;

import java.util.List;

import com.healthriskassessment.model.enums.BMICategory;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class HealthDataDTO {
	
	private float bmiValue;
	private BMICategory bmiCategory;
	private float bmrValue;
	private float tdeeValue;
	private float kgTillNormal;
	private int averageSleepLowerLimit;
	private int averageSleepHigerLimit;
	private List<RiskDTO> risks;
	private List<String> deseases;
	

}
