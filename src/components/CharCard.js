import React from 'react';
import {Link} from 'react-router-dom';

const CharCard = (props) =>{
    const character = props.character

    return (
        <div className='card'>
            <h2>
                <Link to={`/character/${character.name}`}>{character.name}</Link>
            </h2>
        </div>
    )
}
export default CharCard;