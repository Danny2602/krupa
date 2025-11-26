import React from 'react';
import { Grid, Typography, Card, CardContent, CardActionArea, Box } from '@mui/material';
import { motion } from 'motion/react';
import { KSkeleton } from '@/components/ui/KSkeleton';

const services = [
    { id: 'general', label: 'Medicina General', icon: '🩺', color: '#667eea' },
    { id: 'pediatria', label: 'Pediatría', icon: '👶', color: '#f093fb' },
    { id: 'dermatologia', label: 'Dermatología', icon: '🧴', color: '#4caf50' },
    { id: 'cardiologia', label: 'Cardiología', icon: '❤️', color: '#ff6b6b' },
    { id: 'odontologia', label: 'Odontología', icon: '🦷', color: '#4ecdc4' },
    { id: 'neurologia', label: 'Neurología', icon: '🧠', color: '#a29bfe' },
    { id: 'nutricion', label: 'Nutrición', icon: '🥗', color: '#ffa726' },
    { id: 'oftalmologia', label: 'Oftalmología', icon: '👁️', color: '#764ba2' },
];

const ServiceSelection = ({ selectedService, onSelect }) => {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <Box className="w-full max-w-5xl mx-auto px-4">
                <Box sx={{ mb: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <KSkeleton variant="text" width={300} height={40} sx={{ mb: 1 }} />
                    <KSkeleton variant="text" width={200} height={24} />
                </Box>
                <Grid container spacing={2} justifyContent="center">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <Grid item size={{ xs: 6, sm: 4, md: 3 }} key={item}>
                            <KSkeleton variant="rectangular" height={160} sx={{ borderRadius: 2 }} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        );
    }

    return (
        <Box className="w-full max-w-5xl mx-auto px-4">
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
                    ¿Qué especialidad necesitas?
                </Typography>
                <Typography
                    variant="body2"
                    className="text-gray-600 text-center mb-4"
                >
                    Selecciona el servicio médico que requieres
                </Typography>
            </motion.div>

            <Grid container spacing={2} justifyContent="center">
                {services.map((service, index) => (
                    <Grid item size={{ xs: 6, sm: 4, md: 3 }} key={service.id}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.03 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Card
                                sx={{
                                    border: selectedService === service.id
                                        ? `3px solid ${service.color}`
                                        : '1px solid #e0e0e0',
                                    backgroundColor: selectedService === service.id
                                        ? `${service.color}15`
                                        : 'white',
                                    height: '100%',
                                    transition: 'all 0.3s ease'
                                }}
                                className="hover:shadow-lg"
                            >
                                <CardActionArea
                                    onClick={() => onSelect(service.id)}
                                    sx={{ height: '100%', p: 1.5 }}
                                >
                                    <CardContent sx={{ textAlign: 'center', p: 1 }}>
                                        <Box
                                            className="mb-2 flex items-center justify-center"
                                            sx={{
                                                fontSize: '2.5rem',
                                                filter: selectedService === service.id
                                                    ? 'none'
                                                    : 'grayscale(0.3)'
                                            }}
                                        >
                                            {service.icon}
                                        </Box>
                                        <Typography
                                            variant="body2"
                                            className="font-semibold"
                                            sx={{
                                                color: selectedService === service.id
                                                    ? service.color
                                                    : '#333',
                                                fontSize: '0.85rem'
                                            }}
                                        >
                                            {service.label}
                                        </Typography>
                                        {selectedService === service.id && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="mt-1"
                                            >
                                                <Typography
                                                    variant="caption"
                                                    className="font-semibold"
                                                    sx={{ color: service.color, fontSize: '0.65rem' }}
                                                >
                                                    ✓ Seleccionado
                                                </Typography>
                                            </motion.div>
                                        )}
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ServiceSelection;
