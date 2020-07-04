import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './UserDataForm.css';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import risksService from '../../services/risks.service';
import droolsService from '../../services/drools.service';
import { Checkbox } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';
import Snackbar from '../common/Snackbar';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: '70%',
        maxWidth: '70%',
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function UserDataForm({ diseases, healthData }) {
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [averageSleepTime, setAverageSleepTime] = useState('');
    const [stressLevel, setStressLevel] = useState(0);
    const [activityLevel, setActivityLevel] = useState('');
    const [smoker, setSmoker] = useState(false);
    const [exSmoker, setExSmoker] = useState(false);
    const [cigarettesPerDay, setCigarettesPerDay] = useState('');
    const [consumesAlcohol, setConsumesAlcohol] = useState(false);
    const [drinksPerOccasion, setDrinksPerOccasion] = useState('');
    const [drinksPerWeek, setDrinksPerWeek] = useState('');
    const [gender, setGender] = useState('');
    const [familyHistoryDiseases, setFamilyHistoryDiseases] = React.useState([]);
    const [diagnosedDiseases, setDiagnosedDiseases] = React.useState([]);

    const [message, setMessage] = useState({open: false, message: "", type: ""});

    let history = useHistory();

    const classes = useStyles();
    const theme = useTheme();

    const openSnackbar = (message, type) => {
        setMessage({open: true, message: message, type: type });
      };

    const handleStressChange = (event, value) => {
        setStressLevel(value);
    }

    const handleChange = (event) => {
        const target = event.target;

        if (target.name === "age")
            setAge(target.value);
        else if (target.name === "height")
            setHeight(target.value);
        else if (target.name === "weight")
            setWeight(target.value);
        else if (target.name === "sleep")
            setAverageSleepTime(target.value);
        else if (target.name === "stress")
            setStressLevel(target.value);
        else if (target.name === "activity")
            setActivityLevel(target.value);
        else if (target.name === "smoker")
            setSmoker(!smoker);
        else if (target.name === "exSmoker")
            setExSmoker(!exSmoker);
        else if (target.name === "cigarettesPerDay")
            setCigarettesPerDay(target.value);
        else if (target.name === "alcohol")
            setConsumesAlcohol(!consumesAlcohol);
        else if (target.name === "drinksPerOccasion")
            setDrinksPerOccasion(target.value);
        else if (target.name === "drinksPerWeek")
            setDrinksPerWeek(target.value);
        else if (target.name === "gender")
            setGender(target.value);
    };

    const handleChangeFamilyHistory = (event) => {
        setFamilyHistoryDiseases(event.target.value);
    };

    const handleChangeDiagnosedDiseases = (event) => {
        setDiagnosedDiseases(event.target.value);
    };

    function handleSubmit() {
        history.push("/health-data");
    }

    function valuetext(value) {
        return `${value}`;
    }

    const submit = (event) => {
        event.preventDefault();

        const postData = {
            "age": age,
            "height": height,
            "weight": weight,
            "averageSleepTime": averageSleepTime * 60,
            "gender": gender,
            "stressLevel": stressLevel,
            "activityLevel": activityLevel,
            "smoker": {
                "isSmoker": smoker,
                "exSmoker": exSmoker,
                "cigaretsPerDay": cigarettesPerDay
            },
            "alcohol": {
                "consumesAlcohol": consumesAlcohol,
                "drinksPerOccasion": drinksPerOccasion,
                "drinksPerWeek": drinksPerWeek
            },
            "familyHistory": familyHistoryDiseases,
            "diagnosedDiseases": diagnosedDiseases
        }
        alert(JSON.stringify(postData));

        droolsService.postUserData(postData)
            .then((response) => {
                console.log('Response: ' + JSON.stringify(response));
                healthData(response);
                handleSubmit();
            }, (error) => {
                console.log('Error: ' + error);
            });
    };

    const calculateStress = (event) => {
        event.preventDefault();
       // alert(JSON.stringify(diseases[0]));
        risksService.getStressLevel()
            .then((response) => {
                console.log('Response: ' + JSON.stringify(response));
                setStressLevel(response.data);
                openSnackbar("Calculated", "success");
            }, (error) => {
                console.log('Error: ' + error);
            });
    }

    return (
        <div className="udf-div">
            <form className="udf-root" noValidate autoComplete="off" onSubmit={submit}>
                <table className="table" align="center">
                    <tbody>
                        <tr>
                            <td>
                                <FormControl component="fieldset">
                                    <RadioGroup row className="radioGroup" aria-label="gender" name="gender1" value={gender} onChange={handleChange} name="gender">
                                        <FormControlLabel value="FEMALE" control={<Radio color="primary" />} label="Female" />
                                        <FormControlLabel value="MALE" control={<Radio color="primary" />} label="Male" />
                                    </RadioGroup>
                                </FormControl>
                            </td>
                            <td className="smokerTD" >
                                <Checkbox color="primary" label="End" labelid="smoker-label" checked={smoker} onChange={handleChange} name="smoker" />
                                <InputLabel id="smoker-label">Current Smoker</InputLabel>

                            </td>
                        </tr>

                        <tr>
                            <td><TextField className="full-td" type="number" required id="height" value={height} onChange={handleChange} label="Height (cm)" name="height" /></td>
                            <td><TextField className="full-td55" type="number" value={cigarettesPerDay} onChange={handleChange} label="Cigarettes per day" name="cigarettesPerDay" /></td>
                        </tr>
                        <tr>
                            <td><TextField className="full-td" type="number" required id="weight" value={weight} onChange={handleChange} label="Weight (kg)" name="weight" /></td>
                            <td className="smokerTD" >
                                <Checkbox color="primary" label="End" labelid="alcohol-label" checked={consumesAlcohol} onChange={handleChange} name="alcohol" />
                                <InputLabel id="alcohol-label">Consumes alcohol</InputLabel>
                            </td>
                        </tr>
                        <tr>
                            <td><TextField className="full-td" type="number" required id="age" value={age} onChange={handleChange} label="Age" name="age" /> </td>
                            <td><TextField className="full-td55" type="number" value={drinksPerOccasion} onChange={handleChange} label="Drinks per occasion" name="drinksPerOccasion" /></td>
                        </tr>

                        <tr>
                            <td><TextField className="full-td" type="number" required id="average-sleep-time" value={averageSleepTime} onChange={handleChange} label="Average sleep (h)" name="sleep" /></td>
                            <td><TextField className="full-td55" type="number" value={drinksPerWeek} onChange={handleChange} label="Drinks per week" name="drinksPerWeek" /></td>
                        </tr>
                        <tr>
                            <td>
                                <FormControl className="full-td">
                                    <InputLabel >Activity level</InputLabel>
                                    <Select 
                                        labelid="activity-level-select"
                                        id="activity-level"
                                        value={activityLevel}
                                        onChange={handleChange}
                                        name="activity"
                                    >
                                        <MenuItem value="SEDENTARY">Sedentary</MenuItem>
                                        <MenuItem value="LIGHTHLY_ACTIVE">Lightly active</MenuItem>
                                        <MenuItem value="MODERATELY_ACTIVE">Moderately active</MenuItem>
                                        <MenuItem value="VERY_ACTIVE">Very active</MenuItem>
                                        <MenuItem value="SUPER_ACTIVE">Super active</MenuItem>
                                    </Select>
                                </FormControl>
                            </td>

                            <td>
                                <Typography id="stress-slider" gutterBottom>
                                    Stress level
                        </Typography>
                                <Slider className="stress"
                                    defaultValue={0}
                                    getAriaValueText={valuetext}
                                    aria-labelledby="stress-slider"
                                    step={1}
                                    marks
                                    min={0}
                                    max={10}
                                    valueLabelDisplay="auto"
                                    value={stressLevel}
                                    onChange={handleStressChange}
                                    onChangeCommitted={handleStressChange}
                                    name="stress"
                                    valueLabelDisplay="on"
                                />
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <FormControl className="full-td" className={classes.formControl}>
                                    <InputLabel id="diagnosed-diseases-multiple-select">Diagnosed diseases</InputLabel>
                                    <Select
                                        labelId="diagnosed-diseases-multiple-select-label"
                                        multiple
                                        value={diagnosedDiseases}
                                        onChange={handleChangeDiagnosedDiseases}
                                        input={<Input id="select-multiple" />}
                                        renderValue={(selected) => (
                                            <div className={classes.chips}>
                                                {selected.map((value) => (
                                                    <Chip key={value} label={value} className={classes.chip} />
                                                ))}
                                            </div>
                                        )}
                                        MenuProps={MenuProps}
                                    >
                                        {diseases.map((disease) => (
                                            <MenuItem key={disease.id} value={disease.name} style={getStyles(disease, diseases, theme)}>
                                                {disease.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                            </td>
                            <td>
                                &nbsp;
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <FormControl className="full-td"  className={classes.formControl}>
                                    <InputLabel id="demo-mutiple-chip-label">Family history diseases</InputLabel>
                                    <Select
                                        labelId="demo-mutiple-chip-label"
                                        id="demo-mutiple-chip"
                                        multiple
                                        value={familyHistoryDiseases}
                                        onChange={handleChangeFamilyHistory}
                                        input={<Input id="select-multiple-chip" />}
                                        renderValue={(selected) => (
                                            <div className={classes.chips}>
                                                {selected.map((value) => (
                                                    <Chip key={value} label={value} className={classes.chip} />
                                                ))}
                                            </div>
                                        )}
                                        MenuProps={MenuProps}
                                    >
                                        {diseases.map((disease) => (
                                            <MenuItem key={disease.id} value={disease.name} style={getStyles(disease, diseases, theme)}>
                                                {disease.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </td>
                            <td>
                                <Button align="right" onClick={calculateStress} variant="outlined" color="primary" className="button">
                                    Calculate stress
                        </Button>

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