package com.healthriskassessment.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import com.healthriskassessment.model.enums.BMICategory;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class HealthData {
	
	@Id
	@GeneratedValue
	private Long id;
	
	private float bmiValue;
	
	private BMICategory bmiCategory;
	private float bmrValue;
	private float tdeeValue;
	private float kgTillNormal;
	private int averageSleepLowerLimit;
	private int averageSleepHigherLimit;
	
	@OneToMany
	private Set<UserRisk> risks;
	@ManyToMany
	private Set<UserDisease> diseases;

}
