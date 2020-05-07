package com.healthriskassessment.service;

import org.kie.api.runtime.KieSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DroolsService {
	
	private final KieSession kieSession;

	@Autowired
	public DroolsService(KieSession kieSession) {
	      this.kieSession = kieSession;
	}
	
	public void run() {
		System.out.println("Fire all: "+ kieSession.fireAllRules());
	}

}
