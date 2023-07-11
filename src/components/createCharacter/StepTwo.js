/*
Set Character Attributes
*/
import React from 'react'
import { Form, Col, Row, Button, Card } from 'react-bootstrap';
import SelectDieType from '../tools/SelectDieType';

export default function StepTwo({ nextStep, prevStep, handleChange, values}) {
  
  const handleSelect = (diceLevel, attribute) =>{
    handleChange({"name":attribute, "value":diceLevel});
  }
  const submitFormData =() =>{
    nextStep();
  }

  return (
    <>
    <Card>
      <Card.Header><h3>Attributes</h3></Card.Header>
      <Form onSubmit={submitFormData}>
        <Form.Group as={Row}>
          <Form.Label column sm="3">Agility:</Form.Label>
          <Col sm="9" style={{textAlign:"left"}}>
            <SelectDieType diceLevel={values.agility} attribute={'agility'} handleSelect={handleSelect} />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="3">Smarts:</Form.Label>
          <Col sm="9" style={{textAlign:"left"}}>
            <SelectDieType diceLevel={values.smarts} attribute={'smarts'} handleSelect={handleSelect} />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="3">Spirit:</Form.Label>
          <Col sm="9" style={{textAlign:"left"}}>
            <SelectDieType diceLevel={values.spirit} attribute={'spirit'} handleSelect={handleSelect} />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="3">Strength:</Form.Label>
          <Col sm="9" style={{textAlign:"left"}}>
            <SelectDieType diceLevel={values.strength} attribute={'strength'} handleSelect={handleSelect} />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="3">Vigor:</Form.Label>
          <Col sm="9" style={{textAlign:"left"}}>
            <SelectDieType diceLevel={values.vigor} attribute={'vigor'} handleSelect={handleSelect} />
          </Col>
        </Form.Group>
        <Card.Footer>
          <Button onClick={prevStep}>Previous</Button>
          <Button type='submit'>Next</Button>
        </Card.Footer>
      </Form>
    </Card>
    
    </>
  )
}
