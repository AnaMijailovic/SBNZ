package com.healthriskassessment.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class ReportData {
	
	@Id
	@GeneratedValue
	private Long id;
	
	@Column(unique = true, nullable = false)
	private String ipAddress;
	
	@OneToOne()
	private UserData userData;
	
	@OneToOne()
	private HealthData healthData;	

}
