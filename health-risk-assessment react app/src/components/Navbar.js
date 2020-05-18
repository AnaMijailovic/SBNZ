import React from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Image from "../static/hra-header4.jpg";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    img: {
      width: '100%',
      height: '150px'
    },
    appBar: {
      backgroundColor: '#060312',
      color: '#c6f7f0'
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1,
      fontFamily: 'Comic Sans MS',
      fontSize: '24px'
    },
  }));

  export default function Navbar() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
       
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Typography variant="h6" className={classes.title}>
              Health Risk Assessment
            </Typography>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
            </Typography>

            <Button color="inherit"><i className="fa fa-users fa-2x" aria-hidden="true"></i>&nbsp; &nbsp;Register</Button>
            <Button color="inherit"><i className="fa fa-sign-in fa-2x" aria-hidden="true"></i>&nbsp; &nbsp;Login</Button>
          </Toolbar>
        </AppBar>
        <img className={classes.img} src= {require('../static/hra-header4.jpg')} ></img>
      </div>
    );
  }