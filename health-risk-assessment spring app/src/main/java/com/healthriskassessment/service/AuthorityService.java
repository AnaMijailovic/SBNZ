package com.healthriskassessment.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.healthriskassessment.model.Authority;
import com.healthriskassessment.repository.AuthorityRepository;

@Service
public class AuthorityService {

	@Autowired
	AuthorityRepository repository;
	
	public Authority findByID(Long id) {
		return repository.getOne(id);
	}
	

}
