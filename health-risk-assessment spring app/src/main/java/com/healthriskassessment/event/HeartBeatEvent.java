package com.healthriskassessment.event;

import java.io.Serializable;

import org.kie.api.definition.type.Role;
import org.kie.api.definition.type.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Role(Role.Type.EVENT)
@Timestamp(value = "timestamp")
public class HeartBeatEvent implements Serializable{

	private static final long serialVersionUID = -1398164783644582905L;
	
	private long timestamp;

}
