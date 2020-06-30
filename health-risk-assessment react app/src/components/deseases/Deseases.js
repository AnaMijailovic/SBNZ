import React, { useState, useEffect } from 'react';
import './Deseases.css'
import deseasesService from '../../services/deseases.service';
import DeseaseCard from './DeseaseCard';
import { Link } from "react-router-dom";
import authService from "../../services/auth.service";
import Button from '@material-ui/core/Button';

export default function Deseases( { diseases } ) {

    const isAdmin = authService.getRole() == "ADMIN";

    const removeDisease = (name) => {
        const exists = diseases.filter(obj => { return obj.name === name });
        if (exists.length > 0) {
           // getDeseases();
        }
    }

    return (
        <div className="deseases-root">
            <h1>Diseases</h1>
            {isAdmin && (
                <div>
                    <Link className="link" to={"/" + authService.getRole().toLowerCase() + "-profile/new-desease"}><Button variant="contained" color="primary">New Disease</Button> </Link>
                    <br />
                    <br/>
                </div>
            )}
            <div>
                {diseases.map(disease =>
                    (<DeseaseCard class="card" key={disease.id} disease={disease} deleteDisease={del => removeDisease(del)} />

                    )
                )
                }
            </div>

        </div>
    );
}