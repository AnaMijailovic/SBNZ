package com.healthriskassessment.model;

import javax.persistence.Entity;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
public class Admin extends User{

	private static final long serialVersionUID = 5012633471380988541L;

}
