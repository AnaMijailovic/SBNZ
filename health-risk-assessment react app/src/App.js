import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import HealthData from './components/health-data/HealthData';
import UserDataForm from './components/user-data-form/UserDataForm';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import LoginForm from './components/login-form/LoginForm';
import RegistrationForm from './components/registration-form/RegistrationForm';

function App() {

  const [healthData, setHealthData] = useState({bmiValue: "",
                                                bmiCategory: "", bmrValue: "", tdeeValue: "", 
                                                kgTillNormal: "",
                                                averageSleepLowerLimit: "",
                                                averageSleepHigherLimit: "",
                                                deseases: []});


  return (
    <Router>
        <div className="App">
            <Navbar />

            <Route exact path="/">
                <div className="userDataForm">
                    <UserDataForm healthData={health => setHealthData(health.data)} />
                </div>

                <div className="healthData">
                    <HealthData props={ healthData }></HealthData>
                </div>
            </Route>
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/registration" component={RegistrationForm} />
         </div>
    </Router>
  );
}

export default App;
