import React, {useState, useEffect} from 'react';
import './Deseases.css'
import deseasesService from '../../services/deseases.service';
import DeseaseCard from './DeseaseCard';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import authService  from "../../services/auth.service";

export default function Deseases() {
    
    const [deseases, setDeseases] = useState([]);

    useEffect(() => {
        (async function() {
            deseasesService.getAll().then((response) => {
                console.log('Response: ' + JSON.stringify(response.data));
                setDeseases(response.data);
            }, (error) => {
                console.log('Error: ' + error);
            });
        })();
    }, []);

    return (
      <div className="deseases-root">
          <h1>Deseases</h1>
          <Link className="link"  to={"/" + authService.getRole().toLowerCase() + "-profile/new-desease"}><Button variant="contained" color="primary">New Desease</Button> </Link>
          <br/>
          <br/>
          <div>
          {deseases.map(desease => 
            <DeseaseCard key={desease.id} desease={desease}/>
          )
          }
          </div>

      </div>
    );
  }