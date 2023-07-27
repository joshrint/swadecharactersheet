import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Card, CardContent, Button, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import AddPower from "../add/AddPower";

export default function StepEight({nextStep, prevStep, handleChange, values, handleComplete}) {
  const handleAddPower = (e) =>{
    let tempPower = values.powers;
    tempPower.push(e);
    handleChange({"name":"powers", "value": tempPower});
  }
  const handleRemovePower = (e) =>{
    let tempPower = values.powers;
    for(let i=0; i< tempPower.length; i++){
      if(tempPower[i].name === e){
        tempPower.splice(i,1);
      }
    }
    handleChange({"name":"powers", "value": tempPower});
  }
  
  const validateSubmit = () => {
    handleComplete()
  }
  return (
    <>
      <Card>
        <CardContent>
          <Typography gutterBottom variant='h5' component='h3'>
            Powers <AddPower handleAddPower={handleAddPower} />
          </Typography>
          {values.powers && values.powers.length > 0 ? (
            <>
            {values.powers.map((p) =>(
              <Accordion key={p.name}>
                <AccordionSummary
                  expandIcon={<FontAwesomeIcon icon={faCaretDown} />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'>
                    <Typography>
                    <FontAwesomeIcon onClick={() =>handleRemovePower(p.name)} icon={faTrashCan} style={{float:"left", marginRight:'15px'}} />
                    {p.name}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography align='left'>PP: {p.pp}</Typography>
                    <Typography align='left'>Range: {p.range}</Typography>
                    <Typography align='left'>Dur: {p.dur}</Typography>
                    <Typography align='left'>Effect: {p.effect}</Typography>
                    <Typography align='left'></Typography>
                </AccordionDetails>
              </Accordion>
            ))}
            </>
          ):<div>None</div>}
          <Typography sx={{marginTop:"20px"}}>
            <Button onClick={prevStep} >Back</Button><Button onClick={validateSubmit} sx={{mr: 1}}>Next</Button>
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}
