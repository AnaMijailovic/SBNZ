import React, {useState, useEffect} from 'react';
import './RiskDetails.css'
import risksService from '../../services/risks.service';


export default function RiskDetails(props) {

  const [risk, setRisk] = useState({name:  "", description: ""});

  useEffect(() => {
      (async function() {
          risksService.getByName(props.match.params.id).then((response) => {
              console.log('Response: ' + JSON.stringify(response.data));
              setRisk(response.data);
          }, (error) => {
              console.log('Error: ' + error);
          });
      })();
  }, []);

    return (
      <div className="risk-details">
          <h1>{risk.name}</h1>
          <hr/>
          <div className="risk-description">
            <p>{risk.description}</p>
          </div>
          <hr/>
          <h3>Deseases</h3>
         
      </div>
    );
  }