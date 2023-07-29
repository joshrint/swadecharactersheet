import React from 'react'
import AddHinderance from '../add/AddHinderance';
import EditHinderance from '../edit/EditHinderance';
//import InfoPopup from './tools/InfoPopup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';

export default function CharSheetHinderances({hinderances, updateHandler, handleChange}) {
    const handleAddHinderance = (e) => {
        let tempHinderances = hinderances;
        tempHinderances.push(e);
        handleChange({"name":"hinderances", "value":tempHinderances});
        updateHandler({"hinderances":tempHinderances});
        
    }
    const handleHinderanceChange = (e) =>{
        let tempHinderances = hinderances;
        tempHinderances.forEach(hind => {
            if (hind.name === e.name){
                hind.description = e.description
            }
        });
        handleChange({"name":"hinderances", "value":tempHinderances})
        updateHandler({"hinderances":tempHinderances});
    }
    
    const handleRemoveHinderance = (e) =>{
        let tempHinderances = hinderances;
        for(let i = 0; i < tempHinderances.length; i++){
            if(tempHinderances[i].name === e){
                tempHinderances.splice(i, 1);
            }
        }
        handleChange({"name":"hinderances", "value": tempHinderances});
        updateHandler({"hinderances":tempHinderances});
    }
  return (
    <>
        <div className='card'>
            <h3 className='card-header'>Hinderances<AddHinderance handleAddHinderance={handleAddHinderance} /></h3>
            {hinderances.map((h) => (
                <Accordion key={h.name}>
                    <AccordionSummary
                        expandIcon={<FontAwesomeIcon icon={faCaretDown} />}
                        aria-controls='panel1a-content'
                        id='panel1a-header'>
                            <h6>{h.name}</h6>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography align='left'>
                                {h.description}
                                <EditHinderance name={h.name} description={h.description} handleHinderanceChange={handleHinderanceChange} handleRemoveHinderance={handleRemoveHinderance} />
                            </Typography>
                        </AccordionDetails>
                </Accordion>
            ))}
            {/*<ul className='list-group list-group-flush'>
                {hinderances.map((h) =>(
                    <li key={h.name} className='list-group-item'><InfoPopup name={h.name} description={h.description} /> <EditHinderance name={h.name} description={h.description} handleHinderanceChange={handleHinderanceChange} handleRemoveHinderance={handleRemoveHinderance} /></li>
                ))}            
            </ul>*/}
        </div>
    </>
  )
}
