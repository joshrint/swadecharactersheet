import React from 'react';
import AddPower from '../add/AddPower';
import EditPower from '../edit/EditPower';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

export default function CharSheetPowers({powers, handleChange, updateHandler}) {
    const handleAddPower =(e) =>{
        if(e.name.length > 0){
            let tempPowers = powers;
            tempPowers.push(e);
            handleChange({"name":"powers", "value":tempPowers})
            updateHandler({"powers":tempPowers});
        }
    }
    const handlePowersChange = (e) =>{
        let tempPowers = powers;
        tempPowers.forEach(p =>{
            if(p.name === e.name){
                p.pp = e.pp;
                p.range = e.range;
                p.dur = e.dur;
                p.effect = e.effect;
            }
        });
        handleChange({"name":"powers", "value":tempPowers})
        updateHandler({"powers":tempPowers});
    }
    const handleRemovePower = (e) =>{
        let tempPowers = powers;
        for(let i = 0; i < tempPowers.length; i++){
            if(tempPowers[i].name === e){
                tempPowers.splice(i, 1);
            }
        }
        handleChange({"name":"powers", "value":tempPowers})
        updateHandler({"powers":tempPowers});
    }
  return (
    <>
    <Card>
        <Card.Header><h3>Powers<AddPower handleAddPower={handleAddPower} /></h3></Card.Header>
                {powers.map((p) =>(
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<FontAwesomeIcon icon={faCaretDown} />}
                        aria-controls='panel1a-content'
                        id="panel1a-header">
                            <h5>{p.name}</h5>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography align='left'>
                                <b>PP: </b>{p.pp}
                            </Typography>
                            <Typography align='left'>
                                <b>Range: </b>{p.range}
                            </Typography>
                            <Typography align='left'>
                                <b>Dur: </b>{p.dur}
                            </Typography>
                            <Typography align='left'>
                                <b>Effect: </b>{p.effect}
                                <EditPower name={p.name} pp={p.pp} range={p.range} dur={p.dur} effect={p.effect} handlePowersChange={handlePowersChange} handleRemovePower={handleRemovePower} />
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    
                ))}
        <div className='position-absolute bottom-0 end-0'></div>
    </Card>
    </>
  )
}
