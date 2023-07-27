import React from 'react'
import { Stepper, Step, StepButton } from '@mui/material'
export default function CreateStepper({step, steps, handleStep, completed, handleNext, handleComplete}) {    
    
    return (
    <>
        <div >
            <Stepper 
                activeStep={step}
                nonLinear
                alternativeLabel
                >
                {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                        <StepButton color="inherit" onClick={() => handleStep(index)}/>
                        {label}
                    </Step>
                ))}
            </Stepper>
        </div>
    </>
  )
}
