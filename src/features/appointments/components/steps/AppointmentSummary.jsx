import React from 'react';
import { Grid, Typography, Paper, Divider, Box } from '@mui/material';

const AppointmentSummary = ({ data }) => {
    const { service, doctor, date, time } = data;

    return (
        <div className="w-full max-w-2xl mx-auto p-4">
            <Typography variant="h5" fontWeight="bold" textAlign="center" mb={4}>
                Confirma tu Cita
            </Typography>

            <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="subtitle2" color="text.secondary">Especialidad</Typography>
                        <Typography variant="h6" fontWeight="medium">{service || 'No seleccionada'}</Typography>
                    </Grid>
                    <Divider sx={{ width: '100%', my: 2 }} />

                    <Grid item xs={12}>
                        <Typography variant="subtitle2" color="text.secondary">Doctor</Typography>
                        <Box display="flex" alignItems="center" gap={2}>
                            {doctor?.imagen && <img src={doctor.imagen} alt={doctor.nombre} className="w-12 h-12 rounded-full object-cover" />}
                            <Typography variant="h6" fontWeight="medium">{doctor?.nombre || 'No seleccionado'}</Typography>
                        </Box>
                    </Grid>
                    <Divider sx={{ width: '100%', my: 2 }} />

                    <Grid item xs={6}>
                        <Typography variant="subtitle2" color="text.secondary">Fecha</Typography>
                        <Typography variant="h6" fontWeight="medium">{date || '2024-07-20'}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle2" color="text.secondary">Hora</Typography>
                        <Typography variant="h6" fontWeight="medium">{time || 'No seleccionada'}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default AppointmentSummary;
