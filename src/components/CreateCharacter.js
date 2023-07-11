import React, {useState} from 'react'
import {Col, Row, Container} from 'react-bootstrap';
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
    "wealth":"",

    "agility":0,
    "smarts":0,
    "spirit":0,
    "strength":0,
    "vigor":0,

    "skills":[
      {
        "name":"Athletics (A)",
        "rank":6
      },
      {
        "name":"Common Knowledge (Sm)",
        "rank":6
      },
      {
        "name":"Persuasion (Sp)",
        "rank":6
      },
      {
        "name":"Stealth (A)",
        "rank":6
      },
      {
        "name":"Notice (Sm)",
        "rank":6
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

  const [step, setStep] = useState(1);

  const nextStep = () => {
    console.log("Step "+step);
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
  
  const navigate = useNavigate();
  const handleReset = () =>{
    setStep(1);
    setNewCharacter(baseCharacter);
    navigate('/');
  }
  
  switch (step) {
    
    case 1:
      return (
        <div>
          <Container>
            <Row>
              <Col>
                <StepOne nextStep={nextStep} handleChange={handleChange} values={newCharacter} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    case 2:
      return (
        <div>
          <Container>
            <Row>
              <Col>
                <StepTwo nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={newCharacter} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    case 3:
      return (
        <div>
          <Container>
            <Row>
              <Col>
                <StepThree nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={newCharacter} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    case 4:
      return (
        <div>
          <Container>
            <Row>
              <Col>
                <StepFour nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={newCharacter} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    case 5:
      return (
        <div>
          <Container>
            <Row>
              <Col>
                <StepFive nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={newCharacter} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    case 6:
      return (
        <div>
          <Container>
            <Row>
              <Col>
                <StepSix nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={newCharacter} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    case 7:
      return (
        <div>
          <Container>
            <Row>
              <Col>
                <StepSeven nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={newCharacter} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    case 8:
      return (
        <div>
          <Container>
            <Row>
              <Col>
                <StepEight nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={newCharacter} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    case 9:
      return (
        <div>
          <Container>
            <Row>
              <Col>
                <StepNine nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={newCharacter} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    case 10:
      return (
        <div>
          <Container>
            <Row>
              <Col>
                <StepTen nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={newCharacter} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    case 11:
        return (
          <div>
            <Container>
              <Row>
                <Col>
                  <Final values={newCharacter} handleEdit={handleEdit} handleReset={handleReset} handleSubmit={handleSubmit} />
                </Col>
              </Row>
            </Container>
          </div>
        );
    default:
      return(
        <div>
          <h1>Error</h1>
        </div>
      );
  }
}
