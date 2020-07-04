/* AUTHORITY */
insert into authority (id, name) values (1, 'ADMIN');
insert into authority (id, name) values (2, 'USER');

/* USERS */
-- password is 'admin' (bcrypt encoded - 10 rounds)
insert into admin (id, username, password, first_name, last_name, email)
values ( 1000,'admin1', '$2y$10$c6gNPVh8L.dOpGt40kOliOJVK9UggtR8iNp4HpBfPnOfUaFUM5nYe', 'ana', 'mijailovic', 'anaam1997@gmail.com');
insert into admin (id, username, password, first_name, last_name, email)
values ( 1001, 'admin2','$2y$10$c6gNPVh8L.dOpGt40kOliOJVK9UggtR8iNp4HpBfPnOfUaFUM5nYe', 'ana', 'mijailovic', 'anaamm1997@gmail.com');
insert into registered_user (id, username, password, first_name, last_name, email)
values ( 1002, 'user', '$2y$10$c6gNPVh8L.dOpGt40kOliOJVK9UggtR8iNp4HpBfPnOfUaFUM5nYe', 'ana', 'mijailovic', 'anam1997@gmail.com');


/* ADDS AUTHORITIES TO  USERS */
INSERT INTO user_authority (user_id,authority_id) values(1000,1);
INSERT INTO user_authority (user_id,authority_id) values(1001,1);
INSERT INTO user_authority (user_id,authority_id) values(1002,2);

/* RISKS */
insert into risk (id, name, description) values (1000, "Sleep deprivation", "Sleep deprivation, also known as insufficient sleep or sleeplessness, is the condition of not having enough sleep. It can be either chronic or acute and may vary widely in severity. A chronic sleep-restricted state adversely affects the brain and cognitive function. However, in a subset of cases, sleep deprivation can, paradoxically, lead to increased energy and alertness and enhanced mood; although its long-term consequences have never been evaluated, it has even been used as a treatment for depression.");
insert into risk (id, name, description) values (1001, "Too much sleep", "For most adults, getting between seven and nine hours of sleep a night is ideal. Although a small percentage of people actually need 10 hours, for most adults sleeping more hours than the recommended amount may indicate an underlying health concern. In addition, regularly sleeping more than the suggested amount may increase the risk of obesity, headache, back pain, and heart disease. And a recent study discovered that oversleeping can put the body at risk for metabolic issues.");
insert into risk (id, name, description) values (1002, "Smoking", "Smoking generally has negative health effects, because smoke inhalation inherently poses challenges to various physiologic processes such as respiration. Diseases related to tobacco smoking have been shown to kill approximately half of long-term smokers when compared to average mortality rates faced by non-smokers. Smoking caused over five million deaths a year from 1990 to 2015.");
insert into risk (id, name, description) values (1003, "Drinking", "Alcohol use can affect all parts of the body, but it particularly affects the brain, heart, liver, pancreas and immune system. Alcoholism can result in mental illness, delirium tremens, Wernicke–Korsakoff syndrome, irregular heartbeat, an impaired immune response, liver cirrhosis and increased cancer risk. Drinking during pregnancy can result in fetal alcohol spectrum disorders. Women are generally more sensitive than men to the harmful effects of alcohol, primarily due to their smaller body weight, lower capacity to metabolize alcohol, and higher proportion of body fat.");
insert into risk (id, name, description) values (1005, "Underweight", "A person may be underweight due to genetics, improper metabolism of nutrients, lack of food (frequently due to poverty), drugs that affect appetite, illness (physical or mental) or the eating disorder anorexia nervosa. Being underweight is associated with certain medical conditions, including type 1 diabetes, hyperthyroidism, cancer, and tuberculosis. People with gastrointestinal or liver problems may be unable to absorb nutrients adequately. People with certain eating disorders can also be underweight due to one or more nutrient deficiencies or excessive exercise, which exacerbates nutrient deficiencies.");
insert into risk (id, name, description) values (1004, "Obesity", "Obesity is a medical condition in which excess body fat has accumulated to an extent that it may have a negative effect on health. People are generally considered obese when their body mass index (BMI), a measurement obtained by dividing a person's weight by the square of the person's height, is over 30 kg/m2; the range 25–30 kg/m2 is defined as overweight. Some East Asian countries use lower values.");
insert into risk (id, name, description) values (1006, "Low physical activity", "Lack of physical activity has clearly been shown to be a risk factor for cardiovascular disease and other conditions. Thousands and thousands of deaths occur each year due to a lack of regular physical activity. Low levels of physical activity are a major risk factor for chronic conditions. People who do not do sufficient physical activity have a greater risk of cardiovascular disease, type 2 diabetes and osteoporosis. Being physically active improves mental and musculoskeletal health and reduces other risk factors such as overweight and obesity, high blood pressure and high blood cholesterol.");
insert into risk (id, name, description) values (1007, "Family history", "A family medical history is a record of health information about a person and his or her close relatives. A complete record includes information from three generations of relatives, including children, brothers and sisters, parents, aunts and uncles, nieces and nephews, grandparents, and cousins. Families have many factors in common, including their genes, environment, and lifestyle. Together, these factors can give clues to medical conditions that may run in a family. By noticing patterns of disorders among relatives, healthcare professionals can determine whether an individual, other family members, or future generations may be at an increased risk of developing a particular condition.");
insert into risk (id, name, description) values (1008, "Stress", "Stress is a natural feeling of not being able to cope with specific demands and events. However, stress can become a chronic condition if a person does not take steps to manage it. These demands can come from work, relationships, financial pressures, and other situations, but anything that poses a real or perceived challenge or threat to a person’s well-being can cause stress.");

/* diseaseS*/
insert into disease (id, name, description ) values (1000, "Depression", "Depression (major depressive disorder) is a common and serious medical illness that negatively affects how you feel, the way you think and how you act. Fortunately, it is also treatable. Depression causes feelings of sadness and/or a loss of interest in activities once enjoyed. It can lead to a variety of emotional and physical problems and can decrease a person’s ability to function at work and at home");
insert into disease (id, name, description ) values (1001, "Concentration and memory problems", "Concentration problems are a common occurrence for most people, at different times throughout their lives. Experiencing trouble with your ability to hold attention on a task, or lacking the ability to maintain proper focus, can be caused by dietary, environmental, hereditary, chemical or hormonal factors. ");
insert into disease (id, name, description ) values (1002, "Weakened immune system", "The primary symptom of a weak immune system is susceptibility to infection. A person with a weak immune system is likely to get infections more frequently than most other people, and these illnesses might be more severe or harder to treat. These individuals may also find themselves dealing with an infection that a person with a stronger immune system would not get.");
insert into disease (id, name, description ) values (1003, "Stroke", "A stroke is a medical condition in which poor blood flow to the brain causes cell death. There are two main types of stroke: ischemic, due to lack of blood flow, and hemorrhagic, due to bleeding. Both cause parts of the brain to stop functioning properly. Signs and symptoms of a stroke may include an inability to move or feel on one side of the body, problems understanding or speaking, dizziness, or loss of vision to one side.");
insert into disease (id, name, description ) values (1004, "Diabetes", "Diabetes mellitus (DM), commonly known as diabetes, is a group of metabolic disorders characterized by a high blood sugar level over a prolonged period of time. Symptoms often include frequent urination, increased thirst, and increased appetite. If left untreated, diabetes can cause many complications. Acute complications can include diabetic ketoacidosis, hyperosmolar hyperglycemic state, or death. Serious long-term complications include cardiovascular disease, stroke, chronic kidney disease, foot ulcers, damage to the nerves, damage to the eyes and cognitive impairment.");
insert into disease (id, name, description ) values (1005, "High blood pressure", "High blood pressure is a common condition in which the long-term force of the blood against your artery walls is high enough that it may eventually cause health problems, such as heart disease. Blood pressure is determined both by the amount of blood your heart pumps and the amount of resistance to blood flow in your arteries. The more blood your heart pumps and the narrower your arteries, the higher your blood pressure.");
insert into disease (id, name, description ) values (1006, "Heart disease", "Coronary artery disease (CAD), also known as coronary heart disease (CHD) or ischemic heart disease (IHD), involves the reduction of blood flow to the heart muscle due to build-up of plaque in the arteries of the heart. It is the most common of the cardiovascular diseases. Types include stable angina, unstable angina, myocardial infarction, and sudden cardiac death. A common symptom is chest pain or discomfort which may travel into the shoulder, arm, back, neck, or jaw.");
insert into disease (id, name, description ) values (1007, "Cancer", "Cancer is a group of diseases involving abnormal cell growth with the potential to invade or spread to other parts of the body. These contrast with benign tumors, which do not spread. Possible signs and symptoms include a lump, abnormal bleeding, prolonged cough, unexplained weight loss, and a change in bowel movements. While these symptoms may indicate cancer, they can also have other causes. Over 100 types of cancers affect humans.");
insert into disease (id, name, description ) values (1008, "Heart attack", "A heart attack occurs when the flow of blood to the heart is blocked. The blockage is most often a buildup of fat, cholesterol and other substances, which form a plaque in the arteries that feed the heart (coronary arteries). Sometimes, a plaque can rupture and form a clot that blocks blood flow. The interrupted blood flow can damage or destroy part of the heart muscle.");
insert into disease (id, name, description ) values (1009, "Osteoporosis", "Osteoporosis causes bones to become weak and brittle — so brittle that a fall or even mild stresses such as bending over or coughing can cause a fracture. Osteoporosis-related fractures most commonly occur in the hip, wrist or spine. Bone is living tissue that is constantly being broken down and replaced. Osteoporosis occurs when the creation of new bone doesn't keep up with the loss of old bone.");

-- Depression
insert into disease_risks (disease_id, risks_id) values (1000, 1000);
insert into disease_risks (disease_id, risks_id) values (1000, 1001);
insert into disease_risks (disease_id, risks_id) values (1000, 1004);
insert into disease_risks (disease_id, risks_id) values (1000, 1006);
insert into disease_risks (disease_id, risks_id) values (1000, 1008);

-- Concentration and memory problems
insert into disease_risks (disease_id, risks_id) values (1001, 1000);
insert into disease_risks (disease_id, risks_id) values (1001, 1001);
insert into disease_risks (disease_id, risks_id) values (1001, 1003);

-- Weakened immune system
insert into disease_risks (disease_id, risks_id) values (1002, 1000);
insert into disease_risks (disease_id, risks_id) values (1002, 1002);
insert into disease_risks (disease_id, risks_id) values (1002, 1003);
insert into disease_risks (disease_id, risks_id) values (1002, 1004);
insert into disease_risks (disease_id, risks_id) values (1002, 1005);
insert into disease_risks (disease_id, risks_id) values (1002, 1006);
insert into disease_risks (disease_id, risks_id) values (1002, 1008);

-- Stroke
insert into disease_risks (disease_id, risks_id) values (1003, 1000);
insert into disease_risks (disease_id, risks_id) values (1003, 1001);
insert into disease_risks (disease_id, risks_id) values (1003, 1002);
insert into disease_risks (disease_id, risks_id) values (1003, 1004);
insert into disease_risks (disease_id, risks_id) values (1003, 1006);
insert into disease_risks (disease_id, risks_id) values (1003, 1007);

-- Diabetes 
insert into disease_risks (disease_id, risks_id) values (1004, 1000);
insert into disease_risks (disease_id, risks_id) values (1004, 1001);
insert into disease_risks (disease_id, risks_id) values (1004, 1002);
insert into disease_risks (disease_id, risks_id) values (1004, 1004);
insert into disease_risks (disease_id, risks_id) values (1004, 1006);
insert into disease_risks (disease_id, risks_id) values (1004, 1007);

-- High blood pressure
insert into disease_risks (disease_id, risks_id) values (1005, 1000);
insert into disease_risks (disease_id, risks_id) values (1005, 1003);
insert into disease_risks (disease_id, risks_id) values (1005, 1004);
insert into disease_risks (disease_id, risks_id) values (1005, 1006);
insert into disease_risks (disease_id, risks_id) values (1005, 1007);
insert into disease_risks (disease_id, risks_id) values (1005, 1008);

-- Heart disease
insert into disease_risks (disease_id, risks_id) values (1006, 1000);
insert into disease_risks (disease_id, risks_id) values (1006, 1001);
insert into disease_risks (disease_id, risks_id) values (1006, 1002);
insert into disease_risks (disease_id, risks_id) values (1006, 1004);
insert into disease_risks (disease_id, risks_id) values (1006, 1006);
insert into disease_risks (disease_id, risks_id) values (1006, 1007);


-- Cancer
insert into disease_risks (disease_id, risks_id) values (1007, 1002);
insert into disease_risks (disease_id, risks_id) values (1007, 1003);
insert into disease_risks (disease_id, risks_id) values (1007, 1004);
insert into disease_risks (disease_id, risks_id) values (1007, 1006);
insert into disease_risks (disease_id, risks_id) values (1007, 1007);

-- Heart attack
insert into disease_risks (disease_id, risks_id) values (1008, 1000);
insert into disease_risks (disease_id, risks_id) values (1008, 1002);
insert into disease_risks (disease_id, risks_id) values (1008, 1005);
insert into disease_risks (disease_id, risks_id) values (1008, 1008);

-- Osteoporosis
insert into disease_risks (disease_id, risks_id) values (1009, 1003);
insert into disease_risks (disease_id, risks_id) values (1009, 1005);
insert into disease_risks (disease_id, risks_id) values (1009, 1007);