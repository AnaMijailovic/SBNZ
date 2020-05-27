package com.healthriskassessment.model;

import javax.persistence.Entity;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class RegisteredUser extends User{
	
	
	private static final long serialVersionUID = 3449859740113774596L;

	@OneToOne()
	private UserData userData;
	
	@OneToOne()
	private HealthData healthData;

}
