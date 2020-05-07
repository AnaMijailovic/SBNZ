package com.healthriskassessment.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AlcoholDTO {
	
	private boolean consumesAlcohol;
	private int drinksPerOccasion;
	private int drinksPerWeek;

}
