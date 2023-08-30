import React from 'react';
import {Link} from 'react-router-dom';
import { Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material';
import DeleteCharacter from './tools/DeleteCharacter';

const CharCard = (props) =>{
    const character = props.character

    return (
        <Card>
            <Grid container>
                <Grid item xs={11}>
                <CardActionArea component={Link} to={`/character/${character.name}`}>
                <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                        {character.name}
                        
                    </Typography>
                </CardContent>
            </CardActionArea>
                </Grid>
                <Grid item xs={1}>
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='h2'>
                        <DeleteCharacter characterName={character.name} id={character._id} handleDelete={props.handleDelete}/>
                        </Typography>
                    </CardContent>
                    
                </Grid>
            </Grid>
            
            
        </Card>
    )
}
export default CharCard;