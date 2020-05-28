import React from 'react';
import './RiskCard.css';
import { Link } from "react-router-dom";
import authService from "../../services/auth.service";


export default function RiskCard({ risk }) {

    return (
      <Link className="rc-link" to={"/" + authService.getRole().toLowerCase() + "-profile/risks/" + risk.name}>
        <div className="risk-card">
          <p>{risk.name}</p>
        </div>
      </Link>
    );
  }