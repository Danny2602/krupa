import React from 'react';
import { StepperAppointment } from '@/features/appointments/components/stepperAppointment';
import { Container, Box } from '@mui/material';

const AppointmentPage = () => {
    return (
        <Container maxWidth="xl" className="h-screen py-4 ">
            <Box className="h-full flex items-center justify-center ">
                <StepperAppointment />
            </Box>
        </Container>
    );
};

export default AppointmentPage;