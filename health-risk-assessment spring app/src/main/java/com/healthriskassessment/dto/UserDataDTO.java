package com.healthriskassessment.dto;

import java.util.List;

import com.healthriskassessment.model.enums.ActivityLevel;
import com.healthriskassessment.model.enums.Gender;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDataDTO {
	
	private int age;
	private Gender gender;
	private int weight;
	private int height;
	private ActivityLevel activityLevel;
	private int averageSleepTime;
	private int stressLevel;
	private SmokerDTO smoker;
	private AlcoholDTO alcohol;
	
	// diseases from which any of the family members suffers/suffered
	private List<String> familyHistory;
	
	// diseases that have already been diagnosed to this user
	private List<String> diagnosedDiseases;

}
