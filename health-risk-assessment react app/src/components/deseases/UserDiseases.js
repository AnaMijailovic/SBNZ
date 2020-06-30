import React, { useState, useEffect } from 'react';
import './Deseases.css'
import UserDiseaseCard from './UserDiseaseCard';


export default function UserDiseases( { diseases } ) {

    return (
        <div className="deseases-root">
            <h1>Diseases</h1>
            <div>
                {diseases.map(disease =>
                    (<UserDiseaseCard class="card" key={disease.diseaseName} disease={disease} />

                    )
                )
                }
            </div>

        </div>
    );
}