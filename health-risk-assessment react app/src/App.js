import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import HealthData from './components/health-data/HealthData';
import UserDataForm from './components/user-data-form/UserDataForm';


function App() {

  const [healthData, setHealthData] = useState({bmiValue: "",
                                                bmiCategory: "", bmrValue: "", tdeeValue: "", 
                                                kgTillNormal: "",
                                                averageSleepLowerLimit: "",
                                                averageSleepHigherLimit: "",
                                                deseases: []});


  return (
    <div className="App">
      <Navbar />

      <div className="userDataForm">
        <UserDataForm healthData={health => setHealthData(health.data)} />
      </div>

      <div className="healthData">
        <HealthData props={ healthData }></HealthData>
      </div>
      
    </div>
  );
}

export default App;
