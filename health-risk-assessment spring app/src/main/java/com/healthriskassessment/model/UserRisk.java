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
	
	// the risk that this user has
	@ManyToOne()
	private Risk risk;
	
	// the estimated level of risk of this risk/symptom
	private RiskLevel riskLevel;

}
