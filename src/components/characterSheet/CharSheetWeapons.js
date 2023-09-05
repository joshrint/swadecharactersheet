import React from 'react';
import AddWeapon from '../add/AddWeapon';
import EditWeapon from '../edit/EditWeapon';
import { Card } from 'react-bootstrap';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

export default function CharSheetWeapons({weapons, handleChange, updateHandler}) {
    const handleAddWeapon = (e) =>{
        if(e.name.length > 0){
            let tempWeapons = weapons;
            tempWeapons.push(e);
            handleChange({"name":"weapons", "value":tempWeapons})
            updateHandler({"weapons":tempWeapons});
        }
    }
    const handleWeaponsChange =(e)=>{
        let tempWeapons = weapons;
        tempWeapons.forEach(w =>{
            if(w.name === e.name){
                w.range = e.range;
                w.damage = e.damage;
                w.ap = e.ap;
                w.rof = e.rof;
                w.wt = e.wt;
                w.notes = e.notes;
            }
        });
        handleChange({"name":"weapons", "value":tempWeapons})
        updateHandler({"weapons":tempWeapons});
    }
    const handleRemoveWeapon = (e) =>{
        let tempWeapons = weapons;
        for(let i = 0; i < tempWeapons.length; i++){
            if(tempWeapons[i].name === e){
                tempWeapons.splice(i, 1);
            }
        }
        handleChange({"name":"weapons", "value":tempWeapons})
        updateHandler({"weapons":tempWeapons});
    }
  return (
    <>
        <Card>
            <Card.Header><h3>Weapons<AddWeapon handleAddWeapon={handleAddWeapon} /></h3></Card.Header>
            {weapons.map((w) =>(
                <Accordion key={w.name}>
                    <AccordionSummary
                        expandIcon={<FontAwesomeIcon icon={faCaretDown} />}
                        aria-controls='panel1a-content'
                        id="panel1a-header">
                            <h5>{w.name}</h5>
                        </AccordionSummary>
                        <AccordionDetails>
                            {w.range.length > 0 ? <Typography align='left'>
                                <b>Range: </b>{w.range}
                            </Typography>
                            : <></>}
                            {w.damage.length > 0 ? <Typography align='left'>
                                <b>Damage: </b>{w.damage}
                            </Typography>
                            : <></>}
                            {w.ap.length > 0 ? <Typography align='left'>
                                <b>AP: </b>{w.ap}
                            </Typography>
                            : <></>}
                            {w.rof.length > 0 ? <Typography align='left'>
                                <b>ROF: </b>{w.rof}
                            </Typography>
                            : <></>}
                            {w.wt.length > 0 ? <Typography align='left'>
                                <b>WT: </b>{w.wt}
                            </Typography>
                            : <></>}
                            {w.notes.length > 0 ? <Typography align='left'>
                                <b>Notes: </b>{w.notes}
                            </Typography>
                            : <></>}
                            <Typography>
                                <EditWeapon name={w.name} range={w.range} damage={w.damage} ap={w.ap} rof={w.rof} wt={w.wt} notes={w.notes} handleWeaponsChange={handleWeaponsChange} handleRemoveWeapon={handleRemoveWeapon} />
                                < br />
                            </Typography>
                        </AccordionDetails>
                </Accordion>
            ))}
        </Card>
    </>
  )  
  /*return (
    <>
    <div className='card'>
        <h3 className='card-header'>Weapons<AddWeapon handleAddWeapon={handleAddWeapon} /></h3>
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Range</th>
                    <th>Damage</th>
                    <th>AP</th>
                    <th>ROF</th>
                    <th>WT</th>
                    <th>Notes</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {weapons.map((w) =>(
                <tr key={w.name}>
                    <td>{w.name}</td>
                    <td>{w.range}</td>
                    <td>{w.damage}</td>
                    <td>{w.ap}</td>
                    <td>{w.rof}</td>
                    <td>{w.wt}</td>
                    <td>{w.notes}</td>
                    <td><EditWeapon name={w.name} range={w.range} damage={w.damage} ap={w.ap} rof={w.rof} wt={w.wt} notes={w.notes} handleWeaponsChange={handleWeaponsChange} handleRemoveWeapon={handleRemoveWeapon} /></td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
    </>
  )*/
}
