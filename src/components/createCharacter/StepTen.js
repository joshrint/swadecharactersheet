/*
Add geat to created character
*/
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { Form, Col, Row, Button, Card } from 'react-bootstrap';

export default function StepTen({nextStep, prevStep, handleChange, values}) {
  const [gearItem, setGearItem] = useState("");
  const handleAddGear = (e) =>{
    let tempGear = values.gear;
    tempGear.push(e);
    handleChange({"name":"gear", "value":tempGear})
  }
  const handleRemoveGear = (e) =>{
    let tempGear = values.gear;
        for(let i = 0; i < tempGear.length; i++){
            if(tempGear[i] === e){
                tempGear.splice(i, 1);
            }
        }
        handleChange({"name":"gear", "value":tempGear})
  }
  const submitFormData =() =>{
    nextStep();
  }
  return (
    <>
      <Card>
        <Form onSubmit={submitFormData}>
        <Card.Header><h3>Gear</h3></Card.Header>
          <Row>
            <Col sm="10">
              <Form.Control type="text" placeholder='Item Name' onChange={(e) => setGearItem(e.target.value)} /> 
            </Col>
            <Col sm="1">
            <Button onClick={()=>handleAddGear(gearItem)}>+</Button>
            </Col>
          </Row>
          
          {values.gear.map((g) =>(
            <Row key="g">
              <Col sm="4">{g}</Col>
              <Col sm="1"><FontAwesomeIcon onClick={() =>handleRemoveGear(g)} icon={faDeleteLeft} style={{float:"right"}} /></Col>
            </Row>
          ))}
          <Card.Footer>
          <Button onClick={prevStep}>Previous</Button>
          <Button type='submit'>Next</Button>
        </Card.Footer>
        </Form>
      </Card>
    </>
  )
}
