package com.sample;

import java.util.List;

import com.healthriskassessment.dto.AlcoholDTO;
import com.healthriskassessment.dto.SmokerDTO;
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
	private float height;
	private ActivityLevel activityLevel;
	private int averageSleepTime;
	private int stressLevel;
	private SmokerDTO smoker;
	private AlcoholDTO alcohol;
	private List<String> familyHistory;
	private List<String> diagnosedDeseases;

}
