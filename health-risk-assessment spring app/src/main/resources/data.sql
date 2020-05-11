insert into risk (id, name, description) values (1000, "Underweight", "");
insert into risk (id, name, description) values (1001, "Obesity", "");
insert into risk (id, name, description) values (1002, "Sleep deprivation", "");
insert into risk (id, name, description) values (1003, "Too much sleep", "");
insert into risk (id, name, description) values (1004, "Smoking", "");
insert into risk (id, name, description) values (1005, "Drinking", "");
insert into risk (id, name, description) values (1006, "Low physical activity", "");
insert into risk (id, name, description) values (1007, "Family history", "");
insert into risk (id, name, description) values (1008, "Stress", "");

insert into desease (id, name, description ) values (1000, "Depression", "");
insert into desease (id, name, description ) values (1001, "Concentration and memory problems", "");
insert into desease (id, name, description ) values (1002, "Weakened immune system", "");
insert into desease (id, name, description ) values (1003, "Stroke", "");
insert into desease (id, name, description ) values (1004, "Diabetes", "");
insert into desease (id, name, description ) values (1005, "High blood pressure", "");
insert into desease (id, name, description ) values (1006, "Heart disease ", "");
insert into desease (id, name, description ) values (1007, "Cancer", "");
insert into desease (id, name, description ) values (1008, "Heart attack", "");
insert into desease (id, name, description ) values (1009, "Osteoporosis", "");

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
-- insert into desease_risks (desease_id, risks_id) values (1009, 1000);
insert into desease_risks (desease_id, risks_id) values (1009, 1005);
insert into desease_risks (desease_id, risks_id) values (1009, 1007);