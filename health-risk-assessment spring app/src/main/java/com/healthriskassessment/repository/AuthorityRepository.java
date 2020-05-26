package com.healthriskassessment.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.healthriskassessment.model.Authority;

public interface AuthorityRepository  extends JpaRepository<Authority, Long>{

}
