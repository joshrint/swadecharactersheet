import React from 'react';
import { Form, Col, Row, Card } from 'react-bootstrap';
import { Button } from '@mui/material';
import EditNewHeader from '../edit/EditNewHeader';
import NewCharSheetHinderances from './finalCharSheet/NewCharSheetHinderances';
import NewCharSheetDerivedStats from './finalCharSheet/NewCharSheetDerived';
import NewCharSheetAttributes from './finalCharSheet/NewCharSheetAttributes';
import NewCharSheetSkills from './finalCharSheet/NewCharSheetSkills';
import NewCharSheetGear from './finalCharSheet/NewCharSheetGeear';
import NewCharSheetEdges from './finalCharSheet/NewCharSheetEdges';
import NewCharSheetRipperTech from './finalCharSheet/NewCharSheetRipperTech';
import NewCharSheetPowers from './finalCharSheet/NewCharSheetPowers';
import NewCharSheetWeapons from './finalCharSheet/NewCharSheetWeapons';

export default function Final({values, handleSubmit, handleChange, handleEdit, handleReset}) {
  
  const handleHeaderChange = (e) => {
    let headerChange;
    e.forEach(element => {
        handleChange(element);
        headerChange = {...headerChange, [element.name]:element.value};
    });
  }
  
  return (
    <>
    <Form>
      <Row>
        <Col>
        <Card>
          <Card.Body>
            <Card.Title>Name: {values.name}<EditNewHeader name={values.name} editclass={"new-icon"} rank={values.rank} alias={values.alias} languages={values.languages} faction={values.faction} handleHeaderChange={handleHeaderChange} /></Card.Title>
            <Card.Subtitle>Alias: {values.alias}</Card.Subtitle>
            <Card.Text>
              <b>Rank:</b> {values.rank}<br />
              <b>Languages:</b> {values.languages}<br />
              <b>Faction:</b> {values.faction}<br />
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <NewCharSheetAttributes agility={values.agility} smarts={values.smarts} spirit={values.smarts} strength={values.smarts} vigor={values.vigor} handleChange={handleChange} />
        </Col>
        <Col>
          <NewCharSheetDerivedStats parry={values.parry} pace={values.pace} toughness={values.toughness} reason={values.reason} status={values.status} wealth={values.wealth} handleChange={handleChange} />
        </Col>
        <Col>
          <NewCharSheetHinderances hinderances={values.hinderances} handleChange={handleChange} />
        </Col>
      </Row>
      <Row>
        <Col>
          <NewCharSheetSkills skills={values.skills} handleChange={handleChange} />
        </Col>
        <Col>
          <NewCharSheetGear gear={values.gear} handleChange={handleChange} />
        </Col>
        <Col>
          <NewCharSheetEdges edges={values.edges} handleChange={handleChange} />
        </Col>
      </Row>
      <Row>
        <Col>
          <NewCharSheetRipperTech rippertech={values.rippertech} handleChange={handleChange} />
        </Col>
        <Col>
          <NewCharSheetPowers powers={values.powers}  handleChange={handleChange} />
        </Col>
      </Row>
      <Row>
        <Col>
          <NewCharSheetWeapons weapons={values.weapons} handleChange={handleChange} />
        </Col>
      </Row>
      <Row>
        <Col>
        <Card>
          <Card.Body>
          <Button onClick={handleSubmit}>Save</Button>
          <Button onClick={handleReset}>Cancel</Button> 
          </Card.Body>
        </Card>
        </Col>
      </Row>
      </Form>
    </>
  )
}
