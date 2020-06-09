package com.healthriskassessment.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.healthriskassessment.converters.DeseaseConverter;
import com.healthriskassessment.dto.DeseaseDTO;
import com.healthriskassessment.model.Desease;
import com.healthriskassessment.repository.DeseaseRepository;

@Service
public class DeseaseService {

	@Autowired
	private DeseaseRepository deseaseRepository;

	public List<DeseaseDTO> getAll() {

		List<Desease> deseases = deseaseRepository.findAll();

		return deseases.stream().map(desease -> {
			return DeseaseConverter.deseaseToDto(desease);
		}).collect(Collectors.toList());
	}
	
	public DeseaseDTO getByName(String name) {

		Desease desease = deseaseRepository.findByName(name);
		return DeseaseConverter.deseaseToDto(desease);

	}
	
	public boolean deleteDisease(String name) {
		Desease disease = deseaseRepository.findByName(name);
		deseaseRepository.delete(disease);
		return true;
	}
	
	public Desease addDesease(DeseaseDTO dto) {
		
		Desease newDesease = DeseaseConverter.dtoToDesease(dto);
		return deseaseRepository.save(newDesease);
	}

}
