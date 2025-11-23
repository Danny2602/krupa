import React from 'react'
import { Grid } from '@mui/material'
import { StepperAppointment } from '@/features/appointments/components/stepperAppointment'
import imagen1 from '@/assets/images/image1.jpg'
const home = () => {
    return (
        <Grid container >
                <Grid item size={{xs:12,md:12}} >
                    <img src={imagen1}/> 
                    <img src={imagen1}/> 
                    <img src={imagen1}/> 
                    <img src={imagen1}/> 
                    <img src={imagen1}/> 
                    <img src={imagen1}/> 
                    <img src={imagen1}/> 
                    <img src={imagen1}/> 
                </Grid>                                 
                
        </Grid>
            
    )

}

export default home