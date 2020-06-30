import React, {useState, useEffect} from 'react';
import './DeseaseCard.css';
import { Link } from "react-router-dom";
import authService from "../../services/auth.service";
import diseasesService from "../../services/deseases.service";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


export default function DeseaseCard({ disease, deleteDisease }) {

  const isAdmin = authService.getRole() == "ADMIN";
  const deleteDis = (event) => {
      diseasesService.deleteDisease(disease.name).then((response) => {
        console.log('Deleted: ' + response);
        deleteDisease(disease.name);
           
      }, (error) => {
          console.log('Error: ' + error);
      });

  }

    return (
      <div className="disease-card-root">
      <Link className="dc-link" to={"/diseases/" + disease.name}>
        <div className="desease-card">
          <p>{disease.name}</p>
        </div>
      </Link>
      
      { isAdmin && (
      <IconButton aria-label="delete"  onClick={deleteDis}>
                 <DeleteIcon fontSize="large" />
      </IconButton> 
      )}
      </div>
    );
  }