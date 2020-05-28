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
insert into risk (id, name, description) values (1000, "Underweight", "");
insert into risk (id, name, description) values (1001, "Obesity", "");
insert into risk (id, name, description) values (1002, "Sleep deprivation", "");
insert into risk (id, name, description) values (1003, "Too much sleep", "");
insert into risk (id, name, description) values (1004, "Smoking", "");
insert into risk (id, name, description) values (1005, "Drinking", "");
insert into risk (id, name, description) values (1006, "Low physical activity", "");
insert into risk (id, name, description) values (1007, "Family history", "");
insert into risk (id, name, description) values (1008, "Stress", "");

/* DESEASES*/
insert into desease (id, name, description ) values (1000, "Depression", "Depression (major depressive disorder) is a common and serious medical illness that negatively affects how you feel, the way you think and how you act. Fortunately, it is also treatable. Depression causes feelings of sadness and/or a loss of interest in activities once enjoyed. It can lead to a variety of emotional and physical problems and can decrease a person’s ability to function at work and at home");
insert into desease (id, name, description ) values (1001, "Concentration and memory problems", "Concentration problems are a common occurrence for most people, at different times throughout their lives. Experiencing trouble with your ability to hold attention on a task, or lacking the ability to maintain proper focus, can be caused by dietary, environmental, hereditary, chemical or hormonal factors. ");
insert into desease (id, name, description ) values (1002, "Weakened immune system", "The primary symptom of a weak immune system is susceptibility to infection. A person with a weak immune system is likely to get infections more frequently than most other people, and these illnesses might be more severe or harder to treat. These individuals may also find themselves dealing with an infection that a person with a stronger immune system would not get.");
insert into desease (id, name, description ) values (1003, "Stroke", "");
insert into desease (id, name, description ) values (1004, "Diabetes", "");
insert into desease (id, name, description ) values (1005, "High blood pressure", "");
insert into desease (id, name, description ) values (1006, "Heart disease ", "");
insert into desease (id, name, description ) values (1007, "Cancer", "");
insert into desease (id, name, description ) values (1008, "Heart attack", "");
insert into desease (id, name, description ) values (1009, "Osteoporosis", "");


-- Stroke
insert into desease_risks (desease_id, risks_id) values (1003, 1002);
insert into desease_risks (desease_id, risks_id) values (1003, 1003);
insert into desease_risks (desease_id, risks_id) values (1003, 1004);
insert into desease_risks (desease_id, risks_id) values (1003, 1001);
insert into desease_risks (desease_id, risks_id) values (1003, 1006);

-- Diabetes 
insert into desease_risks (desease_id, risks_id) values (1004, 1002);
insert into desease_risks (desease_id, risks_id) values (1004, 1003);
insert into desease_risks (desease_id, risks_id) values (1004, 1004);
insert into desease_risks (desease_id, risks_id) values (1004, 1001);
insert into desease_risks (desease_id, risks_id) values (1004, 1006);
insert into desease_risks (desease_id, risks_id) values (1004, 1005);

-- Depression
insert into desease_risks (desease_id, risks_id) values (1000, 1002);
insert into desease_risks (desease_id, risks_id) values (1000, 1003);
insert into desease_risks (desease_id, risks_id) values (1000, 1001);
insert into desease_risks (desease_id, risks_id) values (1000, 1006);
insert into desease_risks (desease_id, risks_id) values (1000, 1008);

-- Cancer
insert into desease_risks (desease_id, risks_id) values (1007, 1004);
insert into desease_risks (desease_id, risks_id) values (1007, 1005);
insert into desease_risks (desease_id, risks_id) values (1007, 1001);
insert into desease_risks (desease_id, risks_id) values (1007, 1006);
insert into desease_risks (desease_id, risks_id) values (1007, 1007);

-- Osteoporosis
insert into desease_risks (desease_id, risks_id) values (1009, 1000);
insert into desease_risks (desease_id, risks_id) values (1009, 1005);
insert into desease_risks (desease_id, risks_id) values (1009, 1007);