package com.healthriskassessment.model;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.healthriskassessment.model.enums.RiskLevel;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class UserDisease {
	
	@Id
	@GeneratedValue
	private Long id;
	
	@ManyToOne
	private Disease disease;
	
	// estimated level of risk of developing this disease
	private RiskLevel riskLevel;
	
	// the risks that the user has and are related to this disease
	@OneToMany
	private Set<UserRisk> risks;

}
