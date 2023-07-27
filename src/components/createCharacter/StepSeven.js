/**
 * Add Rippertech
 */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Accordion, AccordionSummary, Card, CardContent, Typography, Button, AccordionDetails } from '@mui/material';
import AddRippertech from '../add/AddRippertech'

export default function StepSeven({nextStep, prevStep, handleChange, values, handleComplete}) {
  const handleAddRippertech = (e) =>{
    let tempRT = values.rippertech;
    tempRT.push(e);
    handleChange({"name":"rippertech", "value":tempRT})
  }

  const handleRemoveRippertech = (e) =>{
    let tempRT = values.rippertech
    for(let i = 0; i < tempRT.length; i++){
        if(tempRT[i].name === e) {
          tempRT.splice(i, 1);
        }
    }
    handleChange({"name":"rippertech", "value": tempRT});
  }

  const validateSubmit = () => {
    handleComplete()
  }
  return (
    <>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            Rippertech <AddRippertech  handleAddRippertech={handleAddRippertech}/>
          </Typography>
          {values.rippertech && values.rippertech.length > 0 ? (
            <>
              {values.rippertech.map((r) => (
                <Accordion key={r.name}>
                  <AccordionSummary
                    expandIcon={<FontAwesomeIcon icon={faCaretDown} />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'>
                      <Typography>
                        <FontAwesomeIcon onClick={() =>handleRemoveRippertech(r.name)} icon={faTrashCan} style={{float:"left", marginRight:'15px'}} />
                        {r.name}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography align='left'>
                          {r.benefit}
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
