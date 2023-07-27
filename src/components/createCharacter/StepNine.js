import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Typography, Card, Button, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import AddWeapon from "../add/AddWeapon";

export default function StepNine({prevStep, handleChange, values, handleComplete}) {
  const handleAddWeapon = (e) =>{
    let tempWeapons = values.weapons;
    tempWeapons.push(e);
    handleChange({"name":"weapons", "value": tempWeapons});
  }

  const handleRemoveWeapon = (e) =>{
    let tempWeapons = values.weapons;
    for(let i=0; i < tempWeapons.length; i++){
      if(tempWeapons[i].name === e){
        tempWeapons.splice(i,1);
      }
    }
    handleChange({"name":"weapons", "value": tempWeapons});
  }

  const validateSubmit = () => {
    handleComplete()
  }
  return (
    <>
      <Card>
        <CardContent>
          <Typography gutterBottom variant='h5' component='h3'>
            Weapons <AddWeapon handleAddWeapon={handleAddWeapon} />
          </Typography>
          {values.weapons && values.weapons.length > 0 ?(
            <>
            {values.weapons.map((w) =>(
              <Accordion key={w.name}>
                <AccordionSummary
                  expandIcon={<FontAwesomeIcon icon={faCaretDown} />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'>
                    <FontAwesomeIcon onClick={() =>handleRemoveWeapon(w.name)} icon={faTrashCan} style={{float:"left", marginRight:'15px'}} />
                    {w.name}
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography align='left'>
                      Range: {w.range}
                    </Typography>
                    <Typography align='left'>
                      Damage: {w.damage}
                    </Typography>
                    <Typography align='left'>
                      AP: {w.ap}
                    </Typography>
                    <Typography align='left'>
                      ROF: {w.rof}
                    </Typography>
                    <Typography align='left'>
                      WT: {w.wt}
                    </Typography>
                    <Typography align='left'>
                      Notes: {w.notes}
                    </Typography>
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
