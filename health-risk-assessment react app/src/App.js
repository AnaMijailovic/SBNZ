import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import HealthData from './components/health-data/HealthData';
import UserDataForm from './components/user-data-form/UserDataForm';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import {ProtectedRoute} from './components/common/ProtectedRoute';
import LoginForm from './components/login-form/LoginForm';
import RegistrationForm from './components/registration-form/RegistrationForm';
import AdminProfile from './components/admin-profile/AdminProfile';
import UserProfile from './components/user-profile/UserProfile';
import authService from './services/auth.service';

function App() {

  const [healthData, setHealthData] = useState({bmiValue: "",
                                                bmiCategory: "", bmrValue: "", tdeeValue: "", 
                                                kgTillNormal: "",
                                                averageSleepLowerLimit: "",
                                                averageSleepHigherLimit: "",
                                                deseases: []});

  const [isLoggedIn, setIsLoggedIn] = useState(authService.isLoggedIn());

  return (
    <Router>
        <div className="App">
            <Navbar logged={isLoggedIn} logout={log => setIsLoggedIn(log)}/>

            <Route exact path="/">
                <div className="userDataForm">
                    <UserDataForm healthData={health => setHealthData(health.data)} />
                </div>

                <div className="healthData">
                    <HealthData props={ healthData }></HealthData>
                </div>
            </Route>
            <Route exact path="/login" 
               render={(props) => <LoginForm {...props} logged={log => setIsLoggedIn(log)}  />}/>
            <Route exact path="/registration" component={RegistrationForm} />
            <ProtectedRoute role="ADMIN" path="/admin-profile" component={AdminProfile} />
            <ProtectedRoute role="USER" path="/user-profile" component={UserProfile} />
         </div>
    </Router>
  );
}

export default App;
