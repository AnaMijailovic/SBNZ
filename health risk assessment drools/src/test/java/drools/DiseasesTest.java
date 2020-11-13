package drools;

import static org.hamcrest.Matchers.equalTo;
import static org.junit.Assert.assertThat;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.junit.Test;
import org.kie.api.KieServices;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
/*
import com.healthriskassessment.dto.AlcoholDTO;
import com.healthriskassessment.dto.HealthDataDTO;
import com.healthriskassessment.dto.UserDataDTO;
import com.healthriskassessment.model.Disease;
import com.healthriskassessment.model.Risk;
import com.healthriskassessment.model.enums.ActivityLevel;
import com.healthriskassessment.model.enums.BMICategory;
import com.healthriskassessment.model.enums.Gender;
import com.healthriskassessment.model.enums.RiskLevel;
*/
public class DiseasesTest {
	
	@Test
	public void demoTest() {
				
		assertThat( true, equalTo(true));
	}
		
		// Nema pronadjenih rizika ni bolesti
/*		@Test
		public void noHearthBeatEvents() {
			
			KieServices ks = KieServices.Factory.get();
	  	    KieContainer kContainer = ks.getKieClasspathContainer();
	      	KieSession kieSession = kContainer.newKieSession("ksession-hra"); 
	      	kieSession.getAgenda().getAgendaGroup("risks").setFocus();
	      	
	      	UserDataDTO ud = new UserDataDTO();
			ud.setAge(22);
			ud.setWeight(52);
			ud.setHeight(158);
			ud.setGender(Gender.FEMALE);
			ud.setStressLevel(2);
			ud.setAverageSleepTime(420);
			ud.setActivityLevel(ActivityLevel.MODERATELY_ACTIVE);
			HealthDataDTO hd = new HealthDataDTO();
			hd.setRisks(new ArrayList<>());
			hd.setDiseases(new ArrayList<>());
			
			kieSession.insert(ud);
			kieSession.insert(hd);
			
			insertRisksAndDeseases(kieSession);
			
			kieSession.fireAllRules();
			
			kieSession.getAgenda().getAgendaGroup("deseases").setFocus();
		    kieSession.fireAllRules();
			
			// check BMI, BMR, TDEE values
			assertThat( hd.getBmiValue(), equalTo(20.829996f));
			assertThat( hd.getBmiCategory(), equalTo(BMICategory.NORMAL));
			assertThat( hd.getBmrValue(), equalTo(1236.5f));
			assertThat( hd.getTdeeValue(), equalTo(1916.575f));
			assertThat(hd.getKgTillNormal(), equalTo(0.0f));
			
			// check average sleep time
			assertThat( hd.getAverageSleepLowerLimit(), equalTo(7));
			assertThat(hd.getAverageSleepHigherLimit(), equalTo(9));
			
			// no risks
			assertThat(hd.getRisks().size(), equalTo(0));
			
			// no diseases
			assertThat(hd.getDiseases().size(), equalTo(0));
		}
		
		
		// Obesity i sleep deprivation -> uticu na cancer
		// Posto su samo 2 rizika treba da bude low risk za cancer
		@Test
		public void cancerLowRisk() {
			
			KieServices ks = KieServices.Factory.get();
	  	    KieContainer kContainer = ks.getKieClasspathContainer();
	      	KieSession kieSession = kContainer.newKieSession("ksession-hra"); 
	      	kieSession.getAgenda().getAgendaGroup("risks").setFocus();
	      	
	      	UserDataDTO ud = getUserWithRisks();
			HealthDataDTO hd = new HealthDataDTO();
			hd.setRisks(new ArrayList<>());
			hd.setDiseases(new ArrayList<>());
			
			kieSession.insert(ud);
			kieSession.insert(hd);
			
			kieSession.insert(ud);
			kieSession.insert(hd);
			
			insertRisksAndDeseases(kieSession);
			
			kieSession.fireAllRules();
			
			kieSession.getAgenda().getAgendaGroup("deseases").setFocus();
		    kieSession.fireAllRules();
			
			// check BMI, BMR, TDEE values
			assertThat( hd.getBmiValue(), equalTo(40.057682f));
			//assertThat( hd.getBmiCategory(), equalTo(BMICategory.OBESE_CLASS_III));
			assertThat( hd.getBmrValue(), equalTo(1716.5f));
			assertThat( hd.getTdeeValue(), equalTo(2660.575f));
			assertThat( hd.getKgTillNormal(), equalTo(-37.590004f));
			
			// check average sleep time
			assertThat( hd.getAverageSleepLowerLimit(), equalTo(7));
			assertThat(hd.getAverageSleepHigherLimit(), equalTo(9));
			
			// no risks
			assertThat(hd.getRisks().size(), equalTo(2)); // obesity i sleep deprivation
			
			// no diseases
			//assertThat(hd.getDiseases().size(), equalTo(1));
			//assertThat(hd.getDiseases().get(0).getRiskLevel(), equalTo(RiskLevel.LOW));
		}		
		
		// Obesity, sleep deprivation i drinking -> uticu na cancer
		// Sleep deprivation i drinking su oba u ovom slucaju high risk
		// "Disease at risk classification high risk 2" se okida
		@Test
		public void cancerHighRisk() {
			
			KieServices ks = KieServices.Factory.get();
	  	    KieContainer kContainer = ks.getKieClasspathContainer();
	      	KieSession kieSession = kContainer.newKieSession("ksession-hra"); 
	      	kieSession.getAgenda().getAgendaGroup("risks").setFocus();
	      	
	      	UserDataDTO ud = getUserWithRisks();
	      	
			AlcoholDTO alcohol = new AlcoholDTO(true, 5, 10);
			ud.setAlcohol(alcohol);
			
			HealthDataDTO hd = new HealthDataDTO();
			hd.setRisks(new ArrayList<>());
			hd.setDiseases(new ArrayList<>());
			
			kieSession.insert(ud);
			kieSession.insert(hd);
			
			insertRisksAndDeseases(kieSession);
			
			kieSession.fireAllRules();
			
			kieSession.getAgenda().getAgendaGroup("deseases").setFocus();
		    kieSession.fireAllRules();
			
			// 3 risks
			assertThat(hd.getRisks().size(), equalTo(3)); // obesity i sleep deprivation
			
			// cancer high level
			//assertThat(hd.getDiseases().size(), equalTo(1));
			//assertThat(hd.getDiseases().get(0).getRiskLevel(), equalTo(RiskLevel.HIGH));
		}	
		
		public void insertRisksAndDeseases(KieSession kieSession){
			List<Risk> risks =  new ArrayList<>();
			Risk tooMuchSleep = new Risk(null, "Too much sleep", "");
			Risk sleepDeprivation = new Risk(null, "Sleep deprivation", "");
			Risk obesity = new Risk(null, "Obesity", "");
			Risk underweight = new Risk(null, "Underweight", "");
			Risk smoking = new Risk(null, "Smoking", "");
			Risk drinking = new Risk(null, "Drinking", "");
			Risk lowPA = new Risk(null, "Low physical activity", "");
			Risk stress = new Risk(null, "Stress", "");
			
			risks.add(tooMuchSleep);
			risks.add(sleepDeprivation);
			risks.add(obesity);
			risks.add(underweight);
			risks.add(smoking);
			risks.add(drinking);
			risks.add(lowPA);
			risks.add(stress);
			
			Set<Risk> cancerRisks = new HashSet<Risk>();
			cancerRisks.add(smoking);
			cancerRisks.add(drinking);
			cancerRisks.add(obesity);
			List<Disease> deseases =  new ArrayList<>();
			deseases.add(new Disease(null, "Cancer", "", cancerRisks));
			
			risks.forEach(risk -> kieSession.insert(risk));
			deseases.forEach(desease -> kieSession.insert(desease));
			
			
		}
		
		public UserDataDTO getUserWithRisks() {
			
			UserDataDTO ud = new UserDataDTO();
			ud.setAge(22);
			ud.setWeight(100);
			ud.setHeight(158);
			ud.setGender(Gender.FEMALE);
			ud.setStressLevel(2);
			ud.setAverageSleepTime(220);
			ud.setActivityLevel(ActivityLevel.MODERATELY_ACTIVE);
			
			return ud;
		} */

}
