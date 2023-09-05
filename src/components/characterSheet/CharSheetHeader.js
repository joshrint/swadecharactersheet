import React from 'react';
import EditHeader from '../edit/EditHeader';
import ranks from './tools/Ranks';

export default function CharSheetHeader({name, alias, rank, languages, faction, powers, rippertech, updateHandler, handleChange}) {
  
    const handleHeaderChange = (e) => {
        let headerChange;
        e.forEach(element => {
            handleChange(element);
            headerChange = {...headerChange, [element.name]:element.value};
        });
        updateHandler(headerChange);
    }

    const handleAddRippertech = (e) =>{
      if(e.name.length > 0){
          let tempRT = [];
          tempRT.push(e);
          handleChange({"name":"rippertech", "value":tempRT})
          updateHandler({"rippertech":tempRT});
      }
    }
    const handleAddPower =(e) =>{
      if(e.name.length > 0){
          let tempPowers = [];
          tempPowers.push(e);
          handleChange({"name":"powers", "value":tempPowers})
          updateHandler({"powers":tempPowers});
      }
  }
  

  return (
    <div className='card'>
        <div className='card-body'>
            <h1 className='card-title'>{name} <EditHeader name={name} rank={rank} alias={alias} languages={languages} faction={faction} powers={powers} rippertech={rippertech} handleHeaderChange={handleHeaderChange} handleAddRippertech={handleAddRippertech} handleAddPower={handleAddPower} /></h1>
            <h5 className='card-subtitle mb-2 text-body-secondary'>Alias:{alias}</h5>
            <p className='card-text'>Rank: {ranks[rank].name}<br />
                            Languages: {languages}<br />
                            Faction: {faction}<br />
                            </p>
        </div>
    </div>
  )
}
