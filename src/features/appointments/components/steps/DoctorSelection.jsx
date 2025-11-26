import React from 'react';
import { Grid, Typography, Box, Alert } from '@mui/material';
import { motion } from 'motion/react';
import { DoctorCard } from '../DoctorCard';
import { KSkeleton } from '@/components/ui/KSkeleton';
import image1 from "@/assets/images/image1.jpg";

// Mock data - In real app, fetch based on selectedService
const doctorsData = {
    general: [
        { id: 1, nombre: "Dr. Juan Pérez", especialidad: "Medicina General", imagen: image1, rating: 4.8, experiencia: 15 },
        { id: 2, nombre: "Dra. Ana Martínez", especialidad: "Medicina General", imagen: image1, rating: 4.9, experiencia: 12 },
        { id: 3, nombre: "Dr. Carlos López", especialidad: "Medicina General", imagen: image1, rating: 4.7, experiencia: 10 },
    ],
    cardiologia: [
        { id: 4, nombre: "Dr. Roberto Sánchez", especialidad: "Cardiología", imagen: image1, rating: 5.0, experiencia: 20 },
        { id: 5, nombre: "Dra. Patricia Torres", especialidad: "Cardiología", imagen: image1, rating: 4.9, experiencia: 18 },
    ],
    pediatria: [
        { id: 6, nombre: "Dr. Carlos Rodríguez", especialidad: "Pediatría", imagen: image1, rating: 4.8, experiencia: 14 },
        { id: 7, nombre: "Dra. Sofía Ramírez", especialidad: "Pediatría", imagen: image1, rating: 4.9, experiencia: 11 },
        { id: 8, nombre: "Dr. Miguel Fernández", especialidad: "Pediatría", imagen: image1, rating: 4.7, experiencia: 9 },
    ],
    dermatologia: [
        { id: 9, nombre: "Dra. Laura Rodríguez", especialidad: "Dermatología", imagen: image1, rating: 4.9, experiencia: 13 },
        { id: 10, nombre: "Dr. Andrés Gómez", especialidad: "Dermatología", imagen: image1, rating: 4.8, experiencia: 16 },
    ],
    odontologia: [
        { id: 11, nombre: "Dra. María González", especialidad: "Odontología", imagen: image1, rating: 5.0, experiencia: 17 },
        { id: 12, nombre: "Dr. Pedro Herrera", especialidad: "Odontología", imagen: image1, rating: 4.8, experiencia: 12 },
    ],
    neurologia: [
        { id: 13, nombre: "Dra. María Gómez", especialidad: "Neurología", imagen: image1, rating: 5.0, experiencia: 22 },
        { id: 14, nombre: "Dr. Luis Castro", especialidad: "Neurología", imagen: image1, rating: 4.9, experiencia: 19 },
    ],
    nutricion: [
        { id: 15, nombre: "Lic. Ana Martínez", especialidad: "Nutrición", imagen: image1, rating: 4.8, experiencia: 8 },
        { id: 16, nombre: "Lic. Carmen Silva", especialidad: "Nutrición", imagen: image1, rating: 4.9, experiencia: 10 },
    ],
    oftalmologia: [
        { id: 17, nombre: "Dr. Jorge Vega", especialidad: "Oftalmología", imagen: image1, rating: 4.9, experiencia: 15 },
        { id: 18, nombre: "Dra. Isabel Morales", especialidad: "Oftalmología", imagen: image1, rating: 4.8, experiencia: 14 },
    ],
};

const DoctorSelection = ({ selectedService, selectedDoctor, onSelect }) => {
    const doctors = doctorsData[selectedService] || [];
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    }, [selectedService]);

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
