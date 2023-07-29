import React from 'react';
import EditEdge from '../edit/EditEdge';
import AddEdge from '../add/AddEdge';
//import InfoPopup from './tools/InfoPopup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';

export default function CharSheetEdges({edges, handleChange, updateHandler}) {
    const handleAddEdge =(e) =>{
        if(e.name.length > 0){
            let tempEdges = edges;
            tempEdges.push(e);
            
            handleChange({"name":"edges", "value":tempEdges})
            updateHandler({"edges":tempEdges});
        }
    }
    const handleEdgeChange = (e) =>{
        let tempEdges = edges;
        tempEdges.forEach(edge => {
            if (edge.name === e.name){
                edge.description = e.description
            }
        });
        handleChange({"name":"edges", "value":tempEdges})
        updateHandler({"edges":tempEdges});
    }
    const handleRemoveEdge = (e) =>{
        let tempEdges = edges;
        for(let i = 0; i < tempEdges.length; i++){
            if(tempEdges[i].name === e){
                tempEdges.splice(i, 1);
            }
        }
        handleChange({"name":"edges", "value":tempEdges})
        updateHandler({"edges":tempEdges});
    }
  return (
    <>
    <div className='card'>
        <h3 className='card-header'>Edges<AddEdge handleAddEdge={handleAddEdge} /></h3>
        {edges.map((e) =>(
            <Accordion key={e.name}>
                <AccordionSummary
                    expandIcon={<FontAwesomeIcon icon={faCaretDown} />}
                    aria-controls='panel1a-content'
                    id="panel1a-header"
                >
                    <h6>{e.name}</h6>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography align='left'>
                        {e.description}
                        <EditEdge name={e.name} description={e.description} handleEdgeChange={handleEdgeChange} handleRemoveEdge={handleRemoveEdge} />
                    </Typography>
                </AccordionDetails>
            </Accordion>
        ))}
    </div>
    </>
  )
}
