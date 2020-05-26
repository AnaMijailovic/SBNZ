import React from 'react';
import './Navbar.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom";


export default function Navbar() {
  
    return (
      <div className="navbar-root">
        <AppBar position="static" className="appBar">
          <Toolbar>
            <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">
            <Typography variant="h6" className="title">
            <Link className="link" to="/">Health Risk Assessment</Link>
            </Typography>
            </IconButton>
            <Typography variant="h6" className="title">
            </Typography>

            <Link className="link"  to="/"><Button color="inherit"><i className="fa fa-home fa-2x" aria-hidden="true"></i>&nbsp; &nbsp;Home</Button> </Link>
            <Link className="link"  to="/registration"><Button color="inherit"><i className="fa fa-users fa-2x" aria-hidden="true"></i>&nbsp; &nbsp; Registration</Button> </Link>
            <Link className="link"  to="/login"><Button color="inherit"><i className="fa fa-sign-in fa-2x" aria-hidden="true"></i>&nbsp; &nbsp;Login</Button> </Link>
          </Toolbar>
          <img className="img" alt="" src= {require('../../static/hra-header4.jpg')} ></img>
        </AppBar>

      </div>
    );
  }