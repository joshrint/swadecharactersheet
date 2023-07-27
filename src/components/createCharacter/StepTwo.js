/*
Set Character Attributes
*/
import React from 'react'
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import SelectDieType from '../tools/SelectDieType';

export default function StepTwo({ nextStep, prevStep, handleComplete, handleChange, values, attributeScore, handleAttributeChange}) {
  
  const handleSelect = (diceLevel, attribute) =>{
    // Create temp dice level to ensure we don't go over the max score
    let tempDice = diceLevel
    if(values[attribute] < tempDice){
      let newAttribute = attributeScore - (tempDice-1)
      if (newAttribute < 0){
        tempDice = values[attribute] + attributeScore;
        newAttribute=0
      }
      handleAttributeChange(newAttribute)
    } else if (values[attribute] > tempDice){
      let newAttribute = attributeScore + (values[attribute]-(tempDice));
      handleAttributeChange(newAttribute)
    }
    handleChange({"name":attribute, "value":tempDice});
    
  }

  return (
    <>
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3">
            Attributes
          </Typography>
          <Typography>
            Points Left: {attributeScore}
          </Typography>
          <Grid container sx={{marginTop:'20px'}}>
            <Grid item xs={2} sx={{textAlign: 'right', paddingRight:'15px'}}>
              Agility:
            </Grid>
            <Grid item xs={3}>
              <SelectDieType diceLevel={values.agility} attribute={'agility'} handleSelect={handleSelect} />
            </Grid>
          </Grid>
          <Grid container sx={{marginTop:'20px'}}>
            <Grid item xs={2} sx={{textAlign: 'right', paddingRight:'15px'}}>
              Smarts:
            </Grid>
            <Grid item xs={3}>
              <SelectDieType diceLevel={values.smarts} attribute={'smarts'} handleSelect={handleSelect} />
            </Grid>
          </Grid>
          <Grid container sx={{marginTop:'20px'}}>
            <Grid item xs={2} sx={{textAlign: 'right', paddingRight:'15px'}}>
              Spirit:
            </Grid>
            <Grid item xs={3}>
              <SelectDieType diceLevel={values.spirit} attribute={'spirit'} handleSelect={handleSelect} />
            </Grid>
          </Grid>
          <Grid container sx={{marginTop:'20px'}}>
            <Grid item xs={2} sx={{textAlign: 'right', paddingRight:'15px'}}>
              Strength:
            </Grid>
            <Grid item xs={3}>
              <SelectDieType diceLevel={values.strength} attribute={'strength'} handleSelect={handleSelect} />
            </Grid>
          </Grid>
          <Grid container sx={{marginTop:'20px'}}>
            <Grid item xs={2} sx={{textAlign: 'right', paddingRight:'15px'}}>
              Vigor:
            </Grid>
            <Grid item xs={3}>
              <SelectDieType diceLevel={values.vigor} attribute={'vigor'} handleSelect={handleSelect} />
            </Grid>
          </Grid>

          <Typography sx={{marginTop:"20px"}}>
            <Button onClick={prevStep} >Back</Button>{attributeScore === 0 ? <Button onClick={handleComplete} sx={{mr: 1}}>Next</Button> : <Button disabled onClick={handleComplete} sx={{mr: 1}}>Next</Button> }
        </Typography>
      </CardContent>
    </Card>
    
    </>
  )
}
