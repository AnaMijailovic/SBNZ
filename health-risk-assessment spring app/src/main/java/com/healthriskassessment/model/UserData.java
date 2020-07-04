package com.healthriskassessment.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;

import com.healthriskassessment.model.enums.ActivityLevel;
import com.healthriskassessment.model.enums.Gender;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class UserData {
	
	@Id
	@GeneratedValue
	private Long id;
	
	@Column(nullable=false)
	private int age;
	
	@Column(nullable=false)
	private Gender gender;
	
	@Column(nullable=false)
	private int weight;
	
	@Column(nullable=false)
	private int height;
	
	@Column(nullable=false)
	private ActivityLevel activityLevel;	
	
	private int averageSleepTime;	
	private int stressLevel;
	
	@OneToOne()
	private Smoker smoker;
	
	@OneToOne()
	private Alcohol alcohol;
	
	// diseases from which any of the family members suffers/suffered
	@ManyToMany
	private Set<Disease> familyHistory;
	
	// diseases that have already been diagnosed to this user
	@ManyToMany
	private Set<Disease> diagnosedDeseases;

}
