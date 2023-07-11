import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CharCard from './CharCard';
import {Row, Col} from "react-bootstrap";


export default function CharacterList({username}) {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios
            .get('https://swade-api.azurewebsites.net/api/GetAllCharacters')
            .then((res) => {
                setCharacters(res.data);
            })
            .catch((err) =>{
                console.log('Error from CharacterList');
            });
    }, []);

    const charList = 
        characters.length === 0 ? 'No characters on record' : characters.map((character, c) =>
            character.player === username ? 
                <Row  key={c}>
                    <Col>
                        <CharCard character={character} />
                    </Col>
                </Row>
            : <div key={c}></div>
        )
  return (
    <>
        <div className='container'>
            {charList}
        </div>
    </>
    
  )
}
