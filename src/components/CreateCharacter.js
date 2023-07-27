import React, {useState} from 'react'
import { Container, Box, Stack, Paper } from '@mui/material';
import {useNavigate} from "react-router-dom";
import StepOne from './createCharacter/StepOne';
import StepTwo from './createCharacter/StepTwo';
import StepThree from './createCharacter/StepThree';
import StepFour from './createCharacter/StepFour';
import StepFive from './createCharacter/StepFive';
import StepSix from './createCharacter/StepSix';
import StepSeven from './createCharacter/StepSeven';
import StepEight from './createCharacter/StepEight';
import StepNine from './createCharacter/StepNine';
import StepTen from './createCharacter/StepTen';
import Final from './createCharacter/Final';
import '../stylesheets/CreateCharacter.css';
import axios from 'axios';
import CreateStepper from './createCharacter/CreateStepper';



export default function CreateCharacter({username}) {
  const baseCharacter = {
    "player":username,
    "name":"",
    "alias":"",
    "rank":"novice",
    "languages":"",
    "faction":"",

    "wounds":0,
    "fatigue":"none",
    "shaken":false,

    "pace":0,
    "parry":0,
    "toughness":0,
    "reason":0,
    "status":0,
    "wealth":5,

    "agility":1,
    "smarts":1,
    "spirit":1,
    "strength":1,
    "vigor":1,

    "skills":[
      {
        "name":"Athletics",
        "gov":'Ag',
        "rank":2
      },
      {
        "name":"Common Knowledge",
        "gov":"Sm",
        "rank":2
      },
      {
        "name":"Persuasion",
        "gov":'Sp',
        "rank":2
      },
      {
        "name":"Stealth",
        "gov":'Ag',
        "rank":2
      },
      {
        "name":"Notice",
        "gov":'Sm',
        "rank":2
      }
    ],
    "gear" : [],
    "hinderances" : [],
    "edges" :[],
    "powers":[],
    "rippertech":[],
    "weapons":[]
    
}
  
  const [newCharacter, setNewCharacter] = useState(baseCharacter);
  const [step, setStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [attributeScore, setAttributeScore] = useState(5);
  const [bonusScore, setBonusScore] = useState(0);
  const steps = ['Begin', 'Attributes', 'Stats', 'Hinderances', 'Edges', 'Skills', 'Rippertech', 'Powers', 'Weapons', 'Gear', 'Done']

  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  
  const handleChange = (e) =>{
    let value = e.value;
    let name = e.name;

    setNewCharacter((prevalue) =>{
      return{
        ...prevalue, [name]:value
      }
    })
  }

  const handleAttributeChange = (e) =>{
    setAttributeScore(e)
  }

  const handleEdit = (e) =>{
    setStep(e);
  }

  const handleSubmit = async () =>{
    try {
        axios.post(`https://swade-api.azurewebsites.net/api/character/add`, JSON.stringify(newCharacter), {
          headers: {
            'Content-Type': 'application/json'
          }})
        .then((res)=>{
            console.log(res.status)
        })
        .catch((err)=>{
            console.log('Error updating data ', err)
        });
    } catch (error) {
        console.log(error)
    }
}

  const totalSteps = () => {
    return steps.length;
  }

  const completedSteps = () => {
    return Object.keys(completed).length;
  }

  const isLastStep = () => {
    return step === totalSteps() -1;
  }

  const allStepsCompleted = () =>{
    return completedSteps() === totalSteps();
  }

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[step] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleStep=(index) =>{
    setStep(index)
  }
  const handleNext=() =>{
    const newActiveStep = isLastStep() && !allStepsCompleted() ?
      steps.findIndex((step, i) => !(i in completed))
      : step +1;
    setStep(newActiveStep)
  }
  
  const navigate = useNavigate();
  
  const handleReset = () =>{
    setStep(0);
    setNewCharacter(baseCharacter);
    setCompleted({});
    navigate('/');
  }
  
  const renderForm = (step) =>{
    switch (step) {
    
      case 0:
        return (
          <StepOne nextStep={nextStep} handleChange={handleChange} handleNext={handleNext} handleComplete={handleComplete} values={newCharacter} />
        );
      case 1:
        return (
          <StepTwo nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} handleComplete={handleComplete} values={newCharacter} attributeScore={attributeScore} handleAttributeChange={handleAttributeChange} />
        );
      case 2:
        return (
          <StepThree nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} handleComplete={handleComplete} values={newCharacter} />
        );
      case 3:
        return (
          <StepFour nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} handleComplete={handleComplete} values={newCharacter} bonusScore={bonusScore} setBonusScore={setBonusScore} />
        );
      case 4:
        return (
          <StepFive nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} handleComplete={handleComplete} values={newCharacter} bonusScore={bonusScore} setBonusScore={setBonusScore} />
        );
      case 5:
        return (
          <StepSix nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} handleComplete={handleComplete} values={newCharacter} bonusScore={bonusScore} setBonusScore={setBonusScore} />
        );
      case 6:
        return (
          <StepSeven nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} handleComplete={handleComplete} values={newCharacter} />
        );
      case 7:
        return (
          <StepEight nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} handleComplete={handleComplete} values={newCharacter} />
        );
      case 8:
        return (
          <StepNine nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} handleComplete={handleComplete} values={newCharacter} />
        );
      case 9:
        return (
          <StepTen nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} handleComplete={handleComplete} values={newCharacter} />
        );
      case 10:
          return (
            <Final values={newCharacter} handleEdit={handleEdit} handleReset={handleReset} handleSubmit={handleSubmit} />
          );
      default:
        return(
          <div>
            <h1>Error</h1>
          </div>
        );
    }
  }
  /**/
  return (
    <>
      <Container>
        <Box>
          <Stack spacing={2}>
            <Paper>
              <CreateStepper step={step} steps={steps} completed={completed} handleStep={handleStep} handleNext={handleNext} handleComplete={handleComplete} />
            </Paper>
                   
            <Paper elevation={3}>
              {renderForm(step)}
            </Paper>
          </Stack>
        </Box>
      </Container>
    </>
  )
}
