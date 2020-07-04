import React, { useState } from 'react';
import './ResultsPage.css';
import HealthData from '../health-data/HealthData';
import UserDiseases from '../diseases/UserDiseases';
import UserRisks from '../risks/UserRisks';

function ResultsPage({ props }) {

    return (
        <div className="root-div">
            <div className="health-data">
                <HealthData props={props}></HealthData>
            </div>

            <div className="risks-div">
                <UserRisks risks={props.risks || []}></UserRisks>
            </div>
            
            <div className="diseases-div">
                    <UserDiseases diseases={props.diseases || []}></UserDiseases>
            </div>

        </div>
    );
}

export default ResultsPage;
