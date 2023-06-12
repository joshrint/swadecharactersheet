import React from 'react';
import AddPower from '../add/AddPower';
import EditPower from '../edit/EditPower';
import ShowPowers from './tools/ShowPowers';

export default function CharSheetPowers({powers, handleChange, updateHandler}) {
    const handleAddPower =(e) =>{
        if(e.name.length > 0){
            let tempPowers = powers;
            tempPowers.push(e);
            handleChange({"name":"powers", "value":tempPowers})
            updateHandler({"powers":tempPowers});
        }
    }
    const handlePowersChange = (e) =>{
        let tempPowers = powers;
        tempPowers.forEach(p =>{
            if(p.name === e.name){
                p.pp = e.pp;
                p.range = e.range;
                p.dur = e.dur;
                p.effect = e.effect;
            }
        });
        handleChange({"name":"powers", "value":tempPowers})
        updateHandler({"powers":tempPowers});
    }
    const handleRemovePower = (e) =>{
        let tempPowers = powers;
        for(let i = 0; i < tempPowers.length; i++){
            if(tempPowers[i].name === e){
                tempPowers.splice(i, 1);
            }
        }
        handleChange({"name":"powers", "value":tempPowers})
        updateHandler({"powers":tempPowers});
    }
  return (
    <>
    <div className='card'>
                            <h3 className='card-header'>Powers<AddPower handleAddPower={handleAddPower} /></h3>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>PP</th>
                                        <th>Range</th>
                                        <th>Dur</th>
                                        <th>Effect</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {powers.map((p) =>(
                                        <tr key={p.name}>
                                            <td>{p.name}</td>
                                            <td>{p.pp}</td>
                                            <td>{p.range}</td>
                                            <td>{p.dur}</td>
                                            <td><ShowPowers name={p.name} pp={p.pp} range={p.range} dur={p.dur} effect={p.effect} /></td>
                                            <td><EditPower name={p.name} pp={p.pp} range={p.range} dur={p.dur} effect={p.effect} handlePowersChange={handlePowersChange} handleRemovePower={handleRemovePower} /></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className='position-absolute bottom-0 end-0'></div>
                    </div>
    </>
  )
}
