import React from 'react';
import AddRippertech from '../add/AddRippertech';
import EditRippertech from '../edit/EditRippertech';
import InfoPopup from './tools/InfoPopup';

export default function CharSheetRipperTech({rippertech, handleChange, updateHandler}) {
    
    const handleAddRippertech = (e) =>{
        if(e.name.length > 0){
            let tempRT = rippertech;
            tempRT.push(e);
            handleChange({"name":"rippertech", "value":tempRT})
            updateHandler({"rippertech":tempRT});
        }
    }
    const handleRipperTechChange = (e) =>{
        let tempRT = rippertech;
        tempRT.forEach(tech =>{
            if(tech.name === e.name){
                tech.benefit = e.benefit
            }
        });
        handleChange({"name":"rippertech", "value":tempRT})
        updateHandler({"rippertech":tempRT});
    }
    const handleRemoveRippertech = (e) =>{
        let tempRT = rippertech;
        for(let i = 0; i < tempRT.length; i++){
            if(tempRT[i].name === e){
                tempRT.splice(i, 1);
            }
        }
        handleChange({"name":"rippertech", "value":tempRT})
        updateHandler({"rippertech":tempRT});
    }
    return (
    <>
    <div className='card'>
        <h3 className='card-header'>Rippertech<AddRippertech handleAddRippertech={handleAddRippertech} /></h3>
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Benefit</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {rippertech.map((rt) =>(
                <tr key={rt.name}>
                    <td>{rt.name}</td>
                    <td><InfoPopup name={rt.name} description={rt.benefit} /></td>
                    <td><EditRippertech name={rt.name} benefit={rt.benefit} handleRipperTechChange={handleRipperTechChange} handleRemoveRippertech={handleRemoveRippertech} /></td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
    </>
  )
}
