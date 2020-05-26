import React, {useState} from 'react';
import axios from "axios";
import './LoginForm.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '../Snackbar';


export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState({open: false, message: "", type: ""});

  const submit = (event) => {
    event.preventDefault();

    const postData = {
        "username": username,
        "password": password
    }
    
   // alert(JSON.stringify(postData));

    axios.post('http://localhost:8081/auth/login', postData)
            .then((response) => {
                console.log('Response: ' + JSON.stringify(response));
                openSnackbar("Logged in successfully!", "success");
            }, (error) => {
                console.log('Error: ' + error);
                openSnackbar("Username or password is incorrect", "error");
            });

  }
    const handleChange = (event) => {
      const target = event.target;

      if (target.name === "username")
          setUsername(target.value);
      else if (target.name === "password")
          setPassword(target.value);    
    }

    const openSnackbar = (message, type) => {
     // alert("Open snack");
      setMessage({open: true, message: message, type: type });
    };

  return (
    <div className="login-form-root">
    <h2>Login</h2>
    <form  noValidate autoComplete="off" onSubmit={submit}>
      <table align="center">
        <tbody>
          <tr>
            <td>
              <TextField required id="username" value={username} onChange={handleChange} label="Username" name="username"/>
            </td>
          </tr>
          <tr>
            <td>
              <TextField required type="password" id="password" value={password} onChange={handleChange} label="Password" name="password"/>
            </td>
          </tr>
          <tr><td>&nbsp;</td></tr>
          <tr>
            <td>
              <Button align="right" type="submit" variant="outlined" color="primary" className="button">
                            Submit
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
    <Snackbar props={ message } />
    </div>
  );
}