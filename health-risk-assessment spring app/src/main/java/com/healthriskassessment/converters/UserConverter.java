package com.healthriskassessment.converters;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.healthriskassessment.dto.UserDTO;
import com.healthriskassessment.model.User;

public class UserConverter {
	
	public static User convertFromDTO(UserDTO dto) {
		User user = new User();
		user.setId(dto.getId());
		user.setUsername(dto.getUsername());
		user.setFirstName(dto.getFirstName());
		user.setLastName(dto.getLastName());
		user.setEmail(dto.getEmail());
		BCryptPasswordEncoder bc = new BCryptPasswordEncoder();
		user.setPassword(bc.encode(dto.getPassword()));

		return user;
	}

	public static UserDTO convertToDTO(User user) {
		return  new UserDTO(user.getId(), user.getUsername(), user.getPassword(), "", user.getEmail(), user.getFirstName(),
				user.getLastName());
		 
	}
	

}
