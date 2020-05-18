import React, { useEffect } from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import axios from "axios";
import { Checkbox } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        color: 'gray',
        display: 'flex',
       /* border: 'solid black'*/
    },
    activitySelect: {
        minWidth: '180px'
    },
    stress: {
        maxWidth: '70%'
    },
    radioGroup: {
        display: 'flex',
        flexDirection: 'row'
    },
    smokerTD: {
        minWidth: '190px',
      /*  display: 'flex',
        flexDirection: 'row' */
    },
    table: {
        border: 'solid gray',
        borderRadius: '5%',
        width: '40%',
        marginLeft: '7%',
        backgroundColor: '#c6f7f0',
        boxShadow: "5px 10px"
    }
}));



export default function UserDataForm({ healthData }) {
    const classes = useStyles();
    const [age, setAge] = React.useState();
    const [height, setHeight] = React.useState();
    const [weight, setWeight] = React.useState();
    const [averageSleepTime, setAverageSleepTime] = React.useState();
    const [stressLevel, setStressLevel] = React.useState();
    const [activityLevel, setActivityLevel] = React.useState();
    const [smoker, setSmoker] =  React.useState(false);
    const [exSmoker, setExSmoker] = React.useState(false);
    const [cigarettesPerDay, setCigarettesPerDay] = React.useState();
    const [consumesAlcohol, setConsumesAlcohol] = React.useState(false);
    const [drinksPerOccasion, setDrinksPerOccasion] = React.useState();
    const [drinksPerWeek, setDrinksPerWeek] = React.useState();
    const [gender, setGender] = React.useState();

    var deseases = {}

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };

    const handleHeightChange = (event) => {
        setHeight(event.target.value);
    };

    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };

    const handleAverageSleepTimeChange = (event) => {
        setAverageSleepTime(event.target.value);
    }

    const handleStressLevelChange = (event) => {
        setStressLevel(event.target.value);
    }

    const handleActivityLevelChange = (event) => {
        setActivityLevel(event.target.value)
    }

    const handleSmokerChange = (event) => {
        setSmoker(!smoker);
    }

    const handleExSmokerChange = (event) => {
        setExSmoker(!exSmoker);
    }

    const handleCigarettesPerDayChange = (event) => {
        setCigarettesPerDay(event.target.value);
    }

    const handleConsumesAlcoholChange  = (event) => {
        setConsumesAlcohol(!consumesAlcohol);
    }

    const handleDrinksPerOccasionChange = (event) => {
        setDrinksPerOccasion(event.target.value);
    }

    const handleDrinksPerWeekChange = (event) => {
        setDrinksPerWeek(event.target.value);
    }

    const handleChange = (event) => {
        setGender(event.target.value);
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
            "averageSleepTime": averageSleepTime,
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
      );*/

    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={submit}>
            <table className={classes.table} align="center">
                <tr>
                    <td><TextField type="number" required id="age" value={age} onChange={handleAgeChange} label="Age" /> </td>
                    <td  className={classes.smokerTD} >
                     <Checkbox color="primary" label="End" labelId="smoker-label" checked={smoker} onChange={handleSmokerChange} />
                     <InputLabel id="smoker-label">Current Smoker</InputLabel>
                     
                    </td>
                </tr>
                <tr>
                    <td><TextField type="number" required id="height" value={height} onChange={handleHeightChange} label="Height (cm)" /> </td>
                    <td  className={classes.smokerTD} >
                     <Checkbox  color="primary" label="End" labelId="ex-smoker-label" checked={exSmoker} onChange={handleExSmokerChange}  />
                     <InputLabel id="ex-smoker-label">Ex Smoker</InputLabel>
                    </td>
                </tr>
                <tr>
                    <td><TextField type="number" required id="weight" value={weight} onChange={handleWeightChange} label="Weight (kg)" /></td>
                    <td><TextField type="number"  value={cigarettesPerDay} onChange={handleCigarettesPerDayChange} label="Cigarettes per day"  /></td>
                </tr>
                <tr>
                    <td><TextField type="number" required id="average-sleep-time" value={averageSleepTime} onChange={handleAverageSleepTimeChange} label="Average sleep (min)" /></td>
                    <td  className={classes.smokerTD} >
                     <Checkbox color="primary" label="End" labelId="alcohol-label" checked={consumesAlcohol} onChange={handleConsumesAlcoholChange}  />
                     <InputLabel id="alcohol-label">Consumes alcohol</InputLabel>
                    </td>
                </tr>
                <tr>
                <td>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="activity-level-select">Activity Level</InputLabel>
                            <Select className={classes.activitySelect}
                                labelId="activity-level-select"
                                id="activity-level"
                                value={activityLevel}
                                onChange={handleActivityLevelChange}
                            >
                                <MenuItem value="SEDENTARY">Sedentary</MenuItem>
                                <MenuItem value="LIGHTHLY_ACTIVE">Lightly active</MenuItem>
                                <MenuItem value="MODERATELY_ACTIVE">Moderately active</MenuItem>
                                <MenuItem value="VERY_ACTIVE">Very active</MenuItem>
                                <MenuItem value="SUPER_ACTIVE">Super active</MenuItem>
                            </Select>
                        </FormControl>
                    </td>
                    <td><TextField type="number"  value={drinksPerOccasion} onChange={handleDrinksPerOccasionChange} label="Drinks per occasion"  /></td>
                </tr>
                <tr>
                    <td>
                        <FormControl component="fieldset">
                            <RadioGroup className={classes.radioGroup} aria-label="gender" name="gender1" value={gender} onChange={handleChange}>
                                <FormControlLabel value="FEMALE" control={<Radio color="primary" /> } label="Female" />
                                <FormControlLabel value="MALE" control={<Radio color="primary" />} label="Male" />
                            </RadioGroup>
                        </FormControl>
                    </td>
                    <td><TextField type="number"  value={drinksPerWeek} onChange={handleDrinksPerWeekChange} label="Drinks per week"  /></td>
                </tr>
                <tr>
                <td>
                        <Typography id="stress-slider" gutterBottom>
                            Stress level
                        </Typography>
                        <Slider className={classes.stress}
                            defaultValue={0}
                            getAriaValueText={valuetext}
                            aria-labelledby="stress-slider"
                            step={1}
                            marks
                            min={0}
                            max={10}
                            valueLabelDisplay="auto"
                            value={stressLevel}
                            onChange={handleStressLevelChange}
                            onDragStop={handleStressLevelChange}
                        />
                    </td>
                    <td>
                        <Button align="right" type="submit" variant="outlined" color="primary" className={classes.button}>
                            Submit
                        </Button>
                    </td>
                </tr>
         
            </table>
        </form>
    );
}