package com.healthriskassessment.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RiskDTO {
	
	private Long id;
	private String name;
	private String description;

}
