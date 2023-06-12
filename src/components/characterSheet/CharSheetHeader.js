import React from 'react';
import EditHeader from '../edit/EditHeader';

export default function CharSheetHeader({name, alias, rank, languages, faction, updateHandler, handleChange}) {
  
    const handleHeaderChange = (e) => {
        let headerChange;
        e.forEach(element => {
            handleChange(element);
            headerChange = {...headerChange, [element.name]:element.value};
        });
        console.log(headerChange)
        updateHandler(headerChange);
    }

  return (
    <div className='card'>
        <div className='card-body'>
            <h1 className='card-title'>{name} <EditHeader name={name} rank={rank} alias={alias} languages={languages} faction={faction} handleHeaderChange={handleHeaderChange} /></h1>
            <h5 className='card-subtitle mb-2 text-body-secondary'>Alias:{alias}</h5>
            <p className='card-text'>Rank: {rank}<br />
                            Languages: {languages}<br />
                            Faction: {faction}<br />
                            </p>
        </div>
    </div>
  )
}
