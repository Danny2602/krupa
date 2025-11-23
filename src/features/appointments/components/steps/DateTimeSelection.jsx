import React from 'react';
import { Grid, Typography, TextField, Button } from '@mui/material';
import { Calendar } from '@/features/appointments/components/calendar'; // Reusing existing calendar

const DateTimeSelection = ({ selectedDate, selectedTime, onSelectDate, onSelectTime }) => {
    return (
        <div className="w-full p-4">
            <Typography variant="h5" fontWeight="bold" textAlign="center" mb={4}>
                Selecciona Fecha y Hora
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} md={7}>
                    <Typography variant="h6" mb={2}>Fecha</Typography>
                    {/* Assuming Calendar component handles date selection internally or via props. 
              If it's a fullcalendar wrapper, we might need to adjust it to bubble up events.
              For now, we'll assume it displays availability.
          */}
                    <div className="border rounded-lg p-2 h-[400px] overflow-y-auto">
                        <Calendar />
                    </div>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Typography variant="h6" mb={2}>Horarios Disponibles</Typography>
                    <div className="grid grid-cols-2 gap-2">
                        {['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'].map((time) => (
                            <Button
                                key={time}
                                variant={selectedTime === time ? "contained" : "outlined"}
                                color="primary"
                                onClick={() => onSelectTime(time)}
                            >
                                {time}
                            </Button>
                        ))}
                    </div>
                    <Typography variant="caption" display="block" mt={2} color="text.secondary">
                        * Selecciona una hora para continuar
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default DateTimeSelection;
