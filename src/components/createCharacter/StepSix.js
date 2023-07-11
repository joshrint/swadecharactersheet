/**
 * Add Skills 
 * Default Skills: Althletics, common Knowledge, persuasion, stealth, and Notice already set to a d6
 */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { Form, Col, Row, Button, Card } from 'react-bootstrap';
import AddSkill from '../add/AddSkill';
import SelectDieType from '../tools/SelectDieType';

export default function StepSix({nextStep, prevStep, handleChange, values}) {
  
  const handleSelect = (diceLevel, attribute) =>{
    
    let tempSkills = values.skills;
    tempSkills.forEach(skill => {
      if(skill.name === attribute){
        skill.rank=diceLevel
      }
    });
    handleChange({"name":"skills", "value":tempSkills});
  }

  const handleAddSkill = (e) =>{
    let tempSkills = values.skills;
    tempSkills.push(e);
    handleChange({"name":"skills", "value":tempSkills})
  }

  const handleRemoveSkill = (e) =>{
    let tempSkills = values.skills;
    for(let i = 0; i < tempSkills.length; i++){
        if(tempSkills[i].name === e) {
          tempSkills.splice(i, 1);

          
        }
    }
    handleChange({"name":"skills", "value": tempSkills});
  }

  const submitFormData =() =>{
    nextStep();
  }
  return (
    <>
      <Card>
        <Form onSubmit={submitFormData}>
        <Card.Header><h3>Skills <AddSkill handleAddSkill={handleAddSkill} /></h3></Card.Header>
          {values.skills && values.skills.length > 0 ? (
            <>
              {values.skills.map((s) =>(
                <Row key={s.name}>
                  <Col sm="4">{s.name}</Col>
                  <Col sm="4"><SelectDieType diceLevel={s.rank} attribute={s.name} handleSelect={handleSelect} /> </Col>
                  <Col>
                  {s.name !== "Athletics (A)" &&
                    s.name !== "Common Knowledge (Sm)" &&
                    s.name !== "Persuasion (Sp)" &&
                    s.name !== "Stealth (A)" &&
                    s.name !== "Notice (Sm)"
                    ? (<FontAwesomeIcon onClick={() =>handleRemoveSkill(s.name)} icon={faDeleteLeft} style={{float:"right"}} />) : <></>}
                  </Col>  
                </Row>
              ))}
            </>
          ): <div>None</div>}
        <Card.Footer>
          <Button onClick={prevStep}>Previous</Button>
          <Button type='submit'>Next</Button>
        </Card.Footer>
        </Form>
      </Card>
    </>
  )
}
