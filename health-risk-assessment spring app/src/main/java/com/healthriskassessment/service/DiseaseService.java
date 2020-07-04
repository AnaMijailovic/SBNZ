package com.healthriskassessment.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.healthriskassessment.converters.DiseaseConverter;
import com.healthriskassessment.dto.DiseaseDTO;
import com.healthriskassessment.model.Disease;
import com.healthriskassessment.repository.DiseaseRepository;

@Service
public class DiseaseService {

	@Autowired
	private DiseaseRepository diseaseRepository;

	public List<DiseaseDTO> getAll() {

		List<Disease> diseases = diseaseRepository.findAll();

		return diseases.stream().map(disease -> {
			return DiseaseConverter.diseaseToDto(disease);
		}).collect(Collectors.toList());
	}
	
	public DiseaseDTO getByName(String name) {

		Disease disease = diseaseRepository.findByName(name);
		return DiseaseConverter.diseaseToDto(disease);

	}
	
	public boolean deleteDisease(String name) {
		Disease disease = diseaseRepository.findByName(name);
		diseaseRepository.delete(disease);
		return true;
	}
	
	public Disease addDisease(DiseaseDTO dto) {
		
		Disease newDisease = DiseaseConverter.dtoToDisease(dto);
		return diseaseRepository.save(newDisease);
	}

}
