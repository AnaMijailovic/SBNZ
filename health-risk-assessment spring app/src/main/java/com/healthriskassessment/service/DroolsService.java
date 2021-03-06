package com.healthriskassessment.service;

import java.io.IOException;
import java.util.ArrayList;

import org.kie.api.runtime.KieSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.healthriskassessment.dto.HealthDataDTO;
import com.healthriskassessment.dto.UserDataDTO;
import com.healthriskassessment.model.enums.ActivityLevel;
import com.healthriskassessment.model.enums.Gender;
import com.healthriskassessment.repository.DiseaseRepository;
import com.healthriskassessment.repository.RiskRepository;

@Service
public class DroolsService {

	@Autowired
	private KieSessionService kieSessionService;

	@Autowired
	private RiskRepository riskRepository;

	@Autowired
	private DiseaseRepository diseaseRepository;

	// TODO delete this later
	public void run() throws IOException {
		UserDataDTO ud = new UserDataDTO();
		ud.setAge(22);
		ud.setWeight(32);
		ud.setHeight(158);
		ud.setGender(Gender.FEMALE);
		ud.setStressLevel(6);
		ud.setActivityLevel(ActivityLevel.MODERATELY_ACTIVE);
		HealthDataDTO hd = new HealthDataDTO();
		hd.setRisks(new ArrayList<>());
		hd.setDiseases(new ArrayList<>());

		KieSession kieSession = kieSessionService.getHraKieSession();
		kieSession.insert(ud);
		kieSession.insert(hd);
		riskRepository.findAll().forEach(x -> kieSession.insert(x));

		System.out.println("Fire all: " + kieSession.fireAllRules());
		kieSession.dispose();
		System.out.println(hd);
	}

	public HealthDataDTO getHealthData(UserDataDTO dto) {
		KieSession kieSession = kieSessionService.getHraKieSession();
		kieSession.insert(dto);
		riskRepository.findAll().forEach(x -> kieSession.insert(x));
		diseaseRepository.findAll().forEach(x -> kieSession.insert(x));
		HealthDataDTO hd = new HealthDataDTO();
		hd.setRisks(new ArrayList<>());
		hd.setDiseases(new ArrayList<>());
		kieSession.insert(hd);

		kieSession.getAgenda().getAgendaGroup("risks").setFocus();
		System.out.println("Fire all: " + kieSession.fireAllRules());
		System.out.println("Facts num: " + kieSession.getFactCount());
		kieSession.getAgenda().getAgendaGroup("diseases").setFocus();
		System.out.println(kieSession.fireAllRules());
		System.out.println("Facts num: " + kieSession.getFactCount());

		kieSession.getAgenda().getAgendaGroup("disease classification").setFocus();
		System.out.println(kieSession.fireAllRules());
		kieSession.dispose();

		return hd;
	}

}
