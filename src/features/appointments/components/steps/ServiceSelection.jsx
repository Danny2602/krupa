import React from 'react';
import { Grid, Typography, Card, CardContent, CardActionArea } from '@mui/material';
import { motion } from 'framer-motion';

const services = [
    { id: 'general', label: 'Medicina General', icon: '🩺' },
    { id: 'pediatria', label: 'Pediatría', icon: '👶' },
    { id: 'dermatologia', label: 'Dermatología', icon: '🧴' },
    { id: 'cardiologia', label: 'Cardiología', icon: '❤️' },
];

const ServiceSelection = ({ selectedService, onSelect }) => {
    return (
        <div className="w-full p-4">
            <Typography variant="h5" fontWeight="bold" textAlign="center" mb={4}>
                ¿Qué especialidad necesitas?
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                {services.map((service) => (
                    <Grid item xs={12} sm={6} md={3} key={service.id}>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Card
                                sx={{
                                    border: selectedService === service.id ? '2px solid #f57922' : '1px solid #e0e0e0',
                                    backgroundColor: selectedService === service.id ? '#fff3e0' : 'white'
                                }}
                            >
                                <CardActionArea onClick={() => onSelect(service.id)} sx={{ height: '100%', p: 2 }}>
                                    <CardContent sx={{ textAlign: 'center' }}>
                                        <Typography variant="h2" mb={2}>{service.icon}</Typography>
                                        <Typography variant="h6" fontWeight="medium">
                                            {service.label}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default ServiceSelection;
