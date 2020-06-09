import React, {useState, useEffect} from 'react';
import './Deseases.css'
import deseasesService from '../../services/deseases.service';
import DeseaseCard from './DeseaseCard';
import { Link } from "react-router-dom";
import authService  from "../../services/auth.service";
import Button from '@material-ui/core/Button';

export default function Deseases() {
    
    const [deseases, setDeseases] = useState([]);


    const removeDisease = (name) => {
        const exists = deseases.filter(obj => {return obj.name === name});
        if (exists.length > 0){
            getDeseases();
        }
    }

    useEffect(() => {
        (async function() {
           getDeseases();
        })();
    }, []);

    const getDeseases = () => {
        deseasesService.getAll().then((response) => {
            console.log('Response: ' + JSON.stringify(response.data));
            setDeseases(response.data);
        }, (error) => {
            console.log('Error: ' + error);
        });
    }

    return (
      <div className="deseases-root">
          <h1>Diseases</h1>
          <Link className="link"  to={"/" + authService.getRole().toLowerCase() + "-profile/new-desease"}><Button variant="contained" color="primary">New Disease</Button> </Link>
          <br/>
          <br/>  
          <div>
          {deseases.map(desease => 
            ( <DeseaseCard class="card" key={desease.id} disease={desease} deleteDisease ={del => removeDisease(del)}/> 
               
                )
          )
          }
          </div>

      </div>
    );
  }