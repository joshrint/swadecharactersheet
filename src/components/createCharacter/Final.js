import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Form, Col, Row, Card, ListGroup } from 'react-bootstrap';
import { Accordion, Button, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ScoreArray from '../characterSheet/tools/ScoreArray';

export default function Final({values, handleSubmit, handleEdit, handleReset}) {
  return (
    <>
    <Form>
      <Row>
        <Col>
        <Card>
          <Card.Body>
            <Card.Title>Name: {values.name}<FontAwesomeIcon icon={faPenToSquare} className='edit-new-icon' onClick={() => handleEdit(0)} /></Card.Title>
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
          <Card>
            <Card.Header><h4>Attributes<FontAwesomeIcon icon={faPenToSquare} className='edit-new-icon' onClick={() => handleEdit(1)} /></h4></Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item><ScoreArray diceLevel={values.agility} /> Agility</ListGroup.Item>
              <ListGroup.Item><ScoreArray diceLevel={values.smarts} /> Smarts</ListGroup.Item>
              <ListGroup.Item><ScoreArray diceLevel={values.spirit} /> Spirit</ListGroup.Item>
              <ListGroup.Item><ScoreArray diceLevel={values.strength} /> Strength</ListGroup.Item>
              <ListGroup.Item><ScoreArray diceLevel={values.vigor} /> Vigor</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item><h4><FontAwesomeIcon icon={faPenToSquare} className='edit-new-icon' onClick={() => handleEdit(2)} /></h4>Pace: {values.pace} </ListGroup.Item>
              <ListGroup.Item>Parry: {values.parry}</ListGroup.Item>
              <ListGroup.Item>Toughness: {values.toughness}</ListGroup.Item>
              <ListGroup.Item>Reason: {values.reason}</ListGroup.Item>
              <ListGroup.Item>Status: {values.status}</ListGroup.Item>
              <ListGroup.Item>Wealth: {values.wealth}</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header><h4>Hinderances<FontAwesomeIcon icon={faPenToSquare} className='edit-new-icon' onClick={() => handleEdit(3)} /></h4></Card.Header>
            
              {values.hinderances.map((h) =>(
                <Accordion key={h.name}>
                  <AccordionSummary
                  expandIcon={<FontAwesomeIcon icon={faCaretDown} />}
                  aria-controls='panel1a-content'
                  id="panel1a-header">
                    <h5>{h.name}</h5>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography align='left'>
                      {h.description}
                    </Typography>    
                  </AccordionDetails>
                </Accordion>
                ))}
            
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Header><h4>Skills<FontAwesomeIcon icon={faPenToSquare} className='edit-new-icon' onClick={() => handleEdit(5)} /></h4></Card.Header>
            <ListGroup>
              {values.skills.map((s)=>(
                <ListGroup.Item key={s.name}><ScoreArray diceLevel={s.rank} /> {s.name} ({s.gov})</ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header><h4>Gear<FontAwesomeIcon icon={faPenToSquare} className='edit-new-icon' onClick={() => handleEdit(9)} /></h4></Card.Header>
            <ListGroup variant='flush'>
              {values.gear.map((g) =>(
                <ListGroup.Item key={g.name}>{g.name}</ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header><h4>Edges<FontAwesomeIcon icon={faPenToSquare} className='edit-new-icon' onClick={() => handleEdit(4)} /></h4></Card.Header>
            <ListGroup variant='flush'>
              {values.edges.map((e) =>(
                <Accordion key={e.name}>
                  <AccordionSummary
                    expandIcon={<FontAwesomeIcon icon={faCaretDown} />}
                    aria-controls='panel1a-content'
                    id="panel1a-header">
                      <h5>{e.name}</h5>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography align='left'>
                        {e.description}
                      </Typography>
                    </AccordionDetails>
                </Accordion>
               ))}
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Header><h4>Rippertech<FontAwesomeIcon icon={faPenToSquare} className='edit-new-icon' onClick={() => handleEdit(6)} /></h4></Card.Header>
                {values.rippertech.map((rt) =>(
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<FontAwesomeIcon icon={faCaretDown} />}
                      aria-controls='panel1a-content'
                      id="panel1a-header">
                        <h5>{rt.name}</h5>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography align='left'>
                          {rt.benefit}
                        </Typography>
                      </AccordionDetails>
                  </Accordion>
                ))}
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header><h4>Powers<FontAwesomeIcon icon={faPenToSquare} className='edit-new-icon' onClick={() => handleEdit(7)} /></h4></Card.Header>
                  {values.powers.map((p) =>(
                    <Accordion>
                      <AccordionSummary
                      expandIcon={<FontAwesomeIcon icon={faCaretDown} />}
                      aria-controls='panel1a-content'
                      id="panel1a-header">
                        <h5>{p.name}</h5>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography align='left'>
                          <b>PP:</b> {p.pp}
                        </Typography>
                        <Typography align='left'>
                          <b>Range:</b> {p.range}
                        </Typography>
                        <Typography align='left'>
                          <b>Dur:</b> {p.dur}
                        </Typography>
                        <Typography align='left'>
                          <b>Effect:</b> {p.effect}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Header><h4>Weapons<FontAwesomeIcon icon={faPenToSquare} className='edit-new-icon' onClick={() => handleEdit(9)} /></h4></Card.Header>
            <table className='table'>
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Range</th>
                      <th>Damage</th>
                      <th>AP</th>
                      <th>ROF</th>
                      <th>WT</th>
                      <th>Notes</th>
                  </tr>
              </thead>
              <tbody>
              {values.weapons.map((w) =>(
                  <tr key={w.name}>
                      <td>{w.name}</td>
                      <td>{w.range}</td>
                      <td>{w.damage}</td>
                      <td>{w.ap}</td>
                      <td>{w.rof}</td>
                      <td>{w.wt}</td>
                      <td>{w.notes}</td>
                  </tr>
              ))}
              </tbody>
            </table>
          </Card>
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
