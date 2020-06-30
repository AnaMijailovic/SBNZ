import React, {useState, useEffect} from 'react';
import './DeseaseCard.css';
import { Link } from "react-router-dom";


export default function UserDiseaseCard({ disease }) {

    return (
      <div className="disease-card-root">
      <Link className="dc-link" to={"/diseases/" + disease.deseaseName}>
        <div className="desease-card">
          <p>{disease.deseaseName} - {disease.riskLevel} risk</p>
        </div>
      </Link>
      
      </div>
    );
  }