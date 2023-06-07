import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CharCard from './CharCard';

export default function CharacterList() {

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
        characters.length === 0 ? 'No characters on record' : characters.map((character, c) => <CharCard character={character} key={c} />)
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
                {charList}
            </div>
        </div>
    </div>
  )
}
