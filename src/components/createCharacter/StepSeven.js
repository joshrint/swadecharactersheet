/**
 * Add Rippertech
 */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { Form, Col, Row, Button, Card } from 'react-bootstrap';
import AddRippertech from '../add/AddRippertech'

export default function StepSeven({nextStep, prevStep, handleChange, values}) {
  const handleAddRippertech = (e) =>{
    let tempRT = values.rippertech;
    tempRT.push(e);
    handleChange({"name":"rippertech", "value":tempRT})
  }

  const handleRemoveRippertech = (e) =>{
    let tempRT = values.rippertech
    for(let i = 0; i < tempRT.length; i++){
        if(tempRT[i].name === e) {
          tempRT.splice(i, 1);
        }
    }
    handleChange({"name":"rippertech", "value": tempRT});
  }

  const submitFormData =() =>{
    nextStep();
  }
  return (
    <>
      <Card>
        <Form onSubmit={submitFormData}>
        <Card.Header><h3>Rippertech<AddRippertech  handleAddRippertech={handleAddRippertech}/></h3></Card.Header>
          {values.rippertech && values.rippertech.length > 0 ? (
            <>
              {values.rippertech.map((r) =>(
                <Row key={r.name}>
                  <Col sm="3">{r.name}</Col>
                  <Col sm="8" style={{textAlign:"left"}}>{r.benefit} </Col>
                  <Col>
                    <FontAwesomeIcon onClick={() =>handleRemoveRippertech(r.name)} icon={faDeleteLeft} style={{float:"right"}} />
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
