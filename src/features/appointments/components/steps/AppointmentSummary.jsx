import React from 'react';
import { Grid, Typography, Paper, Divider, Box, Avatar, Chip } from '@mui/material';
import { motion } from 'motion/react';
import { CalendarToday, AccessTime, MedicalServices, Notes } from '@mui/icons-material';
import dayjs from 'dayjs';
import 'dayjs/locale/es';

dayjs.locale('es');

const AppointmentSummary = ({ data }) => {
    const { service, doctor, date, time, notes } = data;

    const serviceLabels = {
        general: 'Medicina General',
        pediatria: 'Pediatría',
        dermatologia: 'Dermatología',
        cardiologia: 'Cardiología',
        odontologia: 'Odontología',
        neurologia: 'Neurología',
        nutricion: 'Nutrición',
        oftalmologia: 'Oftalmología',
    };

    const formattedDate = date ? dayjs(date).format('dddd, D [de] MMMM [de] YYYY') : 'No seleccionada';

    return (
        <Box className="w-full max-w-3xl mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Typography
                    variant="h5"
                    className="font-bold text-center mb-1"
                    sx={{ color: '#667eea' }}
                >
                    🎉 Confirma tu Cita
                </Typography>
                <Typography
                    variant="body2"
                    className="text-gray-600 text-center mb-4"
                >
                    Revisa que toda la información sea correcta
                </Typography>

                <Paper
                    elevation={3}
                    sx={{
                        p: 3,
                        borderRadius: 2,
                        background: 'linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%)',
                        border: '2px solid #667eea20'
                    }}
                >
                    {/* Service Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <Box className="mb-3">
                            <Box className="flex items-center gap-2 mb-1">
                                <MedicalServices sx={{ color: '#667eea', fontSize: 20 }} />
                                <Typography variant="subtitle2" className="text-gray-600 font-semibold text-sm">
                                    Especialidad
                                </Typography>
                            </Box>
                            <Typography variant="h6" className="font-bold text-gray-800 ml-7 text-base">
                                {serviceLabels[service] || 'No seleccionada'}
                            </Typography>
                        </Box>
                    </motion.div>

                    <Divider sx={{ my: 2 }} />

                    {/* Doctor Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Box className="mb-3">
                            <Typography variant="subtitle2" className="text-gray-600 font-semibold mb-1 text-sm">
                                Profesional
                            </Typography>
                            {doctor ? (
                                <Box className="flex items-center gap-2 ml-1">
                                    <Avatar
                                        src={doctor.imagen}
                                        alt={doctor.nombre}
                                        sx={{
                                            width: 50,
                                            height: 50,
                                            border: '2px solid #667eea'
                                        }}
                                    />
                                    <Box>
                                        <Typography variant="subtitle1" className="font-bold text-gray-800">
                                            {doctor.nombre}
                                        </Typography>
                                        <Chip
                                            label={doctor.especialidad}
                                            size="small"
                                            sx={{
                                                backgroundColor: '#667eea20',
                                                color: '#667eea',
                                                fontWeight: 'medium',
                                                height: '20px',
                                                fontSize: '0.7rem'
                                            }}
                                        />
                                    </Box>
                                </Box>
                            ) : (
                                <Typography variant="body2" className="text-gray-500 ml-1">
                                    No seleccionado
                                </Typography>
                            )}
                        </Box>
                    </motion.div>

                    <Divider sx={{ my: 2 }} />

                    {/* Date and Time Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Box className="flex items-center gap-2 mb-1">
                                    <CalendarToday sx={{ color: '#667eea', fontSize: 18 }} />
                                    <Typography variant="subtitle2" className="text-gray-600 font-semibold text-sm">
                                        Fecha
                                    </Typography>
                                </Box>
                                <Typography variant="body2" className="font-medium text-gray-800 ml-6">
                                    {formattedDate}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box className="flex items-center gap-2 mb-1">
                                    <AccessTime sx={{ color: '#667eea', fontSize: 18 }} />
                                    <Typography variant="subtitle2" className="text-gray-600 font-semibold text-sm">
                                        Hora
                                    </Typography>
                                </Box>
                                <Typography variant="body2" className="font-medium text-gray-800 ml-6">
                                    {time || 'No seleccionada'}
                                </Typography>
                            </Grid>
                        </Grid>
                    </motion.div>

                    {/* Notes Section */}
                    {notes && (
                        <>
                            <Divider sx={{ my: 2 }} />
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <Box>
                                    <Box className="flex items-center gap-2 mb-1">
                                        <Notes sx={{ color: '#667eea', fontSize: 18 }} />
                                        <Typography variant="subtitle2" className="text-gray-600 font-semibold text-sm">
                                            Notas
                                        </Typography>
                                    </Box>
                                    <Paper
                                        sx={{
                                            p: 1.5,
                                            backgroundColor: '#f9fafb',
                                            ml: 3
                                        }}
                                    >
                                        <Typography variant="body2" className="text-gray-700 text-sm">
                                            {notes}
                                        </Typography>
                                    </Paper>
                                </Box>
                            </motion.div>
                        </>
                    )}
                </Paper>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-3"
                >
                    <Typography variant="caption" className="text-gray-600">
                        Al confirmar, recibirás un correo con los detalles de tu cita
                    </Typography>
                </motion.div>
            </motion.div>
        </Box>
    );
};

export default AppointmentSummary;
