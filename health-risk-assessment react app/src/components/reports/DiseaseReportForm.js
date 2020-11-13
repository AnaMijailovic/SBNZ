import React, { useState, useEffect } from 'react';
import './DiseaseReportForm.css'
import Button from '@material-ui/core/Button';
import Snackbar from '../common/Snackbar';
import reportsService from '../../services/reports.service';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import diseasesService from '../../services/diseases.service';


export default function DiseaseReportForm(props) {
    const [diseaseName, setDiseaseName] = useState('');
    const [riskLevel, setRiskLevel] = useState('');
    const [message, setMessage] = useState({ open: false, message: "", type: "" });

    const [diseases, setDiseases] = useState([]);

    useEffect(() => {
        (async function () {
            getDiseases();
        })();
    }, []);

    const getDiseases = () => {
        diseasesService.getAll().then((response) => {
            console.log('Response: ' + JSON.stringify(response.data));
            setDiseases(response.data);
        }, (error) => {
            console.log('Error: ' + error);
        });
    }

    const submit = async (event) => {
        event.preventDefault();

        const postData = {
            "diseaseName": diseaseName,
            "riskLevel": riskLevel
        }

        // alert(JSON.stringify(postData));

        reportsService.getDiseaseReport(postData).then((response) => {
            console.log(JSON.stringify(response.data));
            openSnackbar("Report created", "success");
        }, (error) => {
            console.log('Error: ' + error);
            openSnackbar("Username or password is incorrect", "error");
        });

    }
    const handleChange = (event) => {
        const target = event.target;

        if (target.name === "diseaseName")
            setDiseaseName(target.value);
        else if (target.name === "riskLevel")
            setRiskLevel(target.value);
    }

    const openSnackbar = (message, type) => {
        // alert("Open snack");
        setMessage({ open: true, message: message, type: type });
    };

    return (
        <div className="disease-report-form-root">
            <h2>Disease report</h2>
            <form noValidate autoComplete="off" onSubmit={submit}>
                <table align="center" className="report-table">
                    <tbody>
                        <tr>
                            <td>
                                <FormControl className="full-td">
                                    <InputLabel >Disease</InputLabel>
                                    <Select
                                        labelid="disease-name"
                                        id="disease-name"
                                        value={diseaseName}
                                        onChange={handleChange}
                                        name="diseaseName"
                                    >
                                        {diseases.map(disease =>
                                            <MenuItem value={disease.name}>{disease.name}</MenuItem>
                                        )
                                        }
                                    </Select>
                                </FormControl>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <FormControl className="full-td">
                                    <InputLabel >Risk level</InputLabel>
                                    <Select
                                        labelid="risk-level-select"
                                        id="risk-level"
                                        value={riskLevel}
                                        onChange={handleChange}
                                        name="riskLevel"

                                    >
                                        <MenuItem value="LOW">Low</MenuItem>
                                        <MenuItem value="MEDIUM">Medium</MenuItem>
                                        <MenuItem value="HIGH">High</MenuItem>
                                    </Select>
                                </FormControl>
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