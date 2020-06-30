import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
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
import deseasesService from './services/deseases.service';
import risksService from './services/risks.service';
import Deseases from './components/deseases/Deseases';
import Risks from './components/risks/Risks';
import DeseaseDetails from './components/deseases/DeseaseDetails';
import RiskDetails from './components/risks/RiskDetails';
import ResultsPage from './components/results-page/ResultsPage';

function App() {

  const [healthData, setHealthData] = useState({bmiValue: "",
                                                bmiCategory: "", bmrValue: "", tdeeValue: "", 
                                                kgTillNormal: "",
                                                averageSleepLowerLimit: "",
                                                averageSleepHigherLimit: "",
                                                deseases: []});

  const [isLoggedIn, setIsLoggedIn] = useState(authService.isLoggedIn());

  const [diseases, setDiseases] = useState([]);
  const [risks, setRisks] = useState([]);

  useEffect(() => {
    (async function() {
       getDeseases();
       getRisks();
    })();
}, []);

const getDeseases = () => {
    deseasesService.getAll().then((response) => {
        console.log('Response: ' + JSON.stringify(response.data));
        setDiseases(response.data);
    }, (error) => {
        console.log('Error: ' + error);
    });
}

const getRisks = () => {
    risksService.getAll().then((response) => {
        console.log('Response: ' + JSON.stringify(response.data));
        setRisks(response.data);
    }, (error) => {
        console.log('Error: ' + error);
    });
}

  return (
    <Router>
        <div className="App">
            <Navbar logged={isLoggedIn} logout={log => setIsLoggedIn(log)}/>

            <Route exact path="/">
                <div className="userDataForm">
                    <UserDataForm healthData={health => setHealthData(health.data)} diseases = { diseases } />
                </div>
            </Route>

            <Route exact path="/health-data">
                <div className="healthData">
                    <ResultsPage props={ healthData }></ResultsPage>
                </div>
            </Route>

            <Route exact path="/risks"
                render={(props) => <div className="risks"><Risks {...props } risks={ risks }  /> </div>} />
            <Route exact path="/diseases"
                render={(props) => <div className="diseases"> <Deseases {...props } diseases={ diseases }  /> </div>} />
            <Route exact path="/diseases/:id" component={DeseaseDetails} />
            <Route exact path="/risks/:id" component={RiskDetails} />
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
