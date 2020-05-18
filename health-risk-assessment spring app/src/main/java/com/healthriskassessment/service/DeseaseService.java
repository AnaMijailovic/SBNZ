package com.healthriskassessment.service;

import java.util.ArrayList;
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
	
	public List<DeseaseDTO> getAll(){
		
		List<Desease> deseases = deseaseRepository.findAll();
		
		return deseases.stream().map(desease -> {
			return DeseaseConverter.deseaseToDto(desease);
		}).collect(Collectors.toList());
	}

}
