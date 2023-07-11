import React, { useState } from 'react';
import {Row, Card, Button} from 'react-bootstrap';
import {Auth} from 'aws-amplify';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import '../../stylesheets/Nav.css';

export default function TopNav({characters, username}) {
    const [show, setShow] = useState(false);
    async function signOut(){
        try {
            await Auth.signOut();
        } catch (error){
            console.log('error signing out:', error)
        }
    }

    const showCharacters = () =>{
        if (show) {
            setShow(false);
        } else {
            setShow(true);
        }
    }
    
    const charList = 
        characters.length === 0 ? 'No characters on record' : characters.map((character, c) => 
            character.player === username ? 
                <span key={character.name}>
                    <a href={`/character/${character.name}`} >{character.name}</a>
                </span>
            : <div key={c}></div>
        )

  return (
    <>
        <Card>
            <Card.Title>{username}</Card.Title>
            <Row>
                <Link to="/"><Button variant="primary" onClick={signOut}>Logout</Button></Link>
            </Row>
            <Row>
                <a href='/'>Home</a>
                <a href='/create-character'>New Character</a>
            </Row>
            <Row>
                <div onClick={showCharacters}>My Characters {show ? <FontAwesomeIcon icon={faCaretUp} /> :<FontAwesomeIcon icon={faCaretDown} />}</div>
                {show ? charList : <></>}
            </Row>
        </Card>
 
    </>
  )
}
