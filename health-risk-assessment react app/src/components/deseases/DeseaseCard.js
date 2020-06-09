import React, {useState, useEffect} from 'react';
import './DeseaseCard.css';
import { Link } from "react-router-dom";
import authService from "../../services/auth.service";
import diseasesService from "../../services/deseases.service";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


export default function DeseaseCard({ disease, deleteDisease }) {

  const deleteDis = (event) => {
      diseasesService.deleteDisease(disease.name).then((response) => {
        console.log('Deleted: ' + response);
        deleteDisease(disease.name);
           
      }, (error) => {
          console.log('Error: ' + error);
      });

  }

    return (
      <div class="disease-card-root">
      <Link className="dc-link" to={"/" + authService.getRole().toLowerCase() + "-profile/deseases/" + disease.name}>
        <div className="desease-card">
          <p>{disease.name}</p>
        </div>
      </Link>

      <IconButton aria-label="delete"  onClick={deleteDis}>
                 <DeleteIcon fontSize="large" />
      </IconButton> 
      </div>
    );
  }