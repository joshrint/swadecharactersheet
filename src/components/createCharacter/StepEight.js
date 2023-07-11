import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { Form, Col, Row, Button, Card } from 'react-bootstrap';
import AddPower from "../add/AddPower";

export default function StepEight({nextStep, prevStep, handleChange, values}) {
  const handleAddPower = (e) =>{
    let tempPower = values.powers;
    tempPower.push(e);
    handleChange({"name":"powers", "value": tempPower});
  }
  const handleRemovePower = (e) =>{
    let tempPower = values.powers;
    for(let i=0; i< tempPower.length; i++){
      if(tempPower[i].name === e){
        tempPower.splice(i,1);
      }
    }
    handleChange({"name":"powers", "value": tempPower});
  }
  
  const submitFormData =() =>{
    nextStep();
  }
  return (
    <>
      <Card>
        <Form onSubmit={submitFormData}>
        <Card.Header><h3>Powers<AddPower handleAddPower={handleAddPower} /></h3></Card.Header>
          {values.powers && values.powers.length > 0 ?(
            <>
            <Row>
              <Col sm="3">
                <h5>Name</h5>
              </Col>
              <Col sm="1">
                <h5>PP</h5>
              </Col>
              <Col sm="1">
                <h5>Range</h5>
              </Col>
              <Col sm="1">
                <h5>Dur</h5>
              </Col>
              <Col sm="5">
                <h5>Effect</h5>
              </Col>
              <Col></Col>
            </Row>
            {values.powers.map((p) =>(
              <Row key={p.name}>
                <Col sm="3">
                  <h5>{p.name}</h5>
                </Col>
                <Col sm="1">
                  <h5>{p.pp}</h5>
                </Col>
                <Col sm="1">
                  <h5>{p.range}</h5>
                </Col>
                <Col sm="1">
                  <h5>{p.dur}</h5>
                </Col>
                <Col sm="5">
                  <h5>{p.effect}</h5>
                </Col>
                <Col>
                  <FontAwesomeIcon onClick={() =>handleRemovePower(p.name)} icon={faDeleteLeft} style={{float:"right"}} />
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
