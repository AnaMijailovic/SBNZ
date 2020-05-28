import React, {useState, useEffect} from 'react';
import './DeseaseDetails.css'
import deseaseService from '../../services/deseases.service';
import authService from '../../services/auth.service';
import { Link } from "react-router-dom";


export default function DeseaseDetails(props) {

  const [desease, setDesease] = useState({name:  "", description: "", risks: [] });

  useEffect(() => {
      (async function() {
        //alert(JSON.stringify(props.match));
          deseaseService.getByName(props.match.params.id).then((response) => {
              console.log('Response: ' + JSON.stringify(response.data));
              setDesease(response.data);
          }, (error) => {
              console.log('Error: ' + error);
          });
      })();
  }, []);

    return (
      <div className="desease-details">
          <h1>{desease.name}</h1>
          <hr/>
          <div className="desease-description">
            <p>{desease.description}</p>
          </div>
          <hr/>
          <h3>Risks</h3>
          {desease.risks.map(risk =>
           <Link className="risk-link" to={"/" + authService.getRole().toLowerCase() + "-profile/risks/" + risk.name}> <p> {risk.name}</p>
           </Link>
          )
          }
      </div>
    );
  }