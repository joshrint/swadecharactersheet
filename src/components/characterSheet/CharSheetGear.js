import React from 'react';
import AddGear from '../add/AddGear';
import EditGear from '../edit/EditGear';

export default function CharSheetGear({gear, handleChange, updateHandler}) {
    const handleAddGear = (e) =>{
        if(e.length > 0){
            let tempGear = gear;
            tempGear.push(e);
            handleChange({"name":"gear", "value":tempGear})
            updateHandler({"gear":tempGear});
        }
    }
    const handleGearChange = (e) =>{
        let tempGear = gear;
        for (let i = 0; i < tempGear.length; i++) {
            if(e.oldName === tempGear[i].name){
                tempGear[i].name=e.name;
            }
        }
        handleChange({"name":"gear", "value":tempGear})
        updateHandler({"gear":tempGear});
    }
    const handleRemoveGear = (e)=>{
        let tempGear = gear;
        for(let i = 0; i < tempGear.length; i++){
            if(tempGear[i].name === e){
                tempGear.splice(i, 1);
            }
        }
        handleChange({"name":"gear", "value":tempGear})
        updateHandler({"gear":tempGear});
    }
  return (
    <>
    <div className='card'>
            <h3 className='card-header'>Gear<AddGear handleAddGear={handleAddGear} /></h3>
            <ul className='list-group list-group-flush'>
                {gear.map((g) =>(
                    <li key={g.name} className='list-group-item'>{g.name} <EditGear name={g.name} handleGearChange={handleGearChange} handleRemoveGear={handleRemoveGear} /></li>
                ))}
            </ul>
    </div>
    </>
  )
}
