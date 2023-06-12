import React from 'react'
import AddSkill from '../add/AddSkill';
import EditSkills from '../edit/EditSkills';
import ScoreArray from './tools/ScoreArray';

export default function CharSheetSkills({skills, handleChange, updateHandler}) {
    const handleAddSkill = (e) =>{
        if(e.name.length > 0){
            let tempSkills = skills;
            tempSkills.push(e)
            handleChange({"name":"skills", "value":tempSkills});
            updateHandler({"skills": tempSkills});
        }
    }
    const handleSkillChange = (e) =>{
        let tempSkills = skills;
        tempSkills.forEach(skill =>{
            if(skill.name === e.name){
                skill.rank = e.rank
            }
        });
        handleChange({"name":"skills", "value":tempSkills});
        console.log(tempSkills);
        updateHandler({"skills": tempSkills});
        
    }

    const handleRemoveSkill = (e) =>{
        let tempSkills = skills;
        for(let i = 0; i < tempSkills.length; i++){
            if(tempSkills[i].name === e){
                tempSkills.splice(i, 1);
            }
        }
        handleChange({"name":"skills", "value":tempSkills});
        updateHandler({"skills": tempSkills});
    }
    return (
    <>
        <div className='card'>
                        <h3 className='card-header'>Skills <AddSkill handleAddSkill={handleAddSkill} /></h3>
                            <ul className='list-group list-group-flush'>
                                {skills.map((s) =>(
                                    <li key={s.name} className='list-group-item'><ScoreArray diceLevel={s.rank} /> {s.name} <EditSkills name={s.name} rank={s.rank} handleSkillChange={handleSkillChange} handleRemoveSkill={handleRemoveSkill} /></li>
                                ))}
                                
                            </ul>
                            
                    </div> 
    </>
  )
}
