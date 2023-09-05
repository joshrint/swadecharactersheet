import '../stylesheets/CharacterSheet.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CharSheetHeader from './characterSheet/CharSheetHeader';
import CharSheetAttributes from './characterSheet/CharSheetAttributes';
import CharSheetStatus from './characterSheet/CharSheetStatus';
import CharSheetDerivedStats from './characterSheet/CharSheetDerivedStats';
import CharSheetHinderances from './characterSheet/CharSheetHinderances';
import CharSheetSkills from './characterSheet/CharSheetSkills';
import CharSheetGear from './characterSheet/CharSheetGear';
import CharSheetEdges from './characterSheet/CharSheetEdges';
import CharSheetRipperTech from './characterSheet/CharSheetRipperTech';
import CharSheetPowers from './characterSheet/CharSheetPowers';
import CharSheetWeapons from './characterSheet/CharSheetWeapons';
import { CircularProgress } from '@mui/material';

export default function CharacterSheet() {

    const [character, setCharacter] = useState([]);
    
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`https://swade-api.azurewebsites.net/api/characters/${id}`)
            .then((res) =>{
                setCharacter(res.data)
            })
            .catch((err) => {
                console.log('Error from Character Sheet ', err)
            })
    },[id]);
    //Handle all the updates to state
    const handleChange = (e) =>{
        let value = e.value;
        let name = e.name;

        setCharacter((prevalue) =>{
            return {
                ...prevalue, [name]: value
            }
        })
    }
    //Send the updated character info to the DB
    const updateHandler = async (e) =>{
        try {
            axios.put(`https://swade-api.azurewebsites.net/api/character/update/`+character.name, e)
            .then((res)=>{
                console.log(res.status)
            })
            .catch((err)=>{
                console.log('Error updating data ', err)
            });
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <>
    {character.name ? (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <CharSheetHeader name={character.name} alias={character.alias} rank={character.rank} languages={character.languages} faction={character.faction} rippertech={character.rippertech.length} powers={character.powers.length} updateHandler={updateHandler} handleChange={handleChange} />
                    
                </div>
            </div>
            <div className='row'>
                <div className='col-md'>
                    <CharSheetStatus wounds={character.wounds} fatigue={character.fatigue} shaken={character.shaken} handleChange={handleChange} updateHandler={updateHandler} />
                </div>
            </div>
            <div className='row'>
                <div className='col-md'>
                    <CharSheetAttributes agility={character.agility}
                                        smarts={character.smarts}
                                        spirit={character.spirit}
                                        strength={character.strength}
                                        vigor={character.vigor}
                                        handleChange={handleChange}
                                        updateHandler={updateHandler} />
                </div>
                <div className='col-md-4'>
                    <CharSheetDerivedStats pace={character.pace} parry={character.parry} toughness={character.toughness} reason={character.reason} status={character.status} wealth={character.wealth} handleChange={handleChange} updateHandler={updateHandler} />
                </div>
                <div className='col-md'>
                    <CharSheetHinderances hinderances={character.hinderances} updateHandler={updateHandler} handleChange={handleChange} />
                </div>
            </div>
            <div className='row justify-content-md-center'>
                <div className='col-md'>
                    <CharSheetSkills skills={character.skills} handleChange={handleChange} updateHandler={updateHandler} />  
                </div>
                <div className='col-md'>
                    <CharSheetGear gear={character.gear} handleChange={handleChange} updateHandler={updateHandler} />
                </div>
                <div className='col-md'>
                    <CharSheetEdges edges={character.edges} handleChange={handleChange} updateHandler={updateHandler} />
                </div>
            </div>
            <div className='row justify-content-md-center'>
                {character.rippertech.length > 0 ? <div className='col-md'>
                    <CharSheetRipperTech rippertech={character.rippertech} handleChange={handleChange} updateHandler={updateHandler} />
                </div> : <></>}
                <div className='col-md'>
                    <CharSheetWeapons weapons={character.weapons} handleChange={handleChange} updateHandler={updateHandler} />
                </div>
                {character.powers.length > 0 ? <div className='col-md'>
                    <CharSheetPowers powers={character.powers} handleChange={handleChange} updateHandler={updateHandler} />
                </div> : <></>} 
            </div>
            <div className='row justify-content-md-center'>
                
            </div>
        </div>
        ) : <CircularProgress />}
    </>
  )
}
