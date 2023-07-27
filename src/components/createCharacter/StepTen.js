/*
Add geat to created character
*/
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Grid, FormControl, Input, CardContent, Typography, Button, Card, InputLabel } from '@mui/material';

export default function StepTen({nextStep, prevStep, handleChange, values, handleComplete}) {
  const [gearItem, setGearItem] = useState({"name":"", "cost": 0});

  const handleAddGear = (e) =>{
    let tempGear = values.gear;
    tempGear.push(e);
    handleChange({"name":"wealth", "value":(values.wealth - e.cost)})
    handleChange({"name":"gear", "value":tempGear})
  }
  const handleRemoveGear = (e) =>{
    let tempGear = values.gear;
        for(let i = 0; i < tempGear.length; i++){
            if(tempGear[i].name === e){
              handleChange({"name":"wealth", "value":(parseFloat(values.wealth) + parseFloat(tempGear[i].cost))})  
              tempGear.splice(i, 1);
            }
        }
        
        handleChange({"name":"gear", "value":tempGear})
  }
  const validateSubmit = () => {
    handleComplete()
  }
  return (
    <>
      <Card>
        <CardContent>
          <Typography gutterBottom variant='h5' component='h3'>
            Gear
          </Typography>
          <Grid container sx={{marginTop:'20px'}}>
          <Grid item xs={2} sx={{textAlign:'right', paddingRight:'15px'}}>
            Wealth:
          </Grid>
          <Grid item xs={9} align='left'>
            £{values.wealth}
          </Grid>
        </Grid>
          <Grid container sx={{marginTop:'20px'}} justifyContent='center'>
            <Grid item xs={7}>
              <FormControl variant="standard" fullWidth>
              <InputLabel htmlFor="gear-name">
                Name
              </InputLabel>
              <Input
                id="gear-name"
                variant="standard"
                onChange={(e) => setGearItem((prevValue)=> {return {...prevValue, 'name':e.target.value}})}
                />
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl variant='standard' fullWidth>
                <InputLabel htmlFor="gear-cost">
                  Cost
                </InputLabel>
                <Input
                  id="gear-cost"
                  variant="standard" 
                  onChange={(e) => setGearItem((prevValue)=> {return {...prevValue, 'cost':e.target.value}})}
                  />
              </FormControl>
            </Grid>
            <Grid item xs={1}
            m={1}
            display="flex"
            justifyContent="center"
            alignItems="center">
              <Button onClick={()=>handleAddGear(gearItem)} >+</Button>
            </Grid>
          </Grid>
          {values.gear && values.gear.length > 0 ? (
            <>
              {values.gear.map((g) =>(
                <Grid container sx={{marginTop:"20px"}} justifyContent={'center'} key={g.name} >
                  <Grid item xs={4}>
                    £{g.cost} {g.name} 
                  </Grid>
                  <Grid item xs={2}>
                    <FontAwesomeIcon onClick={() =>handleRemoveGear(g.name)} icon={faTrashCan} />
                  </Grid>
                </Grid>
                
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
