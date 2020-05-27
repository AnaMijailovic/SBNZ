import React from 'react';
import authService from '../../services/auth.service';
import Button from '@material-ui/core/Button';

export default function Logout({ logged }) {
    
    const logoutFunc = () => {
        logged(false);
        authService.logout();
    }

    return (
        <Button color="inherit" onClick={logoutFunc}>
            <i className="fa fa-sign-out fa-2x" aria-hidden="true"></i>&nbsp; &nbsp; Logout
        </Button> 
    );
  }