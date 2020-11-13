package com.healthriskassessment.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.kie.api.runtime.KieSession;
import org.kie.api.runtime.rule.QueryResults;
import org.kie.api.runtime.rule.QueryResultsRow;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.healthriskassessment.dto.report.DiseaseReportDTO;
import com.healthriskassessment.dto.report.DiseaseReportDataDTO;
import com.healthriskassessment.dto.report.DiseaseReportRequestDTO;
import com.healthriskassessment.model.ReportData;
import com.healthriskassessment.model.UserDisease;
import com.healthriskassessment.model.enums.Gender;
import com.healthriskassessment.model.enums.RiskLevel;
import com.healthriskassessment.repository.ReportDataRepository;

@Service
public class ReportService {
	
	@Autowired
	private KieSessionService kieSessionService;
	
	@Autowired
	private ReportDataRepository reportRepository;
	
	public DiseaseReportDTO getDiseaseReport(DiseaseReportRequestDTO dto) {
		
		DiseaseReportDTO report = new DiseaseReportDTO();
		report.setDiseaseName(dto.getDiseaseName());
		report.setRiskLevel(dto.getRiskLevel());
		
		List<DiseaseReportDataDTO> resultReportData = new ArrayList<>();
		KieSession kieSession = kieSessionService.getHraKieSession();
		
		List<ReportData> reportDataList = reportRepository.findAll();
		reportDataList.forEach(data -> kieSession.insert(data));
		
		// age groups 0-20, 20-30, 30-40, 40-50, 50-60, 60+
		for (int i = 10; i <= 60; i += 10) {
			int ageFrom = ( i == 10 ) ? 0 : i;
			int ageTo = ( i == 60 ) ? 200 : i+10;
			if(i == 0) {
				ageTo = 20;
			}
			
			String ageGroup = ageFrom + "";
			ageGroup += ( i == 60 ) ? "+" : "-" + ageTo;
			Long numFemale = getReportData(kieSession, dto.getDiseaseName(), dto.getRiskLevel(), ageFrom, ageTo, Gender.FEMALE);
			Long numMale = getReportData(kieSession, dto.getDiseaseName(), dto.getRiskLevel(), ageFrom, ageTo, Gender.MALE);
			DiseaseReportDataDTO reportData = new DiseaseReportDataDTO(ageGroup, numMale.intValue(), numFemale.intValue());
			resultReportData.add(reportData);
			
		}
		
		report.setReportData(resultReportData);
		
		return report;
		
	}
	
	private Long getReportData(KieSession kieSession, String diseaseName, RiskLevel riskLevel, int ageFrom, int ageTo,
			Gender gender) {
		
		QueryResults results = kieSession.getQueryResults("Get by age group and gender", diseaseName , riskLevel,
				  ageFrom, ageTo, gender );
		
		for (QueryResultsRow queryResult : results ) {
			@SuppressWarnings("unchecked")
			List<Set<UserDisease>> set = (List<Set<UserDisease>>) queryResult.get("$healthDataDiseases");
			Long num = (Long) queryResult.get("$num");
			System.out.print("\nNum: " + num);
			for(Set<UserDisease> s : set) {
				for(UserDisease ud : s) {
					System.out.print("\nResult: " + ud.getId());
				}
			}
			return num;
		}
		
		return 0L;
	}

}
