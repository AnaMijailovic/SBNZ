import React, { useState } from 'react';
import './HealthData.css';
import TextField from '@material-ui/core/TextField';

function HealthData({props}) {

  return (
    <div >
     
      <form className="hd-root" noValidate autoComplete="off">
        <table className="table" align="center">
          <tbody>
          <tr>
            <td><TextField disabled value={props.bmiValue} label="BMI value" /> </td>

          </tr>
          <tr>
            <td><TextField disabled value={props.bmiCategory} label="BMI category" /> </td>
            <td align="left">
              <b>Deseases:</b>
              {props.deseases.map(desease =>
                  <p> {desease.deseaseName} - {desease.riskLevel} risk
                  </p>
                  )}
            </td>
          </tr>
          <tr>
            <td><TextField disabled value={props.bmrValue} label="BMR value (kcal/day)" /></td>
          </tr>
          <tr>
            <td><TextField disabled value={props.tdeeValue} label="TDEE value (kcal/day)" /></td>

          </tr>
          <tr>
            <td><TextField disabled value={props.kgTillNormal} label="Kg till normal" /></td>
          </tr>
          <tr>
            <td><TextField disabled value={props.averageSleepLowerLimit} label="Sleep from (h)" /></td>
          </tr>

          <tr>
            <td><TextField disabled value={props.averageSleepHigherLimit} label="Sleep to (h)" /></td>
          </tr>
          <tr>
            <td>&nbsp;</td>
          </tr>
        </tbody>
        </table>
      </form>

    </div>
  );
}

export default HealthData;
