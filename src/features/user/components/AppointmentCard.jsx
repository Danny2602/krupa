import React from 'react';
import { Card, CardContent, Typography, Chip, Box } from '@mui/material';
import { CalendarToday, AccessTime } from '@mui/icons-material';
import { motion } from 'motion/react';
import dayjs from 'dayjs';

export const AppointmentCard = ({ appointment, index }) => {
    const formattedDate = dayjs(appointment.date).format('DD/MM/YYYY');
    const formattedTime = dayjs(appointment.date).format('HH:mm');

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
        >
            <Card
                className="hover:shadow-lg transition-shadow duration-300 border-l-4"
                sx={{
                    borderLeftColor: appointment.status === 'pending' ? '#2196f3' : '#4caf50',
                    height: '100%'
                }}
            >
                <CardContent>
                    <Box className="flex justify-between items-start mb-3">
                        <Typography variant="h6" className="font-semibold text-gray-800">
                            {appointment.service || 'Cita Médica'}
                        </Typography>
                        <Chip
                            label={appointment.status === 'pending' ? 'Pendiente' : 'Confirmada'}
                            size="small"
                            color={appointment.status === 'pending' ? 'primary' : 'success'}
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

                        {appointment.professional && (
                            <Typography variant="body2" className="text-gray-700 mt-2">
                                <span className="font-medium">Profesional:</span> {appointment.professional}
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
