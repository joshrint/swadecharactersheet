import React from 'react'
import EditAttributes from '../../edit/EditAttributes';
import ScoreArray from '../../characterSheet/tools/ScoreArray';

export default function NewCharSheetAttributes({agility, smarts, spirit, strength, vigor, handleChange}) {
    const handleAbilityChange = (attributes) =>{
        handleChange({"name":"agility", "value":attributes.agility});
        handleChange({"name":"smarts", "value":attributes.smarts});
        handleChange({"name":"spirit", "value":attributes.spirit});
        handleChange({"name":"strength", "value":attributes.strength});
        handleChange({"name":"vigor", "value":attributes.vigor});
    }
    return (
    <div className='card'>
        <h3 className='card-header'>Attributes <EditAttributes agility={agility}
                                                                smarts={smarts}
                                                                spirit={spirit}
                                                                strength={strength}
                                                                vigor={vigor}
                                                                editclass={"new-icon"}
                                                                handleAbilityChange={handleAbilityChange}
                                                                  /></h3>
        <ul className="list-group list-group-flush">
            <li className="list-group-item"><ScoreArray diceLevel={agility} /> Agility</li>
            <li className="list-group-item"><ScoreArray diceLevel={smarts} /> Smarts</li>
            <li className="list-group-item"><ScoreArray diceLevel={spirit} /> Spirit</li>
            <li className="list-group-item"><ScoreArray diceLevel={strength} /> Strength</li>
            <li className="list-group-item"><ScoreArray diceLevel={vigor} /> Vigor</li>
        </ul>       
    </div>
  )
}
