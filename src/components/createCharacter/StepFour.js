/**
 * Add Hinderances
 */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { Form, Col, Row, Button, Card } from 'react-bootstrap';
import AddHinderance from '../add/AddHinderance';

export default function StepFour({nextStep, prevStep, handleChange, values}) {
  
  const handleAddHinderance = (e) =>{
    let tempHinderances = [];
    if(values.hinderances){
      tempHinderances = values.hinderances;
    } 
    tempHinderances.push(e);
    handleChange({"name":"hinderances", "value":tempHinderances});
  }
  const handleRemoveHinderance = (e) =>{
    let tempHinderances = values.hinderances;
    for(let i = 0; i < tempHinderances.length; i++){
        if(tempHinderances[i].name === e){
            tempHinderances.splice(i, 1);
        }
    }
    handleChange({"name":"hinderances", "value": tempHinderances});
  }
  
  const submitFormData =() =>{
    nextStep();
  }

  return (
    <>
      <Card>
        <Form onSubmit={submitFormData}>
        <Card.Header><h3>Hinderances<AddHinderance handleAddHinderance={handleAddHinderance} /></h3></Card.Header>
          {values.hinderances && values.hinderances.length ? (
              <>
              {values.hinderances.map((h) =>(
                <Row key={h.name}>
                  <Col sm="3">{h.name}</Col>
                  <Col sm="8">{h.description}</Col> 
                  <Col>
                    <FontAwesomeIcon onClick={() =>handleRemoveHinderance(h.name)} icon={faDeleteLeft} style={{float:"right"}} />
                  </Col>
                </Row>
              ))}
              </>
            ): <div>None</div>  }
          <Card.Footer>
            
            <Button onClick={prevStep}>Previous</Button>
            <Button type='submit'>Next</Button>
          </Card.Footer>
        </Form>
      </Card>
    </>
  )
}
