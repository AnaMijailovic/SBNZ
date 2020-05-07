package com.healthriskassessment.service;

import org.kie.api.runtime.KieSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.healthriskassessment.dto.HealthDataDTO;
import com.healthriskassessment.dto.UserDataDTO;

@Service
public class DroolsService {
	
	private final KieSession kieSession;

	@Autowired
	public DroolsService(KieSession kieSession) {
	      this.kieSession = kieSession;
	}
	
	public void run() {
		UserDataDTO ud = new UserDataDTO();
		ud.setWeight(53);
		ud.setHeight(158);
		HealthDataDTO hd = new HealthDataDTO();
		
		kieSession.insert(ud);
		kieSession.insert(hd);
		
		System.out.println("Fire all: "+ kieSession.fireAllRules());
		System.out.println(kieSession.getFactCount());
		kieSession.destroy();
		System.out.println(hd);
	}

}
