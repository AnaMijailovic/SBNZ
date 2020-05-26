import React, {useState, useEffect} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={4} variant="filled" {...props} />;
  }

export default function LoginForm({ props }) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
     //   alert('Use effect ' + props.open);
        if (props.open !== open) {
          setOpen(props.open);
        }
      }, [props.open]);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          setOpen(false);
          return;
        }  
        setOpen(false);
      };

    return (
        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={props.type}>
          {props.message}
        </Alert>
        </Snackbar>
    );

  }