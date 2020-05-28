import React, {useState, useEffect} from 'react';
import './DeseaseCard.css';
import { Link } from "react-router-dom";
import authService from "../../services/auth.service";


export default function DeseaseCard({ desease }) {

    return (
      <Link className="dc-link" to={"/" + authService.getRole().toLowerCase() + "-profile/deseases/" + desease.name}>
        <div className="desease-card">
          <p>{desease.name}</p>
        </div>
      </Link>
    );
  }