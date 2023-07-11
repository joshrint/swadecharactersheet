import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Form, Col, Row, Button, Card, ListGroup } from 'react-bootstrap';
import ScoreArray from '../characterSheet/tools/ScoreArray';
import InfoPopup from '../characterSheet/tools/InfoPopup';
import ShowPowers from '../characterSheet/tools/ShowPowers';

export default function Final({values, handleSubmit, handleEdit, handleReset}) {
  return (
    <>
    <Form>
      <Row>
        <Card>
          <Card.Body>
            <Card.Title>Name: {values.name}<FontAwesomeIcon icon={faPenToSquare} className='edit-new-icon' onClick={() => handleEdit(1)} /></Card.Title>
            <Card.Subtitle>Alias: {values.alias}</Card.Subtitle>
            <Card.Text>
              Rank: {values.rank}<br />
              Languages: {values.languages}<br />
              Faction: {values.faction}<br />
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Header><h4>Attributes<FontAwesomeIcon icon={faPenToSquare} className='edit-new-icon' onClick={() => handleEdit(2)} /></h4></Card.Header>
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
              <ListGroup.Item><h4><FontAwesomeIcon icon={faPenToSquare} className='edit-new-icon' onClick={() => handleEdit(3)} /></h4>Pace: {values.pace} </ListGroup.Item>
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
            <Card.Header><h4>Hinderances<FontAwesomeIcon icon={faPenToSquare} className='edit-new-icon' onClick={() => handleEdit(4)} /></h4></Card.Header>
            <ListGroup variant="flush">
              {values.hinderances.map((h) =>(
                <ListGroup.Item key={h.name}><InfoPopup name={h.name} description={h.description} /></ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Header><h4>Skills<FontAwesomeIcon icon={faPenToSquare} className='edit-new-icon' onClick={() => handleEdit(6)} /></h4></Card.Header>
            <ListGroup>
              {values.skills.map((s)=>(
                <ListGroup.Item key={s.name}><ScoreArray diceLevel={s.rank} /> {s.name}</ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header><h4>Gear<FontAwesomeIcon icon={faPenToSquare} className='edit-new-icon' onClick={() => handleEdit(10)} /></h4></Card.Header>
            <ListGroup variant='flush'>
              {values.gear.map((g) =>(
                <ListGroup.Item key={g}>{g}</ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header><h4>Edges<FontAwesomeIcon icon={faPenToSquare} className='edit-new-icon' onClick={() => handleEdit(5)} /></h4></Card.Header>
            <ListGroup variant='flush'>
              {values.edges.map((e) =>(
                <ListGroup.Item key={e.name}><InfoPopup name={e.name} description={e.description} /></ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Header><h4>Rippertech<FontAwesomeIcon icon={faPenToSquare} className='edit-new-icon' onClick={() => handleEdit(7)} /></h4></Card.Header>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Benefit</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {values.rippertech.map((rt) =>(
                    <tr key={rt.name}>
                        <td>{rt.name}</td>
                        <td><InfoPopup name={rt.name} description={rt.benefit} /></td>
                    </tr>
                ))}
                </tbody>
            </table>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header><h4>Powers<FontAwesomeIcon icon={faPenToSquare} className='edit-new-icon' onClick={() => handleEdit(8)} /></h4></Card.Header>
            <table className='table'>
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>PP</th>
                      <th>Range</th>
                      <th>Dur</th>
                      <th>Effect</th>
                      <th></th>
                  </tr>
              </thead>
              <tbody>
                  {values.powers.map((p) =>(
                      <tr key={p.name}>
                          <td>{p.name}</td>
                          <td>{p.pp}</td>
                          <td>{p.range}</td>
                          <td>{p.dur}</td>
                          <td><ShowPowers name={p.name} pp={p.pp} range={p.range} dur={p.dur} effect={p.effect} /></td>
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
