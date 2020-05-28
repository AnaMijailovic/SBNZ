import React, {useState} from 'react';
import './AddDeseaseForm.css';
import deseasesService from '../../services/deseases.service';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '../common/Snackbar';

export default function AddDeseaseForm() {
  
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState({open: false, message: "", type: ""});

    const submit =  async (event) => {
      event.preventDefault();
     
      const postData = {
          "name": name,
          "description": description
      }
      alert(JSON.stringify(postData));
      
     // alert(JSON.stringify(postData));
  
     deseasesService.addNewDesease(postData).then((response) => {
                console.log('Added: ' + response);
                   
              }, (error) => {
                  console.log('Error: ' + error);
                  openSnackbar("Some error happend", "error");
              });
  
    }
      const handleChange = (event) => {
        const target = event.target;
  
        if (target.name === "name")
            setName(target.value);
        else if (target.name === "description")
            setDescription(target.value);    
      }
  
      const openSnackbar = (message, type) => {
       // alert("Open snack");
        setMessage({open: true, message: message, type: type });
      };
  
    return (
      <div className="add-desease-form-root">
      <h2>New Desease</h2>
      <form  noValidate autoComplete="off" onSubmit={submit}>
        <table align="center">
          <tbody>
            <tr>
              <td>
                <TextField  variant="outlined" required id="name" value={name} onChange={handleChange} label="Name" name="name"/>
              </td>
            </tr>
            <tr><td>&nbsp;</td></tr>
            <tr>
              <td>
              <TextField multiline rows={7}  variant="outlined" required id="description" value={description} onChange={handleChange} label="Description" name="description"/>
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