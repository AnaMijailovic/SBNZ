package com.healthriskassessment.repository;

import java.util.List;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.healthriskassessment.model.Disease;

@Repository
public interface DiseaseRepository extends JpaRepository<Disease, Long>{
	
	Disease findByName(String name);

}	
