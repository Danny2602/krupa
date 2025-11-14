import React from 'react'
import { StepperAppointment } from '@/features/appointments/components/stepperAppointment'
import { Grid } from '@mui/material'
const Appointment = () => {
    return (
        <Grid container spacing={2} padding={2} className='h-screen w-full'>
                    <Grid item size={{xs:12,md:12}} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        <h1 className='block text-3xl sm:text-lg md:text-xl lg:text-1xl xl:text-2xl font-bold text-gray-700'>Agendar Cita</h1>  
                    </Grid>                                 
                    <Grid item size={{xs:12,md:12}} display={'flex'} alignItems={'center'} justifyContent={'center'}  >
                        {/* <Calendar/> */}
                        <StepperAppointment />
                    </Grid>
        </Grid>
    )
}

export default Appointment