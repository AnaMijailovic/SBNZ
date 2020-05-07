package com.healthriskassessment.config;

import org.kie.api.KieServices;
import org.kie.api.builder.KieScanner;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.web.context.annotation.ApplicationScope;


@Configuration
public class DroolsConfig {
	
	@Autowired
    private KieContainer kieContainer;

    @Bean
    @ApplicationScope
    public KieContainer kieContainer() {

        KieServices kieServices  = KieServices.Factory.get();
        KieContainer kContainer = kieServices.newKieContainer(kieServices.newReleaseId(
                "com.health-risk-assessment", "drools", "1.0.0-SNAPSHOT"));
        KieScanner kScanner = kieServices.newKieScanner(kContainer);
        kScanner.start(10_000);

        return kContainer;
    }


    @Bean
    @Scope(value = "request", proxyMode = ScopedProxyMode.TARGET_CLASS)
    public KieSession kieSession() {
        return kieContainer.newKieSession("ksession-rules");
    }

}
