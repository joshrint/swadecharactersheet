/*
Set the derived stats
Pace, Parry, toughness, Reason, status, and wealth
*/
import React from 'react'
import { Form, Col, Row, Button, Card } from 'react-bootstrap';

export default function StepThree({nextStep, prevStep, handleChange, values}) {
  
  const submitFormData = (e) =>{
    e.preventDefault();
    nextStep();
  }

  return (
    <>
    <Card>
      <Card.Header><h3>Stats</h3></Card.Header>
      <Form onSubmit={submitFormData}>
        <Form.Group as={Row}>
          <Form.Label column sm="3">Pace:</Form.Label>
          <Col sm="9">
            <Form.Control required 
                type="number" 
                name='pace' 
                placeholder='Character Pace' 
                defaultValue={values.pace} 
                onChange={(e) => handleChange({"name":e.target.name, "value":e.target.value})}
                />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="3">Parry:</Form.Label>
          <Col sm="9">
            <Form.Control required 
                type="number" 
                name='parry' 
                placeholder='Characters Parry' 
                defaultValue={values.parry} 
                onChange={(e) => handleChange({"name":e.target.name, "value":e.target.value})}
                />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="3">Toughness:</Form.Label>
          <Col sm="9">
            <Form.Control required 
                type="number" 
                name='toughness' 
                placeholder='Character Toughness' 
                defaultValue={values.toughness} 
                onChange={(e) => handleChange({"name":e.target.name, "value":e.target.value})}
                />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="3">Reason:</Form.Label>
          <Col sm="9">
            <Form.Control required 
                type="number" 
                name='reason' 
                placeholder='Character Reason' 
                defaultValue={values.reason} 
                onChange={(e) => handleChange({"name":e.target.name, "value":e.target.value})}
                />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="3">Status:</Form.Label>
          <Col sm="9">
            <Form.Control required 
                type="number" 
                name='status' 
                placeholder='Character Status' 
                defaultValue={values.status} 
                onChange={(e) => handleChange({"name":e.target.name, "value":e.target.value})}
                />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="3">Wealth:</Form.Label>
          <Col sm="9">
            <Form.Control required 
                type="number" 
                name='wealth' 
                placeholder='Character Wealth in £' 
                defaultValue={values.wealth} 
                onChange={(e) => handleChange({"name":e.target.name, "value":e.target.value})}
                />
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
