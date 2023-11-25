import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AccordionSummary, Card, Grid, Accordion, AccordionDetails } from '@mui/material'
import React from 'react'
import {Parser} from 'html-to-react';

export default function EdgeCard({edge}) {
  return (
    <Card sx={{marginBottom: '10px'}}>
        <Grid container>
            <Grid sx={{width: '100%'}}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<FontAwesomeIcon icon={faCaretDown} />}
                        aria-controls='panel1a-content'
                        id='panel1a-header'>
                            <h4>{edge.name}</h4>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div align='left'>
                                <b>Level: </b> {edge.level} <br />
                                <b>Requirements:</b> {edge.requirements} <br />
                                <b>Type: </b> {edge.type} <br />
                            </div>
                            <div id='edgeEffect'>
                                {Parser().parse(edge.effect)}
                            </div>
                        </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>
    </Card>
  )
}
