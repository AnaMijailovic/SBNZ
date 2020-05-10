package com.healthriskassessment.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Smoker {
	
	@Id
	@GeneratedValue
	private Long id;
	private boolean isSmoker;
	private boolean exSmoker;
	private int cigaretsPerDay;

}
