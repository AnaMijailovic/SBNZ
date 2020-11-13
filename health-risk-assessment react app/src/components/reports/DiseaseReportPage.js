import React, { useState } from 'react';
import './DiseaseReportPage.css';
import DiseaseReportForm from './DiseaseReportForm';

function DiseaseReportPage({ props }) {

    return (
        <div className="root-div">
                <DiseaseReportForm></DiseaseReportForm>

        </div>
    );
}

export default DiseaseReportPage;