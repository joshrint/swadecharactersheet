/**
 * Add Skills 
 * Default Skills: Althletics, common Knowledge, persuasion, stealth, and Notice already set to a d6
 */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Card, CardContent, Button, Typography, Grid } from '@mui/material';
import AddSkill from '../add/AddSkill';
import SelectDieType from '../tools/SelectDieType';

export default function StepSix({nextStep, prevStep, handleChange, handleComplete, bonusScore, setBonusScore, values}) {
  
  const [skillScore, setSkillScore] = useState(12+ bonusScore);

  const handleSelect = (diceLevel, attribute) =>{
    
    let tempSkills = values.skills;
    let tempScore = skillScore;
    tempSkills.forEach(skill => {
      if(skill.name === attribute){
        if(diceLevel > skill.rank){
          
          for(let i=skill.rank; i < diceLevel; i++){
            if(tempScore > 0){
              if(i < getAttribute(skill.gov)){
                tempScore =(tempScore-1);
              } else{
                tempScore =(tempScore-2);
              }
              setSkillScore(tempScore);
              skill.rank=i+1
            }
            
            
          }
        } else if(diceLevel < skill.rank) {
          for(let i=skill.rank; i > diceLevel; i--){
            if(i <= getAttribute(skill.gov)){
              tempScore =(tempScore+1);
            } else{
              tempScore =(tempScore+2);
            }
            setSkillScore(tempScore);
            skill.rank=diceLevel
          }
          
        }
        
        /*if((skillScore-(diceLevel-skill.rank)) < 0){
          skill.rank=(skill.rank+skillScore)
          setSkillScore(0);
        } else{
          setSkillScore(skillScore-(diceLevel-skill.rank));
          skill.rank=diceLevel
        }*/
      }
    });
    handleChange({"name":"skills", "value":tempSkills});
  }

  const handleAddSkill = (e) =>{
    let tempSkills = values.skills;
    tempSkills.push(e);
    setSkillScore(skillScore-e.rank);
    handleChange({"name":"skills", "value":tempSkills})
  }

  const handleRemoveSkill = (e) =>{
    let tempSkills = values.skills;
    for(let i = 0; i < tempSkills.length; i++){
        if(tempSkills[i].name === e) {
          setSkillScore(skillScore+tempSkills[i].rank+(tempSkills[i].rank - getAttribute(tempSkills[i].gov)));
          tempSkills.splice(i, 1);
        }
    }
    handleChange({"name":"skills", "value": tempSkills});
  }

  const validateSubmit = () => {
    handleComplete()
  }

  const getAttribute = (gov) =>{
    if(gov === 'Ag'){
      return values.agility
    } else if (gov ==='Sm'){
      return values.smarts
    } else if (gov === 'Sp'){
      return values.spirit
    } else if (gov === 'St'){
      return values.strength
    } else if(gov === 'Vi'){
      return values.vigor
    }
  }
  return (
    <>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            Skills <AddSkill handleAddSkill={handleAddSkill} />
          </Typography>
          <Typography variant='h6' component="h4" align='left'>
            Points Left: {skillScore}
          </Typography>
          {values.skills && values.skills.length > 0 ?(
            <>
            {values.skills.map((s)=>(
              <Grid key={s.name} container sx={{marginTop:'20px'}}>
                <Grid item xs={4} sx={{texAligh:'right', paddingRight:'15px'}} align='right'>
                  {s.name} ({s.gov}):
                </Grid>
                <Grid item xs={4}>
                  <SelectDieType diceLevel={s.rank} attribute={s.name} handleSelect={handleSelect} />
                </Grid>
                <Grid item>
                {
                  s.name !== "Athletics" &&
                  s.name !== "Common Knowledge" &&
                  s.name !== "Persuasion" &&
                  s.name !== "Stealth" &&
                  s.name !== "Notice"
                  ? (<FontAwesomeIcon onClick={() =>handleRemoveSkill(s.name)} icon={faTrashCan} style={{float:"right"}} />) : <></>
                }
                </Grid>
              </Grid>
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
