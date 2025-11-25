import React from 'react';
import { Card, CardContent, Typography, Avatar, Box, Chip } from '@mui/material';
import { Star, MedicalServices } from '@mui/icons-material';
import { motion } from 'motion/react';

export const DoctorCard = ({ doctor, isSelected, onSelect, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
        >
            <Card
                onClick={() => onSelect(doctor)}
                className="cursor-pointer hover:shadow-xl transition-all duration-300"
                sx={{
                    border: isSelected ? '3px solid #667eea' : '1px solid #e0e0e0',
                    backgroundColor: isSelected ? '#f3f4ff' : 'white',
                    height: '100%'
                }}
            >
                <CardContent className="text-center p-4">
                    <Avatar
                        src={doctor.imagen}
                        alt={doctor.nombre}
                        sx={{
                            width: 100,
                            height: 100,
                            margin: '0 auto 16px',
                            border: isSelected ? '4px solid #667eea' : '4px solid #e0e0e0',
                            boxShadow: isSelected ? '0 4px 12px rgba(102, 126, 234, 0.3)' : '0 2px 8px rgba(0,0,0,0.1)'
                        }}
                    >
                        <MedicalServices sx={{ fontSize: 50 }} />
                    </Avatar>

                    <Typography variant="h6" className="font-bold text-gray-800 mb-1">
                        {doctor.nombre}
                    </Typography>

                    <Chip
                        label={doctor.especialidad}
                        size="small"
                        sx={{
                            backgroundColor: isSelected ? '#667eea' : '#f5f5f5',
                            color: isSelected ? 'white' : '#666',
                            fontWeight: 'medium',
                            mb: 2
                        }}
                    />

                    {doctor.rating && (
                        <Box className="flex items-center justify-center gap-1 mt-2">
                            <Star sx={{ fontSize: 18, color: '#ffa726' }} />
                            <Typography variant="body2" className="text-gray-600">
                                {doctor.rating} / 5.0
                            </Typography>
                        </Box>
                    )}

                    {doctor.experiencia && (
                        <Typography variant="caption" className="text-gray-500 block mt-2">
                            {doctor.experiencia} años de experiencia
                        </Typography>
                    )}

                    {isSelected && (
                        <Box
                            className="mt-3 py-1 px-3 rounded-full inline-block"
                            sx={{ backgroundColor: '#667eea', color: 'white' }}
                        >
                            <Typography variant="caption" className="font-semibold">
                                ✓ Seleccionado
                            </Typography>
                        </Box>
                    )}
                </CardContent>
            </Card>
        </motion.div>
    );
};
