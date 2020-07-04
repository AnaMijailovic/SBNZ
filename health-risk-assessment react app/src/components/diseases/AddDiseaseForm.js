import React, {useState, useEffect} from 'react';
import './AddDiseaseForm.css';
import diseasesService from '../../services/diseases.service';
import risksService from '../../services/risks.service';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '../common/Snackbar';
import { Checkbox } from '@material-ui/core';

export default function AddDiseaseForm(props) {
  
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [risks, setRisks] = useState([]);
    const [selectedRisks, setSelectedRisks] = useState([]);
    const [message, setMessage] = useState({open: false, message: "", type: ""});

    const [editDisease, setEditDisease] = useState();

    useEffect(() => {
      (async function() {
          if(props.match.params.id){
            diseasesService.getByName(props.match.params.id).then((responseDisease) => {
              //console.log('Response: ' + JSON.stringify(response.data));
              setEditDisease(responseDisease.data);
              setName(responseDisease.data.name);
              setDescription(responseDisease.data.description);
              setSelectedRisks(responseDisease.data.risks.map(risk => { return risk.name}));
          }, (error) => {
              console.log('Error: ' + error);
          });
          }

          risksService.getAll().then((response) => {
            //console.log('Response: ' + JSON.stringify(response.data));
            setRisks(response.data);
        }, (error) => {
            console.log('Error: ' + error);
        });

      })();
    }, []);

    const submit =  async (event) => {
      event.preventDefault();
     
      const postData = {
          "name": name,
          "description": description,
          "risks": selectedRisks
      }
  
     diseasesService.addNewDisease(postData).then((response) => {
                openSnackbar("Successfully added", "success");
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
        else if (target.name == "risk"){
            const exists = selectedRisks.filter(obj => {return obj.name === target.value});
            if (exists.length > 0){
              selectedRisks.splice(selectedRisks.indexOf(exists[0]), 1)
            }
            else{
              selectedRisks.push(risks.filter(obj => {
                return obj.name === target.value
              })[0]);}
        }
      }

      const openSnackbar = (message, type) => {
        setMessage({open: true, message: message, type: type });
      };
  
    return (
      <div className="add-disease-form-root">
      <h2>New Disease</h2>
      <form  noValidate autoComplete="off" onSubmit={submit}>
        <table align="center" className="add-table">
          <tbody>
            <tr>
              <td>
                <TextField className="full"  variant="outlined" required id="name" value={name} onChange={handleChange} label="Name" name="name"/>
              </td>
            </tr>
            <tr><td>&nbsp;</td></tr>
            <tr>
              <td>
              <TextField className="full" multiline rows={10}  variant="outlined" required id="description" value={description} onChange={handleChange} label="Description" name="description"/>
              </td>
            </tr>
              {risks.map(risk =>
                <tr>
                  <td align="left">
              <Checkbox color="primary" key={risk.name} id={risk.name} defaultChecked={selectedRisks.includes(risk.name)} label="End" onChange={handleChange} name="risk" value={risk.name}/> {risk.name}
                  </td>
                </tr>
              )

              }
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