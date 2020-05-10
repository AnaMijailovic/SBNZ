package com.healthriskassessment.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.healthriskassessment.model.enums.RiskLevel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class UserRisk {
	
	@Id
	@GeneratedValue
	private Long id;
	
	@ManyToOne()
	private Risk risk;
	private RiskLevel riskLevel;

}
