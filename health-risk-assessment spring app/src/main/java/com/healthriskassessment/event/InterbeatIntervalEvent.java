package com.healthriskassessment.event;

import java.io.Serializable;

import org.kie.api.definition.type.Duration;
import org.kie.api.definition.type.Role;
import org.kie.api.definition.type.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Role(Role.Type.EVENT)
@Timestamp(value = "startTime")
@Duration(value = "duration")
public class InterbeatIntervalEvent implements Serializable {

	private static final long serialVersionUID = 6863930453913189251L;
	
	private Long startTime;
	private Long duration;
	private boolean processed;
		
}
