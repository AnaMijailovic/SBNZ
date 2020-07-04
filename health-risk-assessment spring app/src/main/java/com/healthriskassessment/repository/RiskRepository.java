package com.healthriskassessment.repository;

import com.healthriskassessment.model.Disease;
import com.healthriskassessment.model.Risk;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RiskRepository extends JpaRepository<Risk, Long>{
	
	Risk findByName(String name);
	
	@Query("SELECT DISTINCT d FROM Disease d JOIN d.risks r WHERE r.name = :riskName")
	List<Disease> findByRiskName(String riskName);
}
