import React, { useState, useEffect } from 'react';
import './UpdateRisk.css';
import risksService from '../../services/risks.service';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '../common/Snackbar';

export default function AddDiseaseForm(props) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState({ open: false, message: "", type: "" });

    const [editRisk, setEditRisk] = useState();

    useEffect(() => {
        (async function () {
            if (props.match.params.id) {
                risksService.getByName(props.match.params.id).then((response) => {
                    //console.log('Response: ' + JSON.stringify(response.data));
                    setEditRisk(response.data);
                    setName(response.data.name);
                    setDescription(response.data.description);
                }, (error) => {
                    console.log('Error: ' + error);
                });
            }

        })();
    }, []);

    const submit = async (event) => {
        event.preventDefault();
        const postData = {
            "id": editRisk.id,
            "name": name,
            "description": description
        }

        risksService.updateRisk(postData).then((response) => {
            openSnackbar("Successfully updated", "success");
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
        setMessage({ open: true, message: message, type: type });
    };

    return (
        <div className="update-risk-form-root">
            <h2>Update Risk</h2>
            <form noValidate autoComplete="off" onSubmit={submit}>
                <table align="center" className="add-table">
                    <tbody>
                        <tr>
                            <td>
                                <TextField className="full" variant="outlined" required id="name" value={name} onChange={handleChange} label="Name" name="name" />
                            </td>
                        </tr>
                        <tr><td>&nbsp;</td></tr>
                        <tr>
                            <td>
                                <TextField className="full" multiline rows={10} variant="outlined" required id="description" value={description} onChange={handleChange} label="Description" name="description" />
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
            <Snackbar props={message} />
        </div>
    );
}