/*
Set the derived stats
Pace, Parry, toughness, Reason, status, and wealth
*/
import { CardContent, Typography, Button, Card, Grid, FormControl, Input, Alert, InputAdornment } from '@mui/material';
import {React, useState, useEffect} from 'react'

export default function StepThree({nextStep, prevStep, handleChange, handleComplete, values}) {
  
  const [showError, setShowError] = useState(false)
  const [validForm, setValidForm] = useState({
    'pace':false,
    'parry':false,
    'toughness':false,
    'reason':false,
    'status':false
  });

  useEffect(() =>{
    if(values.pace > 0){
      setValidForm((prevalue) =>{
        return{
          ...prevalue, "pace":true
        }
      })
    } else {
      setValidForm((prevalue) =>{
        return{
          ...prevalue, "pace":false
        }
      })
    }
    
    if(values.parry > 0){
      setValidForm((prevalue) =>{
        return{
          ...prevalue, "parry":true
        }
      })
    } else {
      setValidForm((prevalue) =>{
        return{
          ...prevalue, "parry":false
        }
      })
    }

    if(values.toughness > 0){
      setValidForm((prevalue) =>{
        return{
          ...prevalue, "toughness":true
        }
      })
    } else {
      setValidForm((prevalue) =>{
        return{
          ...prevalue, "toughness":false
        }
      })
    }

    if(values.reason > 0){
      setValidForm((prevalue) =>{
        return{
          ...prevalue, "reason":true
        }
      })
    } else {
      setValidForm((prevalue) =>{
        return{
          ...prevalue, "reason":false
        }
      })
    }

    if(values.status > 0){
      setValidForm((prevalue) =>{
        return{
          ...prevalue, "status":true
        }
      })
    } else {
      setValidForm((prevalue) =>{
        return{
          ...prevalue, "status":false
        }
      })
    }
  },[values.pace, values.parry, values.toughness, values.reason, values.status]);

  const validateSubmit = () =>{
    if(validForm.pace && validForm.parry && validForm.toughness && validForm.reason && validForm.status) {
      handleComplete()
    } else {
      setShowError(true)
    }
  }

  return (
    <>
    <Card>
      <CardContent>
        {!validForm.pace && showError? (<Typography><Alert severity='error'>Invalid Pace Score</Alert></Typography>) : <></>}
        {!validForm.parry && showError? (<Typography><Alert severity='error'>Invalid Parry Score</Alert></Typography>) : <></>}
        {!validForm.toughness && showError? (<Typography><Alert severity='error'>Invalid Toughness Score</Alert></Typography>) : <></>}
        {!validForm.reason && showError? (<Typography><Alert severity='error'>Invalid Reason Score</Alert></Typography>) : <></>}
        {!validForm.status && showError? (<Typography><Alert severity='error'>Invalid Status Score</Alert></Typography>) : <></>}
        
        <Typography gutterBottom variant='h5' component="h3">
          Stats
        </Typography>

        <Grid container sx={{marginTop:'20px'}}>
          <Grid item xs={2} sx={{textAlign:'right', paddingRight:'15px'}}>
            Pace:
          </Grid>
          <Grid item xs={9}>
            <FormControl fullWidth>
                <Input
                  id="filled-adornment-amount"
                  defaultValue={values.pace}
                  onChange={(e) => handleChange({"name":"pace", "value":e.target.value})}
                  variant="standard"
                />
            </FormControl>
          </Grid>
        </Grid>
        
        <Grid container sx={{marginTop:'20px'}}>
          <Grid item xs={2} sx={{textAlign:'right', paddingRight:'15px'}}>
            Parry:
          </Grid>
          <Grid item xs={9}>
            <FormControl fullWidth>
                <Input
                  id="filled-adornment-amount"
                  defaultValue={values.parry}
                  onChange={(e) => handleChange({"name":"parry", "value":e.target.value})}
                  variant="standard"
                />
            </FormControl>
          </Grid>
        </Grid>

        <Grid container sx={{marginTop:'20px'}}>
          <Grid item xs={2} sx={{textAlign:'right', paddingRight:'15px'}}>
            Toughness:
          </Grid>
          <Grid item xs={9}>
            <FormControl fullWidth>
                <Input
                  id="filled-adornment-amount"
                  defaultValue={values.toughness}
                  onChange={(e) => handleChange({"name":"toughness", "value":e.target.value})}
                  variant="standard"
                />
            </FormControl>
          </Grid>
        </Grid>

        <Grid container sx={{marginTop:'20px'}}>
          <Grid item xs={2} sx={{textAlign:'right', paddingRight:'15px'}}>
            Reason:
          </Grid>
          <Grid item xs={9}>
            <FormControl fullWidth>
                <Input
                  id="filled-adornment-amount"
                  defaultValue={values.reason}
                  onChange={(e) => handleChange({"name":"reason", "value":e.target.value})}
                  variant="standard"
                />
            </FormControl>
          </Grid>
        </Grid>

        <Grid container sx={{marginTop:'20px'}}>
          <Grid item xs={2} sx={{textAlign:'right', paddingRight:'15px'}}>
            Status:
          </Grid>
          <Grid item xs={9}>
            <FormControl fullWidth>
                <Input
                  id="filled-adornment-amount"
                  defaultValue={values.status}
                  onChange={(e) => handleChange({"name":"status", "value":e.target.value})}
                  variant="standard"
                />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container sx={{marginTop:'20px'}}>
          <Grid item xs={2} sx={{textAlign:'right', paddingRight:'15px'}}>
            Status:
          </Grid>
          <Grid item xs={9}>
        <FormControl fullWidth>
              <Input
                id="filled-adornment-amount"
                variant="standard"
                defaultValue={values.wealth}
                onChange={(e) => handleChange({"name":"wealth", "value":e.target.value})}
                startAdornment={<InputAdornment position="start">£</InputAdornment>}
              />
            </FormControl>
            </Grid>
          </Grid>

        <Typography sx={{marginTop:"20px"}}>
          <Button onClick={prevStep} >Back</Button><Button onClick={validateSubmit} sx={{mr: 1}}>Next</Button>
        </Typography>
      </CardContent>
    </Card>
    
    </>
  )
}
