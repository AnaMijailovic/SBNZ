package com.healthriskassessment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.healthriskassessment.model.Desease;

@Repository
public interface DeseaseRepository extends JpaRepository<Desease, Long>{
	
	Desease findByName(String name);
}	
