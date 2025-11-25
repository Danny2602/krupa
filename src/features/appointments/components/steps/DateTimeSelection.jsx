import React from 'react';
import { Grid, Typography, Button, Box, TextField, Chip } from '@mui/material';
import { motion } from 'motion/react';
import dayjs from 'dayjs';

// Mock de horas reservadas - en producción vendría de la API
const reservedTimes = ['09:00', '11:00', '15:00'];

const availableTimes = [
    '08:00', '09:00', '10:00', '11:00',
    '14:00', '15:00', '16:00', '17:00', '18:00'
];

const DateTimeSelection = ({ selectedDate, selectedTime, onSelectDate, onSelectTime, notes, onNotesChange }) => {
    const isTimeReserved = (time) => reservedTimes.includes(time);

    return (
        <Box className="w-full max-w-4xl mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Typography
                    variant="h5"
                    className="font-bold text-center mb-1"
                    sx={{ color: '#667eea' }}
                >
                    Selecciona Fecha y Hora
                </Typography>
                <Typography
                    variant="body2"
                    className="text-gray-600 text-center mb-4"
                >
                    Elige el día y horario de tu preferencia
                </Typography>
            </motion.div>

            <Grid container spacing={3}>
                {/* Date Picker Section */}
                <Grid item xs={12} md={6}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Typography variant="subtitle1" className="font-semibold mb-2 text-gray-700">
                            📅 Selecciona la Fecha
                        </Typography>
                        <TextField
                            type="date"
                            fullWidth
                            value={selectedDate || ''}
                            onChange={(e) => onSelectDate(e.target.value)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                min: dayjs().format('YYYY-MM-DD')
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '&:hover fieldset': {
                                        borderColor: '#667eea',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#667eea',
                                    }
                                }
                            }}
                        />
                        {selectedDate && (
                            <Chip
                                label={`Fecha: ${dayjs(selectedDate).format('DD/MM/YYYY')}`}
                                color="success"
                                size="small"
                                className="mt-2"
                            />
                        )}
                    </motion.div>

                    {/* Notes Section */}
                    <Box className="mt-4">
                        <Typography variant="subtitle1" className="font-semibold mb-2 text-gray-700">
                            📝 Notas o Síntomas (Opcional)
                        </Typography>
                        <TextField
                            multiline
                            rows={3}
                            fullWidth
                            placeholder="Describe brevemente tus síntomas..."
                            value={notes || ''}
                            onChange={(e) => onNotesChange(e.target.value)}
                            variant="outlined"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '&:hover fieldset': {
                                        borderColor: '#667eea',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#667eea',
                                    }
                                }
                            }}
                        />
                    </Box>
                </Grid>

                {/* Time Selection Section */}
                <Grid item xs={12} md={6}>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Typography variant="subtitle1" className="font-semibold mb-2 text-gray-700">
                            🕐 Horarios Disponibles
                        </Typography>
                        <Box className="grid grid-cols-3 gap-2">
                            {availableTimes.map((time, index) => {
                                const isReserved = isTimeReserved(time);
                                const isSelected = selectedTime === time;

                                return (
                                    <motion.div
                                        key={time}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.2, delay: index * 0.03 }}
                                        whileHover={!isReserved ? { scale: 1.05 } : {}}
                                        whileTap={!isReserved ? { scale: 0.95 } : {}}
                                    >
                                        <Button
                                            variant={isSelected ? "contained" : "outlined"}
                                            onClick={() => !isReserved && onSelectTime(time)}
                                            fullWidth
                                            disabled={isReserved}
                                            sx={{
                                                backgroundColor: isReserved
                                                    ? '#e0e0e0'
                                                    : isSelected
                                                        ? '#667eea'
                                                        : 'transparent',
                                                borderColor: isReserved
                                                    ? '#bdbdbd'
                                                    : isSelected
                                                        ? '#667eea'
                                                        : '#d1d5db',
                                                color: isReserved
                                                    ? '#9e9e9e'
                                                    : isSelected
                                                        ? 'white'
                                                        : '#4b5563',
                                                fontWeight: isSelected ? 'bold' : 'normal',
                                                cursor: isReserved ? 'not-allowed' : 'pointer',
                                                '&:hover': {
                                                    backgroundColor: isReserved
                                                        ? '#e0e0e0'
                                                        : isSelected
                                                            ? '#5568d3'
                                                            : '#f3f4f6',
                                                    borderColor: isReserved
                                                        ? '#bdbdbd'
                                                        : '#667eea'
                                                },
                                                '&.Mui-disabled': {
                                                    backgroundColor: '#e0e0e0',
                                                    color: '#9e9e9e',
                                                    borderColor: '#bdbdbd'
                                                }
                                            }}
                                        >
                                            {time}
                                        </Button>
                                    </motion.div>
                                );
                            })}
                        </Box>

                        {selectedTime && (
                            <Chip
                                label={`Hora: ${selectedTime}`}
                                color="success"
                                size="small"
                                className="mt-3"
                            />
                        )}

                        <Box className="mt-3 p-2 bg-gray-50 rounded-lg">
                            <Typography variant="caption" className="text-gray-600 flex items-center gap-2">
                                <span className="inline-block w-3 h-3 bg-gray-300 rounded"></span>
                                Horarios reservados
                            </Typography>
                        </Box>
                    </motion.div>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DateTimeSelection;
