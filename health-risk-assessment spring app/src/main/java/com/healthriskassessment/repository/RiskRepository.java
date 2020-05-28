package com.healthriskassessment.repository;

import com.healthriskassessment.model.Risk;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RiskRepository extends JpaRepository<Risk, Long>{
	
	Risk findByName(String name);
}
