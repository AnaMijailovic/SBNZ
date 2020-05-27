import React, {useState} from 'react';
import './RegistrationForm.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '../common/Snackbar';
import AuthService from "../../services/auth.service";

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState('');
    const [message, setMessage] = useState({open: false, message: "", type: ""});

    const submit = (event) => {
      event.preventDefault();
  
      const postData = {
          "username": username,
          "firstName": firstName,
          "lastName": lastName,
          "email": email,
          "password": password,
          "repeatedPassword": repeatedPassword
      }
      
      // alert(JSON.stringify(postData));

      AuthService.register(postData)
            .then((response) => {
                console.log('Response: ' + JSON.stringify(response));
                openSnackbar("Registered successfully!", "success");
            }, (error) => {
                console.log('Error: ' + error);
                openSnackbar("Something went wrong :(", "error");
            });
  
    }
      const handleChange = (event) => {
        const target = event.target;
  
        if (target.name === "username")
            setUsername(target.value);
        else if (target.name === "firstName")
            setFirstName(target.value);
        else if (target.name === "lastName")
            setLastName(target.value);
        else if (target.name === "email")
            setEmail(target.value);
        else if (target.name === "password")
            setPassword(target.value); 
        else if (target.name === "repeatedPassword")
            setRepeatedPassword(target.value);   
      }
    
      const openSnackbar = (message, type) => {
        // alert("Open snack");
         setMessage({open: true, message: message, type: type });
       };

    return (
      <div className="registration-form-root">
      <h2>Registration</h2>
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
                <TextField required id="firstName" value={firstName} onChange={handleChange} label="First name" name="firstName"/>
              </td>
            </tr>
            <tr>
              <td>
                <TextField required id="lastName" value={lastName} onChange={handleChange} label="Last name" name="lastName"/>
              </td>
            </tr>
            <tr>
              <td>
                <TextField required id="email" value={email} onChange={handleChange} label="Email" name="email"/>
              </td>
            </tr>
            <tr>
              <td>
                <TextField required type="password" id="password" value={password} onChange={handleChange} label="Password" name="password"/>
              </td>
            </tr>
            <tr>
              <td>
                <TextField required type="password" id="repeatedPassword" value={repeatedPassword} onChange={handleChange} label="Repeated password" name="repeatedPassword"/>
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