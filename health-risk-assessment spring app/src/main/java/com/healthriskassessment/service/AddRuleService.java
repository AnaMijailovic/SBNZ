package com.healthriskassessment.service;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import org.apache.maven.shared.invoker.DefaultInvocationRequest;
import org.apache.maven.shared.invoker.DefaultInvoker;
import org.apache.maven.shared.invoker.InvocationRequest;
import org.apache.maven.shared.invoker.InvocationResult;
import org.apache.maven.shared.invoker.Invoker;
import org.apache.maven.shared.invoker.MavenInvocationException;
import org.springframework.stereotype.Service;

import com.healthriskassessment.dto.NewRuleDTO;

@Service
public class AddRuleService {
	
	public static final String RULE_PATH = "..\\health risk assessment drools\\src\\main\\resources\\rules\\";
	
	public boolean addNewRule(NewRuleDTO dto) throws FileNotFoundException, RuntimeException, MavenInvocationException {
		
		String path1 = RULE_PATH + dto.getFileName() + ".drl";
		System.out.println("Path is: " + path1);
		
		PrintWriter out = new PrintWriter(new File(path1));
		out.println(dto.getFileBody());
		out.close();
		
		updateDroolsJar();
		
		return true;
	}
	
	 private void updateDroolsJar () throws RuntimeException, MavenInvocationException {

	        InvocationRequest req = new DefaultInvocationRequest();
	        req.setPomFile( new File( "..\\health risk assessment drools\\pom.xml" ) );
	        
	        // add goals
	        List<String> goals = new ArrayList<String>();
	        goals.add("clean");
	        goals.add("install");   
	        req.setGoals(goals);
	        
	        Invoker invoker = new DefaultInvoker();
	        System.out.println("M2_HOME " + System.getenv("M2_HOME"));
	        invoker.setMavenHome(new File(System.getenv("M2_HOME")));
	        
	        InvocationResult result = invoker.execute( req );
	        
	        if ( result.getExitCode() != 0 )
	        {
	             // TODO throw error
	        	 System.out.println("Build failed");
	        }
	 }

}
