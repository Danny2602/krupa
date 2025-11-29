import React from 'react';
import { Card, CardContent, Typography, Chip, Box } from '@mui/material';
import { CalendarToday, AccessTime } from '@mui/icons-material';
import { motion } from 'motion/react';
import dayjs from 'dayjs';

export const AppointmentCard = ({ appointment, index }) => {
    const formattedDate = dayjs(appointment.startTime).format('DD/MM/YYYY');
    const formattedTime = dayjs(appointment.startTime).format('HH:mm');
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
        >
            <Card
                className="hover:shadow-lg transition-shadow duration-300 border-l-4"
                sx={{
                    borderLeftColor: appointment.status === 'PENDING' ? '#2196f3' : appointment.status === 'CONFIRMED' ? '#4caf50' : '#f44336',
                    height: '100%'
                }}
            >
                <CardContent>
                    <Box className="flex justify-between items-start mb-3">
                        <Typography variant="h6" className="font-semibold text-gray-800">
                            {appointment.doctor.specialty || 'Cita Médica'}
                        </Typography>
                        <Chip
                            label={appointment.status === 'PENDING' ? 'Pendiente' : appointment.status === 'CONFIRMED' ? 'Confirmada' : 'Cancelada'}
                            size="small"
                            color={appointment.status === 'PENDING' ? 'primary' : appointment.status === 'CONFIRMED' ? 'success' : 'CANCELED' ? 'error' : 'warning'}
                        />
                    </Box>

                    <Box className="space-y-2">
                        <Box className="flex items-center gap-2 text-gray-600">
                            <CalendarToday fontSize="small" />
                            <Typography variant="body2">
                                {formattedDate}
                            </Typography>
                        </Box>

                        <Box className="flex items-center gap-2 text-gray-600">
                            <AccessTime fontSize="small" />
                            <Typography variant="body2">
                                {formattedTime}
                            </Typography>
                        </Box>

                        {appointment.doctor && (
                            <Typography variant="body2" className="text-gray-700 mt-2">
                                <span className="font-medium">Profesional:</span> {appointment.doctor.name} {appointment.doctor.lastName}
                            </Typography>
                        )}

                        {appointment.notes && (
                            <Typography variant="body2" className="text-gray-500 mt-2 italic">
                                {appointment.notes}
                            </Typography>
                        )}
                    </Box>
                </CardContent>
            </Card>
        </motion.div>
    );
};
