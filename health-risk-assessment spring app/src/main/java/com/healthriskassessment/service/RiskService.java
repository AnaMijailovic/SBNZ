package com.healthriskassessment.service;

import java.util.List;
import java.util.Random;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

import org.drools.core.time.SessionPseudoClock;
import org.kie.api.runtime.KieSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.healthriskassessment.converters.RiskConverter;
import com.healthriskassessment.dto.RiskDTO;
import com.healthriskassessment.event.HeartBeatEvent;
import com.healthriskassessment.model.Risk;
import com.healthriskassessment.repository.RiskRepository;

@Service
public class RiskService {

	@Autowired
	private KieSessionService kieSessionService;

	@Autowired
	private RiskRepository riskRepository;

	public List<RiskDTO> getAll() {

		List<Risk> risks = riskRepository.findAll();

		return risks.stream().map(risk -> {
			return RiskConverter.riskToDto(risk);
		}).collect(Collectors.toList());
	}

	public RiskDTO getByName(String name) {

		Risk risk = riskRepository.findByName(name);
		return RiskConverter.riskToDto(risk);

	}

	public int calculateStressLevel() {

		KieSession kieSession = kieSessionService.getCepKieSession();
		kieSession.setGlobal("stressLevel", 0);
		SessionPseudoClock clock = kieSession.getSessionClock();
		
		Random random = new Random();
		
		for (int i = 0; i < 80; i++) {
			HeartBeatEvent hbe = new HeartBeatEvent(clock.getCurrentTime());
			kieSession.getEntryPoint("beats").insert(hbe);
			clock.advanceTime(800 + random.nextInt(51) + 1 , TimeUnit.MILLISECONDS);
		}

		System.out.println("Rules fired: " + kieSession.fireAllRules());
		System.out.println("Stress level: " + kieSession.getGlobal("stressLevel"));
		kieSession.dispose();
		
		return (Integer) kieSession.getGlobal("stressLevel");

	}

}
