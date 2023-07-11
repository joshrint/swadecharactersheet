import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { Form, Col, Row, Button, Card } from 'react-bootstrap';
import AddWeapon from "../add/AddWeapon";

export default function StepNine({nextStep, prevStep, handleChange, values}) {
  const handleAddWeapon = (e) =>{
    let tempWeapons = values.weapons;
    tempWeapons.push(e);
    handleChange({"name":"weapons", "value": tempWeapons});
  }

  const handleRemoveWeapon = (e) =>{
    let tempWeapons = values.weapons;
    for(let i=0; i < tempWeapons.length; i++){
      if(tempWeapons[i].name === e){
        tempWeapons.splice(i,1);
      }
    }
    handleChange({"name":"weapons", "value": tempWeapons});
  }
  const submitFormData =()=>{
    nextStep();
  }
  return (
    <>
      <Card>
      <Form onSubmit ={submitFormData}>
        <Card.Header><h3>Weapons<AddWeapon handleAddWeapon={handleAddWeapon} /></h3></Card.Header>
          {values.weapons && values.weapons.length > 0 ?(
            <>
            <Row>
              <Col sm="3">
                <h5>Name</h5>
              </Col>
              <Col sm="1">
                <h5>Range</h5>
              </Col>
              <Col sm="1">
                <h5>Damage</h5>
              </Col>
              <Col sm="1">
                <h5>AP</h5>
              </Col>
              <Col sm="1">
                <h5>ROF</h5>
              </Col>
              <Col sm="1">
                <h5>WT</h5>
              </Col>
              <Col sm="5">
                <h5>Notes</h5>
              </Col>
              <Col></Col>
            </Row>
            {values.weapons.map((w) =>(
              <Row key={w.name}>
              <Col sm="3">
                <h5>{w.name}</h5>
              </Col>
              <Col sm="1">
                <h5>{w.range}</h5>
              </Col>
              <Col sm="1">
                <h5>{w.damage}</h5>
              </Col>
              <Col sm="1">
                <h5>{w.ap}</h5>
              </Col>
              <Col sm="1">
                <h5>{w.rof}</h5>
              </Col>
              <Col sm="1">
                <h5>{w.wt}</h5>
              </Col>
              <Col sm="5">
                <h5>{w.notes}</h5>
              </Col>
              <Col>
                <FontAwesomeIcon onClick={() =>handleRemoveWeapon(w.name)} icon={faDeleteLeft} style={{float:"right"}} />
              </Col>
            </Row>
            ))}
            </>
          ):<div>none</div>}
          <Card.Footer>
            <Button onClick={prevStep}>Previous</Button>
            <Button type='submit'>Next</Button>
          </Card.Footer>
        </Form>
      </Card>
    </>
  )
}
