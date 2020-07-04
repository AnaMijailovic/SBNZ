import React from 'react';
import './Diseases.css';
import DiseaseCard from './DiseaseCard';
import { Link } from "react-router-dom";
import authService from "../../services/auth.service";
import Button from '@material-ui/core/Button';

export default function Diseases( { diseases } ) {

    const isAdmin = authService.getRole() == "ADMIN";

    const removeDisease = (name) => {
        const exists = diseases.filter(obj => { return obj.name === name });
        if (exists.length > 0) {
           // getDiseases();
        }
    }

    return (
        <div className="diseases-root">
            <h1>Diseases</h1>
            {isAdmin && (
                <div>
                    <Link className="link" to={"/" + authService.getRole().toLowerCase() + "-profile/new-disease"}><Button variant="contained" color="primary">New Disease</Button> </Link>
                    <br />
                    <br/>
                </div>
            )}
            <div>
                {diseases.map(disease =>
                    (<DiseaseCard class="card" key={disease.id} disease={disease} deleteDisease={del => removeDisease(del)} />

                    )
                )
                }
            </div>

        </div>
    );
}