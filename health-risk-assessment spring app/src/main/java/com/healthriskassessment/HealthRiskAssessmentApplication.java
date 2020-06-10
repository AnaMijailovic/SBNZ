package com.healthriskassessment;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class HealthRiskAssessmentApplication {

	public static void main(String[] args) {
		SpringApplication.run(HealthRiskAssessmentApplication.class, args);
		System.out.println("M2_HOME " + System.getenv("M2_HOME"));
	}

}