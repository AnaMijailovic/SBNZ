import React, {useState, useEffect} from 'react';
import './DiseaseCard.css';
import { Link } from "react-router-dom";


export default function UserDiseaseCard({ disease }) {

    return (
      <div className="disease-card-root">
      <Link className="dc-link" to={"/diseases/" + disease.diseaseName}>
        <div className="disease-card">
          <p>{disease.diseaseName} - {disease.riskLevel} risk</p>
        </div>
      </Link>
      
      </div>
    );
  }