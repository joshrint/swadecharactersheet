/*
Character Name, Alias, rank, faction, and languages.
Character Sheet Header
*/
import React from 'react'
import {Form, Col, Row, Card, Button } from 'react-bootstrap';

export default function StepOne({ nextStep, handleChange, values}) {

  const submitFormData = (e) =>{
    e.preventDefault();
    nextStep();
  }
  return (
    <>
    <Card>
      <Card.Header><h3>Create a New Character</h3></Card.Header>
      <Form onSubmit={submitFormData}>
        <Form.Group as={Row} controlId="name">
          <Form.Label column sm="3">Name:</Form.Label>
          <Col sm="9">
            <Form.Control required type="text" name='name' placeholder='Character Name' defaultValue={values.name} onChange={(e) => handleChange({"name":"name", "value":e.target.value})} />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="3">Alias:</Form.Label>
            <Col sm="9">
            < Form.Control required type="text" name='alias' placeholder='Character Alias' defaultValue={values.alias} onChange={(e) => handleChange({"name":"alias", "value":e.target.value})}/>
            </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="3">Languages:</Form.Label>
            <Col sm="9">
              <Form.Control required type="text" placeholder='English...' defaultValue={values.languages} name='languages' onChange={(e) => handleChange({"name":"languages", "value":e.target.value})} />
            </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="3">Rank:</Form.Label>
            <Col sm="9">
              <Form.Select name='rank' defaultValue={values.rank} onChange={(e) => handleChange({"name":"rank", "value":e.target.value})}>
                <option value="novice">Novice</option>
                <option value="seasoned">Seasoned</option>
                <option value="veteran">Veteran</option>
                <option value="heroic">Heroic</option>
                <option value="legendary">Legendary</option>
              </Form.Select>
            </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="3">Faction:</Form.Label>
          <Col sm="9">
            <Form.Control required type="text" name='faction' placeholder='Character Faction' defaultValue={values.faction} onChange={(e) => handleChange({"name":"faction", "value":e.target.value})} />
          </Col>
        </Form.Group>
        <Card.Footer>
          <Button type="submit">Next</Button>
        </Card.Footer>
      </Form>
    </Card>
    </>
  )
}
