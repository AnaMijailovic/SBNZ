package com.healthriskassessment.dto;

import java.util.List;

import org.kie.api.definition.type.PropertyReactive;

import com.healthriskassessment.model.enums.BMICategory;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@PropertyReactive
public class HealthDataDTO {
	
	private float bmiValue;
	private BMICategory bmiCategory;
	private float bmrValue;
	private float tdeeValue;
	private float kgTillNormal;
	private int averageSleepLowerLimit;
	private int averageSleepHigherLimit;
	private List<UserRiskDTO> risks;
	private List<UserDiseaseDTO> diseases;
	
}
