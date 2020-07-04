import React, {useState, useEffect} from 'react';
import './RiskDetails.css'
import risksService from '../../services/risks.service';
import { Link } from "react-router-dom";
import authService from "../../services/auth.service";
import Button from '@material-ui/core/Button';


export default function RiskDetails(props) {

  const [risk, setRisk] = useState({name:  "", description: ""});
  const [riskDiseases, setRiskDiseases] = useState([]);

  useEffect(() => {
      (async function() {
          risksService.getByName(props.match.params.id).then((response) => {
              console.log('Response: ' + JSON.stringify(response.data));
              setRisk(response.data);
          }, (error) => {
              console.log('Error: ' + error);
          });

          risksService.getRiskDiseases(props.match.params.id).then((response) => {
            console.log('Response: ' + JSON.stringify(response.data));
            setRiskDiseases(response.data);
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
          <h3>Diseases</h3>
          {riskDiseases.map(disease =>
           <Link className="disease-link" to={"/diseases/" + disease.name}> <p> {disease.name}</p>
           </Link>
          )
          }

          {authService.getRole() === 'ADMIN' && (
                                <Link className="link" to={"/edit-risk/" + risk.name}>
                                  <Button className="edit-btn" onClick="" variant="contained" color="primary">Update</Button>
                                </Link>
          )}
          
         
      </div>
    );
  }