import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import UserDataForm from './components/UserDataForm';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'gray',
    display: 'flex',
    marginTop: '-30.3%'
    /* border: 'solid black'*/
  },
  table: {
    border: 'solid gray',
    borderRadius: '5%',
    width: '40%',
    marginRight: '7%',
    backgroundColor: '#c6f7f0',
    boxShadow: "5px 10px"
  }
}));

function App() {

  const [healthData, setHealthData] = useState();

  const classes = useStyles();
  const [bmiValue, setBmiValue] = React.useState(" ");
  const [bmiCategory, setBmiCategory] = React.useState(" ");
  const [bmrValue, setBmrValue] = React.useState(" ");
  const [tdeeValue, setTdeeValue] = React.useState(" ");
  const [kgTillNormal, setKgTillNormal] = React.useState(" ");
  const [recommendedSleepFrom, setRecommendedSleepFrom] = React.useState(" ");
  const [recommendedSleepTo, setRecommendedSleepTo] = React.useState(" ");

  const set = (event) => {
    setHealthData(event.data);
    //alert(JSON.stringify(event.data));
    setBmiValue(event.data.bmiValue);
    setBmiCategory(event.data.bmiCategory);
    setBmrValue(event.data.bmrValue);
    setTdeeValue(event.data.tdeeValue);
    setRecommendedSleepFrom(event.data.averageSleepLowerLimit);
    setRecommendedSleepTo(event.data.averageSleepHigherLimit);
    setKgTillNormal(event.data.kgTillNormal);
    let s = ""
    for (let i = 0; i < event.data.deseases.length; i++ ) {
      s +=  '<p>' + event.data.deseases[i].deseaseName + ' -  '
       + event.data.deseases[i].riskLevel.toLowerCase() +' risk </p>';
    }
    document.getElementById("change").innerHTML = s;
  };

  return (
    <div className="App">
      <Navbar />
      <UserDataForm healthData={health => set(health)} />

      <form className={classes.root} noValidate autoComplete="off">
        <table className={classes.table} align="center">
          <tr>
            <td><TextField disabled value={bmiValue} label="BMI value" /> </td>

          </tr>
          <tr>
            <td><TextField disabled value={bmiCategory} label="BMI category" /> </td>
            <td align="left">
              <b>Deseases:</b>
                   <p id="change"></p>
            </td>
          </tr>
          <tr>
            <td><TextField disabled value={bmrValue} label="BMR value" /></td>
          </tr>
          <tr>
            <td><TextField disabled value={tdeeValue} label="TDEE value" /></td>

          </tr>
          <tr>
            <td><TextField disabled value={kgTillNormal} label="Kg till normal" /></td>
          </tr>
          <tr>
            <td><TextField disabled value={recommendedSleepFrom} label="Sleep from (min)" /></td>
          </tr>

          <tr>
            <td><TextField disabled value={recommendedSleepTo} label="Sleep to (min)" /></td>
          </tr>
          <tr>
            <td>&nbsp;</td>
          </tr>
       
        </table>
      </form>

    </div>
  );
}

export default App;
