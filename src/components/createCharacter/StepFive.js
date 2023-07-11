/**
 * Add Edges
 */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { Form, Col, Row, Button, Card } from 'react-bootstrap';
import AddEdge from "../add/AddEdge";

export default function StepFive({nextStep, prevStep, handleChange, values}) {
  
  const handleAddEdge = (e) =>{
    let tempEdges = values.edges;
    tempEdges.push(e);
    handleChange({"name":"edges", "value":tempEdges})
  }

  const handleRemoveEdge = (e) =>{
    let tempEdges = values.edges;
    for(let i = 0; i < tempEdges.length; i++){
        if(tempEdges[i].name === e) {
          tempEdges.splice(i, 1);
        }
    }
    handleChange({"name":"edges", "value": tempEdges});
  }

  const submitFormData =() =>{
    nextStep();
  }

  return (
    <>
      <Card>
        <Form onSubmit={submitFormData}>
        <Card.Header><h3>Edges<AddEdge  handleAddEdge={handleAddEdge}/></h3></Card.Header>
          {values.edges && values.edges.length > 0 ? (
            <>
              {values.edges.map((e) =>(
                <Row key={e.name}>
                  <Col sm="3">{e.name}</Col>
                  <Col sm="8">{e.description} </Col>
                  <Col>
                    <FontAwesomeIcon onClick={() =>handleRemoveEdge(e.name)} icon={faDeleteLeft} style={{float:"right"}} />
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
