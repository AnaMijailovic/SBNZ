import React, {useState, useEffect} from 'react';
import './DiseaseDetails.css';
import diseaseService from '../../services/diseases.service';
import { Link } from "react-router-dom";
import authService from "../../services/auth.service";
import Button from '@material-ui/core/Button';


export default function DiseaseDetails(props) {

  const [disease, setDisease] = useState({name:  "", description: "", risks: [] });

  useEffect(() => {
      (async function() {
        //alert(JSON.stringify(props.match));
          diseaseService.getByName(props.match.params.id).then((response) => {
              console.log('Response: ' + JSON.stringify(response.data));
              setDisease(response.data);
          }, (error) => {
              console.log('Error: ' + error);
          });
      })();
  }, []);

    return (
      <div className="disease-details">
          <h1>{disease.name}</h1>
          <hr/>
          <div className="disease-description">
            <p>{disease.description}</p>
          </div>
          <hr/>
          <h3>Risks</h3>
          {disease.risks.map(risk =>
           <Link className="risk-link" to={"/risks/" + risk.name}> <p> {risk.name}</p>
           </Link>
          )
          }

          {authService.getRole() === 'ADMIN' && (
                                <Link className="link" to={"/edit-disease/" + disease.name}>
                                  <Button className="edit-btn" onClick="" variant="contained" color="primary">Update</Button>
                                </Link>
          )}
      </div>
    );
  }