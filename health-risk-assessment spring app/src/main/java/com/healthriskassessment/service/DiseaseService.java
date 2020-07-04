package com.healthriskassessment.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.healthriskassessment.converters.DiseaseConverter;
import com.healthriskassessment.dto.DiseaseDTO;
import com.healthriskassessment.exceptions.EntityAlreadyExistsException;
import com.healthriskassessment.exceptions.EntityNotFoundException;
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

	public Disease getOne(Long id) throws EntityNotFoundException {
		Optional<Disease> diseaseOpt = diseaseRepository.findById(id);
		if (!diseaseOpt.isPresent()) {
			throw new EntityNotFoundException("");
		}
		return diseaseOpt.get();

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

	public Disease updateDisease(DiseaseDTO dto) throws EntityNotFoundException, EntityAlreadyExistsException {

		Disease updateDisease = getOne(dto.getId());

		// If the name is changed, check if the new one is unique
		if (!dto.getName().equals(updateDisease.getName()) && diseaseRepository.findByName(dto.getName()) != null) {

			throw new EntityAlreadyExistsException(dto.getName());

		}

		// update disease
		return diseaseRepository.save(DiseaseConverter.dtoToDisease(dto));
	}

}
