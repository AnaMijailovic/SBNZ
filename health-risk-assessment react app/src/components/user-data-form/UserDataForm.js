import React, {useState} from 'react';
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
import axios from "axios";
import { Checkbox } from '@material-ui/core';


export default function UserDataForm({ healthData }) {
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

    // var deseases = {}

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
            "smoker": {"isSmoker": smoker, 
                       "exSmoker": exSmoker,
                       "cigaretsPerDay": cigarettesPerDay},
            "alcohol": {"consumesAlcohol": consumesAlcohol,
                        "drinksPerOccasion": drinksPerOccasion,
                        "drinksPerWeek": drinksPerWeek}
        }
        // alert(JSON.stringify(postData));

        axios.post('http://localhost:8081/hra', postData)
            .then((response) => {
                console.log('Response: ' + JSON.stringify(response));
                healthData(response);
            }, (error) => {
                console.log('Error: ' + error);
            });
    };

  /*  useEffect(() =>
          axios.get('http://localhost:8081/hra/deseases')
              .then((response) => {
                  console.log(response.data);
                  deseases = response.data;
              })
    ); */

    return (
        <form className="udf-root" noValidate autoComplete="off" onSubmit={submit}>
            <table className="table" align="center">
                <tbody>
                <tr>
                    <td><TextField type="number" required id="age" value={age} onChange={handleChange} label="Age" name="age"/> </td>
                    <td  className="smokerTD" >
                     <Checkbox color="primary" label="End" labelid="smoker-label" checked={smoker} onChange={handleChange} name="smoker"/>
                     <InputLabel id="smoker-label">Current Smoker</InputLabel>
                     
                    </td>
                </tr>
                <tr>
                    <td><TextField type="number" required id="height" value={height} onChange={handleChange} label="Height (cm)" name="height" /> </td>
                    <td  className="smokerTD" >
                     <Checkbox  color="primary" label="End" labelid="ex-smoker-label" checked={exSmoker} onChange={handleChange} name="exSmoker" />
                     <InputLabel id="ex-smoker-label">Ex Smoker</InputLabel>
                    </td>
                </tr>
                <tr>
                    <td><TextField type="number" required id="weight" value={weight} onChange={handleChange} label="Weight (kg)" name="weight"/></td>
                    <td><TextField type="number"  value={cigarettesPerDay} onChange={handleChange} label="Cigarettes per day"  name="cigarettesPerDay"/></td>
                </tr>
                <tr>
                    <td><TextField type="number" required id="average-sleep-time" value={averageSleepTime} onChange={handleChange} label="Average sleep (h)" name="sleep"/></td>
                    <td  className="smokerTD" >
                     <Checkbox color="primary" label="End" labelid="alcohol-label" checked={consumesAlcohol} onChange={handleChange} name="alcohol" />
                     <InputLabel id="alcohol-label">Consumes alcohol</InputLabel>
                    </td>
                </tr>
                <tr>
                <td>
                        <FormControl className="skip-if-branchformControl">
                            <InputLabel id="activity-level-select">Activity level</InputLabel>
                            <Select className="activitySelect"
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
                    <td><TextField type="number"  value={drinksPerOccasion} onChange={handleChange} label="Drinks per occasion" name="drinksPerOccasion" /></td>
                </tr>
                <tr>
                    <td>
                        <FormControl component="fieldset">
                            <RadioGroup className="radioGroup" aria-label="gender" name="gender1" value={gender} onChange={handleChange} name="gender">
                                <FormControlLabel value="FEMALE" control={<Radio color="primary" /> } label="Female" />
                                <FormControlLabel value="MALE" control={<Radio color="primary" />} label="Male" />
                            </RadioGroup>
                        </FormControl>
                    </td>
                    <td><TextField type="number"  value={drinksPerWeek} onChange={handleChange} label="Drinks per week" name="drinksPerWeek" /></td>
                </tr>
                <tr>
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
                    <td>
                        <Button align="right" type="submit" variant="outlined" color="primary" className="button">
                            Submit
                        </Button>
                    </td>
                </tr>
            </tbody>
            </table>
        </form>
    );
}