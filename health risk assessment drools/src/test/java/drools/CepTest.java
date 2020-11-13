package drools;

import static org.hamcrest.Matchers.equalTo;
import static org.junit.Assert.assertThat;

import java.util.concurrent.TimeUnit;

import org.drools.core.time.SessionPseudoClock;
import org.junit.Test;
import org.kie.api.KieServices;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;

//import com.healthriskassessment.event.HeartBeatEvent;

//import com.healthriskassessment.event.HeartBeatEvent;

public class CepTest {
	
	@Test
	public void demoTest() {
				
		assertThat( true, equalTo(true));
	}
	

	// Ne dodaju se HearthBeatEvents u radnu memoriju
	// Treba da se pokrene samo pravilo Calculate stress level
	// I da dobijena vrednost za stressLevel bude 0
/*	@Test
	public void noHeartBeatEvents() {

		KieServices ks = KieServices.Factory.get();
		KieContainer kContainer = ks.getKieClasspathContainer();
		KieSession kieSession = kContainer.newKieSession("ksession-cep");
		kieSession.setGlobal("stressLevel", 0);

		assertThat(kieSession.fireAllRules(), equalTo(1));

		Integer returnedStressLevel = (int) kieSession.getGlobal("stressLevel");

		assertThat(returnedStressLevel, equalTo(0));
	}

	// Dodaje se 80 HeartBeatEvent-a, interval izmedju otkucaja je 900ms
	// StressLevel treba da bude 0
	@Test
	public void stressLevel0() {

		KieServices ks = KieServices.Factory.get();
		KieContainer kContainer = ks.getKieClasspathContainer();
		KieSession kieSession = kContainer.newKieSession("ksession-cep");

		kieSession.setGlobal("stressLevel", 0);
		SessionPseudoClock clock = kieSession.getSessionClock();

		for (int i = 0; i < 80; i++) {
			HeartBeatEvent hbe = new HeartBeatEvent(clock.getCurrentTime());
			kieSession.getEntryPoint("beats").insert(hbe);
			clock.advanceTime(900, TimeUnit.MILLISECONDS);
		}

		kieSession.fireAllRules();
		Integer returnedStressLevel = (int) kieSession.getGlobal("stressLevel");

		assertThat(returnedStressLevel, equalTo(0));
	}

	// Dodaje se 80 HeartBeatEvent-a, interval izmedju otkucaja je 500ms
	// Vise od 85 otkucaja se ubacuje
	// StressLevel treba da bude 1 zbog vise od 85 otkucaja ("Create
	// TooManyHeartBeats" pravilo )
	@Test
	public void tooManyHeartBeats() {

		KieServices ks = KieServices.Factory.get();
		KieContainer kContainer = ks.getKieClasspathContainer();
		KieSession kieSession = kContainer.newKieSession("ksession-cep");

		kieSession.setGlobal("stressLevel", 0);
		SessionPseudoClock clock = kieSession.getSessionClock();

		for (int i = 0; i < 90; i++) {
			HeartBeatEvent hbe = new HeartBeatEvent(clock.getCurrentTime());
			kieSession.getEntryPoint("beats").insert(hbe);
			clock.advanceTime(500, TimeUnit.MILLISECONDS);
		}

		kieSession.fireAllRules();
		Integer returnedStressLevel = (int) kieSession.getGlobal("stressLevel");

		assertThat(returnedStressLevel, equalTo(1));
	}

	// Interval izmedju svaka 2 otkucaja je veci od 50ms
	// Maksimalan stressLevel -> 10
	@Test
	public void stressLevel10() {

		KieServices ks = KieServices.Factory.get();
		KieContainer kContainer = ks.getKieClasspathContainer();
		KieSession kieSession = kContainer.newKieSession("ksession-cep");

		kieSession.setGlobal("stressLevel", 0);
		SessionPseudoClock clock = kieSession.getSessionClock();

		for (int i = 0; i < 80; i++) {
			HeartBeatEvent hbe = new HeartBeatEvent(clock.getCurrentTime());
			kieSession.getEntryPoint("beats").insert(hbe);
			clock.advanceTime(900 + (i + 1) * 100, TimeUnit.MILLISECONDS);
		}

		kieSession.fireAllRules();
		Integer returnedStressLevel = (int) kieSession.getGlobal("stressLevel");

		assertThat(returnedStressLevel, equalTo(10));
	}

	// HeartBeatEvent nisu ubaceni preko "beats" entry point
	@Test
	public void testEntryPoint() {

		KieServices ks = KieServices.Factory.get();
		KieContainer kContainer = ks.getKieClasspathContainer();
		KieSession kieSession = kContainer.newKieSession("ksession-cep");

		kieSession.setGlobal("stressLevel", 0);
		SessionPseudoClock clock = kieSession.getSessionClock();

		for (int i = 0; i < 80; i++) {
			HeartBeatEvent hbe = new HeartBeatEvent(clock.getCurrentTime());
			kieSession.insert(hbe);
			clock.advanceTime(900 + (i + 1) * 100, TimeUnit.MILLISECONDS);
		}

		assertThat(kieSession.fireAllRules(), equalTo(1));

		Integer returnedStressLevel = (int) kieSession.getGlobal("stressLevel");

		assertThat(returnedStressLevel, equalTo(0));
	} */

}
