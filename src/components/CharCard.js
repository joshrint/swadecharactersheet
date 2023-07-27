import React from 'react';
import {Link} from 'react-router-dom';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';

const CharCard = (props) =>{
    const character = props.character

    return (
        <Card>
            <CardActionArea component={Link} to={`/character/${character.name}`}>
                <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                        {character.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            
        </Card>
    )
}
export default CharCard;