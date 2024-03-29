import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CharCard from './CharCard';
import {Row, Col, Card} from "react-bootstrap";
import { CardActionArea, CircularProgress, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


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

    const removeCharacter = (id) =>{
        setCharacters(oldValues =>{
            return oldValues.filter(character => character._id !== id)
        });
    }

    const handleDelete = async (id) =>{
        try {
            axios.delete(`https://swade-api.azurewebsites.net/api/character/delete/${id}`)
            .then((res)=>{
                removeCharacter(id);
                console.log(res.status)
            })
            .catch((err)=>{
                console.log('Error deleting data', err)
            });
        } catch (error) {
            console.log(error)
        }
    }

    const charList = 
        characters.length === 0 ? <CircularProgress /> : characters.map((character, c) =>
            character.player === username ? 
                <Row  key={c}>
                    <Col>
                        <CharCard character={character} handleDelete={handleDelete} />
                    </Col>
                </Row>
            : <div key={c}>
            </div>
        )
  return (
    <>
        <div className='container'>
            {charList}
            <Row>
                    <Card>
                        <CardActionArea component={Link} to={'/create-character'}>
                            <Typography gutterBottom variant='h5' component='h2'>
                                Create New Character
                            </Typography>
                        </CardActionArea>
                    </Card>
                </Row>
        </div>
    </>
    
  )
}
