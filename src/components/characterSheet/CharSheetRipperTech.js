import React from 'react';
import AddRippertech from '../add/AddRippertech';
import EditRippertech from '../edit/EditRippertech';
import { Card } from 'react-bootstrap';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

export default function CharSheetRipperTech({rippertech, handleChange, updateHandler}) {
    
    const handleAddRippertech = (e) =>{
        if(e.name.length > 0){
            let tempRT = rippertech;
            tempRT.push(e);
            handleChange({"name":"rippertech", "value":tempRT})
            updateHandler({"rippertech":tempRT});
        }
    }
    const handleRipperTechChange = (e) =>{
        let tempRT = rippertech;
        tempRT.forEach(tech =>{
            if(tech.name === e.name){
                tech.benefit = e.benefit
            }
        });
        handleChange({"name":"rippertech", "value":tempRT})
        updateHandler({"rippertech":tempRT});
    }
    const handleRemoveRippertech = (e) =>{
        let tempRT = rippertech;
        for(let i = 0; i < tempRT.length; i++){
            if(tempRT[i].name === e){
                tempRT.splice(i, 1);
            }
        }
        handleChange({"name":"rippertech", "value":tempRT})
        updateHandler({"rippertech":tempRT});
    }
    return (
    <>
    <Card>
        <Card.Header>
            <h3>Rippertech<AddRippertech handleAddRippertech={handleAddRippertech} /></h3>
        </Card.Header>
            {rippertech.map((rt) =>(
                <Accordion key={rt.name}>
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
                        <Typography>
                            <EditRippertech name={rt.name} benefit={rt.benefit} handleRipperTechChange={handleRipperTechChange} handleRemoveRippertech={handleRemoveRippertech} />
                            <br />
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                
            ))}
    </Card>
    </>
  )
}
