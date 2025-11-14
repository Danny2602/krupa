import React from 'react'
import { Grid } from '@mui/material'
import { StepperAppointment } from '@/features/appointments/components/stepperAppointment'

const home = () => {
    return (
        <Grid container spacing={2} padding={2} className='h-screen w-full'>
                <Grid item size={{xs:12,md:12}} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <h1>Agendar Cita</h1>  
                </Grid>                                 
                <Grid item size={{xs:12,md:12}} display={'flex'} alignItems={'center'} justifyContent={'center'}  >
                    {/* <Calendar/> */}
                    <StepperAppointment />
                </Grid>
        </Grid>
            
    )

}

export default home