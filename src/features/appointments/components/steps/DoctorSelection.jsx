import React from 'react';
import { Grid, Typography, Box, Alert } from '@mui/material';
import { motion } from 'motion/react';
import { DoctorCard } from '../DoctorCard';
import { KSkeleton } from '@/components/ui/KSkeleton';
import image1 from "@/assets/images/image1.jpg";

import { useDoctorApi } from '../../hooks/useDoctorApi';



const DoctorSelection = ({ selectedService, selectedDoctor, onSelect }) => {
    const [loading, setLoading] = React.useState(true);
    const [doctors, setDoctors] = React.useState([]);
    const { loading: loadingDoctors, data: doctorsData, fetchDoctorsBySpecialty } = useDoctorApi();

    React.useEffect(() => {
        loadDoctors(selectedService.id);
    }, [selectedService]);

    const loadDoctors = async (specialty) => {
        const result = await fetchDoctorsBySpecialty(specialty);
        setDoctors(result);
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    }

    if (!selectedService) {
        return (
            <Box className="w-full max-w-5xl mx-auto px-4">
                <Alert severity="info">
                    Por favor, selecciona primero una especialidad en el paso anterior.
                </Alert>
            </Box>
        );
    }

    if (loading) {
        return (
            <Box className="w-full max-w-6xl mx-auto px-4">
                <Box sx={{ mb: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <KSkeleton variant="text" width={300} height={40} sx={{ mb: 1 }} />
                    <KSkeleton variant="text" width={200} height={24} />
                </Box>
                <Grid container spacing={2}>
                    {[1, 2, 3].map((item) => (
                        <Grid item xs={12} sm={6} md={4} key={item}>
                            <KSkeleton variant="rectangular" height={200} sx={{ borderRadius: 2 }} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        );
    }

    return (
        <Box className="w-full max-w-6xl mx-auto px-4">
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
                    Elige a tu especialista
                </Typography>
                <Typography
                    variant="body2"
                    className="text-gray-600 text-center mb-4"
                >
                    Selecciona el profesional de tu preferencia
                </Typography>
            </motion.div>

            {doctors.length === 0 ? (
                <Alert severity="warning">
                    No hay doctores disponibles para esta especialidad en este momento.
                </Alert>
            ) : (
                <Grid container spacing={2}>
                    {doctors.map((doctor, index) => (
                        <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={doctor.id}>
                            <DoctorCard
                                doctor={doctor}
                                isSelected={selectedDoctor?.id === doctor.id}
                                onSelect={onSelect}
                                index={index}
                            />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
};

export default DoctorSelection;
