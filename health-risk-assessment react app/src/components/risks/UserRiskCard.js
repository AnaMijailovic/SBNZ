import React from 'react';
import './RiskCard.css';
import { Link } from "react-router-dom";


export default function UserRiskCard({ risk }) {

  return (
    <Link className="rc-link" to={"/risks/" + risk.riskName}>
      <div className="risk-card">
        {risk.riskLevel && (
          <p>{risk.riskName} - {risk.riskLevel} risk</p>
        )}

        {!risk.riskLevel && (
          <p>{risk.riskName}</p>
        )}
      </div>
    </Link>
  );
}