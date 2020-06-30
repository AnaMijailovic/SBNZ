import React from 'react';
import './RiskCard.css';
import { Link } from "react-router-dom";


export default function RiskCard({ risk }) {

    return (
      <Link className="rc-link" to={"/risks/" + risk.name}>
        <div className="risk-card">
          <p>{risk.name}</p>
        </div>
      </Link>
    );
  }