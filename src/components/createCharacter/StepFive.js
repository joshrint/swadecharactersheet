/**
 * Add Edges
 */
import {React, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Card, Button, CardContent, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import AddEdge from "../add/AddEdge";

export default function StepFive({prevStep, handleChange, values, bonusScore, handleComplete, setBonusScore}) {
  
  const [edgePoints, setEdgePoints] = useState(1+ (bonusScore/2))

  const handleAddEdge = (e) =>{
    let tempEdges = values.edges;
    tempEdges.push(e);
    if(edgePoints > 0){
      setEdgePoints(edgePoints -1)
      if(edgePoints*2 === bonusScore){
        setBonusScore(bonusScore-2);
      } 
    }
    handleChange({"name":"edges", "value":tempEdges})
  }

  const handleRemoveEdge = (e) =>{
    let tempEdges = values.edges;
    for(let i = 0; i < tempEdges.length; i++){
        if(tempEdges[i].name === e) {
          tempEdges.splice(i, 1);
        }
    }
    setEdgePoints(edgePoints+1);
    if(edgePoints >= 1){
      setBonusScore(bonusScore+2)
    }
    handleChange({"name":"edges", "value": tempEdges});
  }

  const validateSubmit = () => {
    handleComplete()
  }

  return (
    <>
      <Card>
        <CardContent>
          <Typography gutterBottom variant='h5' component="h3">
            Edges {edgePoints > 0 ? <AddEdge  handleAddEdge={handleAddEdge}/> : <></>}
          </Typography>
          <Typography variant='h6' component="h4" align='left'>
            Edges Remaining: {edgePoints}
          </Typography>
          {values.edges && values.edges.length > 0 ? (
            <>
              {values.edges.map((e) =>(
                <Accordion key={e.name}>
                  <AccordionSummary
                    expandIcon={<FontAwesomeIcon icon={faCaretDown} />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'>
                      <Typography>
                      <FontAwesomeIcon onClick={() =>handleRemoveEdge(e.name)} icon={faTrashCan} style={{float:"left", marginRight:'15px'}} />
                      {e.name}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography align='left'>
                        {e.description}
                      </Typography>
                    </AccordionDetails>
                </Accordion>
              ))}
            </>
          ): <div>None</div> }

          <Typography sx={{marginTop:"20px"}}>
            <Button onClick={prevStep} >Back</Button><Button onClick={validateSubmit} sx={{mr: 1}}>Next</Button>
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}
