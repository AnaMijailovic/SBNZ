package com.healthriskassessment.config;

import org.kie.api.event.rule.AgendaGroupPoppedEvent;
import org.kie.api.KieServices;
import org.kie.api.builder.KieScanner;
import org.kie.api.event.rule.AfterMatchFiredEvent;
import org.kie.api.event.rule.AgendaEventListener;
import org.kie.api.event.rule.AgendaGroupPushedEvent;
import org.kie.api.event.rule.BeforeMatchFiredEvent;
import org.kie.api.event.rule.MatchCancelledEvent;
import org.kie.api.event.rule.MatchCreatedEvent;
import org.kie.api.event.rule.ObjectDeletedEvent;
import org.kie.api.event.rule.ObjectInsertedEvent;
import org.kie.api.event.rule.ObjectUpdatedEvent;
import org.kie.api.event.rule.RuleFlowGroupActivatedEvent;
import org.kie.api.event.rule.RuleFlowGroupDeactivatedEvent;
import org.kie.api.event.rule.RuleRuntimeEventListener;
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
    	KieSession session = kieContainer.newKieSession("ksession-rules");
    	session.addEventListener(new RuleRuntimeEventListener() {
            @Override
            public void objectInserted(ObjectInsertedEvent event) {
                System.out.println("[INFO] Object inserted \n"
                        + event.getObject().toString());
            }

            @Override
            public void objectUpdated(ObjectUpdatedEvent event) {
                System.out.println("[INFO] Object was updated \n"
                        + "new Content \n" + event.getObject().toString());
            }

            @Override
            public void objectDeleted(ObjectDeletedEvent event) {
                System.out.println("[INFO] Object retracted \n"
                        + event.getOldObject().toString());
            }
        });

        session.addEventListener(new AgendaEventListener() {

            @Override
            public void matchCreated(MatchCreatedEvent event) {
                System.out.println("[INFO] The rule "
                        + event.getMatch().getRule().getName()
                        + " can be fired in agenda");
            }

            @Override
            public void matchCancelled(MatchCancelledEvent event) {
                System.out.println("[INFO] The rule "
                        + event.getMatch().getRule().getName()
                        + " cannot b in agenda");
            }

            @Override
            public void beforeMatchFired(BeforeMatchFiredEvent event) {
                System.out.println("[INFO] The rule "
                        + event.getMatch().getRule().getName()
                        + " will be fired");
            }

            @Override
            public void afterMatchFired(AfterMatchFiredEvent event) {
                System.out.println("[INFO] The rule "
                        + event.getMatch().getRule().getName()
                        + " has been fired");
            }
            
            @Override
            public void agendaGroupPopped(AgendaGroupPoppedEvent event) {
            }

            @Override
            public void agendaGroupPushed(AgendaGroupPushedEvent event) {
            }

            @Override
            public void beforeRuleFlowGroupActivated(RuleFlowGroupActivatedEvent event) {
            }

            @Override
            public void afterRuleFlowGroupActivated(RuleFlowGroupActivatedEvent event) {
            }

            @Override
            public void beforeRuleFlowGroupDeactivated(RuleFlowGroupDeactivatedEvent event) {
            }

            @Override
            public void afterRuleFlowGroupDeactivated(RuleFlowGroupDeactivatedEvent event) {
            }
        });

        return session;
    }

}
