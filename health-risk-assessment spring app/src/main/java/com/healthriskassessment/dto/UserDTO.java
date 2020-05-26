package com.healthriskassessment.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {


	private Long id;
	private String username;
	private String password;
	private String repeatedPassword;
	private String firstName;
	private String lastName;
	private String email;

}
