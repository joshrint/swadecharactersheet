/*
Character Name, Alias, rank, faction, and languages.
Character Sheet Header
*/
import {React, useState, useEffect} from 'react'
import {Card, CardContent, Typography, Button, MenuItem, FormControl, Select, Grid, TextField, Alert} from '@mui/material';

export default function StepOne({ handleChange, values, prevStep, handleComplete}) {
  const [showError, setShowError] = useState(false)
  const [validForm, setValueForm] = useState({
    'name':false,
    'alias':false,
    'languages':false,
    'faction':false
  })

  useEffect(() => {
    if(values.name.length > 0){
      setValueForm((prevalue) =>{
        return{
          ...prevalue, "name":true
        }
      })
    } else{
      setValueForm((prevalue) =>{
        return{
          ...prevalue, "name":false
        }
      });
    }
    if(values.alias.length > 0){
      setValueForm((prevalue) =>{
        return{
          ...prevalue, "alias":true
        }
      })
    } else{
      setValueForm((prevalue) =>{
        return{
          ...prevalue, "alias":false
        }
      });
    }
    if(values.languages.length > 0){
      setValueForm((prevalue) =>{
        return{
          ...prevalue, "languages":true
        }
      })
    } else{
      setValueForm((prevalue) =>{
        return{
          ...prevalue, "languages":false
        }
      });
    }
    if(values.faction.length > 0){
      setValueForm((prevalue) =>{
        return{
          ...prevalue, "faction":true
        }
      })
    } else{
      setValueForm((prevalue) =>{
        return{
          ...prevalue, "faction":false
        }
      });
    }
  },[values.alias.length, values.faction.length, values.languages.length, values.name.length]);

  const validateSubmit = () => {
    if (validForm.name && validForm.alias && validForm.languages && validForm.faction) {
      handleComplete()
    } else {
      setShowError(true)
    }
  }

  return (
    <>
    <Card>
      <CardContent>
        {!validForm.name && showError ? (<Typography><Alert severity='error'>Invalid Name</Alert></Typography>) : <></>}
        {!validForm.alias && showError ? (<Typography><Alert severity='error'>Invalid Alias</Alert></Typography>) : <></>}
        {!validForm.languages && showError ? (<Typography><Alert severity='error'>Invalid Languages</Alert></Typography>) : <></>}
        {!validForm.faction && showError ? (<Typography><Alert severity='error'>Invalid Faction</Alert></Typography>) : <></>}
        <Typography gutterBottom variant="h5" component="h3">
          Create a New Character
        </Typography>
        
        
        <Grid container sx={{marginTop:'20px'}}>
          <Grid item xs={2} sx={{textAlign: 'right', paddingRight:'15px'}}>
              Name:
          </Grid>
          <Grid item xs={9}>
            <FormControl sx={{width: '100%'}}>
              <TextField
                  required
                  id="name"
                  name="name"
                  variant="standard"
                  
                  placeholder='Character Name'
                  defaultValue={values.name}
                  onChange={(e) => handleChange({"name":"name", "value":e.target.value})} />
            </FormControl>
          </Grid>
        </Grid>

        <Grid container sx={{marginTop:'20px'}}>
            <Grid item xs={2} sx={{textAlign: 'right', paddingRight:'15px'}}>
              Alias:
            </Grid>
            <Grid item xs={9}>
            <FormControl sx={{width: '100%'}}>
              <TextField
                  required
                  id="alias"
                  name="alias"
                  variant="standard"
                  placeholder='Character Alias'
                  defaultValue={values.alias}
                  onChange={(e) => handleChange({"name":"alias", "value":e.target.value})} />
            </FormControl>
            </Grid>
          </Grid>
          
        <Grid container sx={{marginTop:'20px'}}>
          <Grid item xs={2} sx={{textAlign: 'right', paddingRight:'15px'}}>
            Languages:
          </Grid>
          <Grid item xs={9}>
          <FormControl sx={{width: '100%'}}>
            <TextField
                required
                id="languages"
                name="languages"
                variant="standard"
                placeholder='English...'
                defaultValue={values.languages}
                onChange={(e) => handleChange({"name":"languages", "value":e.target.value})} />
          </FormControl>
          </Grid>
        </Grid>
            
        <Grid container sx={{marginTop:'20px'}}>
          <Grid item xs={2} sx={{textAlign: 'right', paddingRight:'15px'}}>
            Rank:
          </Grid>
          <Grid item xs={9}>
            <FormControl sx={{width: '100%'}}>
              <Select
                labelId="rank"
                id="rank"
                value={values.rank}
                variant="standard"
                onChange={(e) => handleChange({"name":"faction", "value": e.target.value})}>
                  <MenuItem value="novice">Novice</MenuItem>
                  <MenuItem value="seasoned">Seasoned</MenuItem>
                  <MenuItem value="veteran">Veteran</MenuItem>
                  <MenuItem value="heroic">Heroic</MenuItem>
                  <MenuItem value="legendary">Legendary</MenuItem>
                </Select>
              </FormControl>
          </Grid>
        </Grid>
        
        <Grid container sx={{marginTop:'20px'}}>
          <Grid item xs={2} sx={{textAlign: 'right', paddingRight:'15px'}}>
            Faction:
          </Grid>
          <Grid item xs={9}>
            <FormControl sx={{width: '100%'}}>
              <TextField
                required
                id="faction"
                name="faction"
                variant="standard"
                defaultValue={values.faction}
                placeholder='Ripper Faction'
                onChange={(e) => handleChange({"name":"faction", "value":e.target.value})} />
            </FormControl>
          </Grid>
        </Grid>
        
        <Typography sx={{marginTop:"20px"}}>
          <Button disabled onClick={prevStep} >Back</Button><Button onClick={validateSubmit} sx={{mr: 1}}>Next</Button>
        </Typography>
      </CardContent>
      
    </Card>
    </>
  )
}
