import React, {useState, useEffect} from 'react';
import './Risks.css'
import risksService from '../../services/risks.service';
import RiskCard from './RiskCard';


export default function Risks() {

  const [risks, setRisks] = useState([]);

  useEffect(() => {
      (async function() {
          risksService.getAll().then((response) => {
              console.log('Response: ' + JSON.stringify(response.data));
              setRisks(response.data);
          }, (error) => {
              console.log('Error: ' + error);
          });
      })();
  }, []);

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