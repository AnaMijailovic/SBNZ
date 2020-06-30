import React from 'react';
import './Risks.css'
import UserRiskCard from './UserRiskCard';


export default function UserRisks( { risks } ) {

    return (
      <div className="risks-root">
          <h1>Risks</h1>
          <div>
          {risks.map(risk => 
            <UserRiskCard key={risk.id} risk={risk} />
          )
          }
          </div>
      </div>
    );
  }