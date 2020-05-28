package com.healthriskassessment.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Desease {
	
	@Id
	@GeneratedValue
	private Long id;
	
	@Column(unique=true, nullable=false)
	private String name;
	
	@Lob
	@Column(nullable=false)
	private String description;
	
	@ManyToMany
	private Set<Risk> risks;

}
