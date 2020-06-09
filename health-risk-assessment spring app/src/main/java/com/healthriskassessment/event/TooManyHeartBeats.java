package com.healthriskassessment.event;

import java.io.Serializable;

import org.kie.api.definition.type.Role;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Role(Role.Type.EVENT)
public class TooManyHeartBeats implements Serializable {

	private static final long serialVersionUID = -3410540879567002245L;
	
}
