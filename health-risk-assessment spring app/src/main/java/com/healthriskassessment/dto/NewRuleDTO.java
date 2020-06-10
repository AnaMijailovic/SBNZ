package com.healthriskassessment.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class NewRuleDTO {
	
	String fileName;
	String fileBody;
}
