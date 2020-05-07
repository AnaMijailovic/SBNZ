package com.healthriskassessment.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SmokerDTO {
	
	private boolean isSmoker;
	private boolean exSmoker;
	private int cigaretsPerDay;
}
