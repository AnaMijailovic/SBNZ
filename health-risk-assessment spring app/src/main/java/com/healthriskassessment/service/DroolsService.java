package com.healthriskassessment.service;

import java.util.ArrayList;

import org.kie.api.runtime.KieSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.healthriskassessment.dto.HealthDataDTO;
import com.healthriskassessment.dto.UserDataDTO;
import com.healthriskassessment.model.enums.ActivityLevel;
import com.healthriskassessment.model.enums.Gender;
import com.healthriskassessment.repository.DeseaseRepository;
import com.healthriskassessment.repository.RiskRepository;

@Service
public class DroolsService {

	private final KieSession kieSession;

	@Autowired
	private RiskRepository riskRepository;
	
	@Autowired
	private DeseaseRepository deseaseRepository;

	@Autowired
	public DroolsService(KieSession kieSession) {
		this.kieSession = kieSession;
	}

	// TODO delete this later
	public void run() {
		UserDataDTO ud = new UserDataDTO();
		ud.setAge(22);
		ud.setWeight(32);
		ud.setHeight(158);
		ud.setGender(Gender.FEMALE);
		ud.setStressLevel(6);
		ud.setActivityLevel(ActivityLevel.MODERATELY_ACTIVE);
		HealthDataDTO hd = new HealthDataDTO();
		hd.setRisks(new ArrayList<>());
		hd.setDeseases(new ArrayList<>());

		kieSession.insert(ud);
		kieSession.insert(hd);
		riskRepository.findAll().forEach(x -> kieSession.insert(x));

		System.out.println("Fire all: " + kieSession.fireAllRules());
		kieSession.dispose();
		System.out.println(hd);
	}

	public HealthDataDTO getHealthData(UserDataDTO dto) {

		kieSession.insert(dto);
		riskRepository.findAll().forEach(x -> kieSession.insert(x));
		deseaseRepository.findAll().forEach(x -> kieSession.insert(x));
		HealthDataDTO hd = new HealthDataDTO();
		hd.setRisks(new ArrayList<>());
		hd.setDeseases(new ArrayList<>());
		kieSession.insert(hd);

		System.out.println("Fire all: " + kieSession.fireAllRules());
		kieSession.getAgenda().getAgendaGroup("deseases").setFocus();
	    System.out.println(kieSession.fireAllRules());
		kieSession.dispose();
		return hd;
	}

}
