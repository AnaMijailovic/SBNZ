package com.healthriskassessment.config;

import org.kie.api.KieServices;
import org.kie.api.builder.KieScanner;
import org.kie.api.runtime.KieContainer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.context.annotation.ApplicationScope;


@Configuration
public class DroolsConfig {

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

}
