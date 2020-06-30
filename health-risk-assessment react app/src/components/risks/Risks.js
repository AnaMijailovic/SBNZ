import React, {useState, useEffect} from 'react';
import './Risks.css'
import risksService from '../../services/risks.service';
import RiskCard from './RiskCard';


export default function Risks( { risks } ) {

    return (
      <div className="risks-root">
          <h1>Risks</h1>
          <div>
          {risks.map(risk => 
            <RiskCard key={risk.id} risk={risk}/>
          )
          }
          </div>
      </div>
    );
  }