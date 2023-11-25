import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AccordionSummary, Card, Grid, Accordion, AccordionDetails } from '@mui/material'
import React from 'react'
import {Parser} from 'html-to-react';
import '../../stylesheets/PowerCard.css';

export default function PowerCard({power}) {
  return (
    <Card sx={{marginBottom: '10px'}}>
        <Grid container>
            <Grid sx={{width: '100%'}}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<FontAwesomeIcon icon={faCaretDown} />}
                        aria-controls='panel1a-content'
                        id='panel1a-header'>
                            <h4>{power.name}</h4>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div align='left'>
                                <b>Rank:</b> {power.rank} <br />
                                <b>Power Points:</b> {power.powerpoint} <br />
                                <b>Range:</b> {power.range} <br />
                                <b>Duration:</b> {power.duration} <br />
                                <b>Trappings:</b> <i>{power.trappings}</i> <br />
                                <div id='spellEffect'>{Parser().parse(power.effect)}</div>
                                {power.modifiers.length > 0 ?
                                    <>
                                        <b>Modifiers:</b>
                                        <ul>
                                        {power.modifiers.map((modifier, m) =>
                                            <li key={m}><b>{modifier.name}:</b> {modifier.effect}</li>)}
                                        </ul>
                                    </> : <></>}
                                
                            </div>
                        </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>
    </Card>
  )
}
