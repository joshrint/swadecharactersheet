/**
 * Add Hinderances
 */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faTrashCan  } from '@fortawesome/free-solid-svg-icons';
import { Card, Button, CardContent, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

import AddHinderance from '../add/AddHinderance';

export default function StepFour({prevStep, handleChange, handleComplete, values, bonusScore, setBonusScore}) {
  
  const handleAddHinderance = (e) =>{
    let tempHinderances = [];
    if(values.hinderances){
      tempHinderances = values.hinderances;
    } 
    tempHinderances.push(e);
    if(e.severity === 'minor'){
      setBonusScore(bonusScore + 1);
    } else if (e.severity==='major'){
      setBonusScore(bonusScore + 2)
    }

    handleChange({"name":"hinderances", "value":tempHinderances});
  }
  const handleRemoveHinderance = (e) =>{
    let tempHinderances = values.hinderances;
    for(let i = 0; i < tempHinderances.length; i++){
        if(tempHinderances[i].name === e){
          if(tempHinderances[i].severity === 'minor'){
            setBonusScore(bonusScore - 1);
          } else if (tempHinderances[i].severity==='major'){
            setBonusScore(bonusScore - 2)
          }  
          tempHinderances.splice(i, 1);
        }
    }
    
    handleChange({"name":"hinderances", "value": tempHinderances});
  }
  
  const validateSubmit = () => {
    handleComplete()
  }
  return (
    <>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            Hinderances <AddHinderance handleAddHinderance={handleAddHinderance} />
          </Typography>
          <Typography>
          </Typography>
          {values.hinderances && values.hinderances.length ? (
            <>
            {values.hinderances.map((h) =>(
              <Accordion key={h.name}>
                <AccordionSummary
                    expandIcon={<FontAwesomeIcon icon={faCaretDown} />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'>
                        <Typography><FontAwesomeIcon onClick={() =>handleRemoveHinderance(h.name)} icon={faTrashCan} style={{float:"left", marginRight:'10px'}} /> <b>{h.name}</b> </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography align='left'>
                          Severity: {h.severity}
                        </Typography>
                        <Typography align='left' sx={{marginTop:"10px"}}>
                          {h.description}
                        </Typography>
                  </AccordionDetails>
                </Accordion>
            ))}
            </>
          ): <div>None</div>}

          <Typography sx={{marginTop:"20px"}}>
            <Button onClick={prevStep} >Back</Button><Button onClick={validateSubmit} sx={{mr: 1}}>Next</Button>
          </Typography>

        </CardContent>
      </Card>
    </>
  )
}
