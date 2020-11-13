import React, {useState, useEffect} from 'react';
import './NewRuleForm.css';
import rulesService from '../../services/rules.service';
import risksService from '../../services/risks.service';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '../common/Snackbar';
import { Checkbox } from '@material-ui/core';

export default function NewRuleForm() {
  
    const [fileName, setFileName] = useState('');
    const [fileBody, setFileBody] = useState('');

    const [message, setMessage] = useState({open: false, message: "", type: ""});


    const submit =  async (event) => {
      event.preventDefault();
     
      const postData = {
          "fileName": fileName,
          "fileBody": fileBody
      }

      //alert(JSON.stringify(postData));
      
     // alert(JSON.stringify(postData));
  
     rulesService.addNewRule(postData).then((response) => {
                console.log('Added: ' + response);
                openSnackbar("New rule added", "success");
              }, (error) => {
                  console.log('Error: ' + error);
                  openSnackbar("Some error happend", "error");
              });
  
    }
    
      const handleChange = (event) => {
        const target = event.target;
  
        if (target.name === "fileName")
            setFileName(target.value);
        else if (target.name === "fileBody")
            setFileBody(target.value);    
      }
  
      const openSnackbar = (message, type) => {
       // alert("Open snack");
        setMessage({open: true, message: message, type: type });
      };
  
    return (
      <div className="new-rule-form-root">
      <h2>New Rule</h2>
      <form  noValidate autoComplete="off" onSubmit={submit}>
        <table align="center" className="new-rule-table">
          <tbody className="tbody">
            <tr colspan="2">
              <td>
                <TextField className="full" variant="outlined" required id="name" value={fileName} onChange={handleChange} label="File name" name="fileName"/>
              </td>
            </tr>
            <tr><td>&nbsp;</td></tr>
            <tr>
              <td>
              <TextField className="full" multiline rows={15}  variant="outlined" required id="fileBody" value={fileBody} onChange={handleChange} label="File body" name="fileBody"/>
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