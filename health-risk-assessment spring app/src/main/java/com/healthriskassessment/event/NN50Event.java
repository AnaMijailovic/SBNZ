package com.healthriskassessment.event;

import java.io.Serializable;

import org.kie.api.definition.type.Role;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Role(Role.Type.EVENT)
public class NN50Event implements Serializable{

	private static final long serialVersionUID = 4831011479930165992L;

}
