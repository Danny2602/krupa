import React from 'react';
import {
    Grid,
    Typography,
    Box,
    CircularProgress,
    Alert,
    Container,
    Divider
} from '@mui/material';
import {
    EventAvailable,
    Schedule,
    CheckCircle,
    PendingActions
} from '@mui/icons-material';
import { motion } from 'motion/react';
import { useAuth } from '@/context/AuthContext';
import { useAppointments } from '../hooks/useAppointments';
import { AppointmentCard } from '../components/AppointmentCard';
import { StatsCard } from '../components/StatsCard';
import { WelcomeBanner } from '../components/WelcomeBanner';

const UserHomePage = () => {
    const { user } = useAuth();
    const { appointments, loading, error } = useAppointments();

    // Calculate statistics
    const stats = {
        total: appointments.length,
        upcoming: appointments.filter(apt => new Date(apt.date) > new Date()).length,
        pending: appointments.filter(apt => apt.status === 'pending').length,
        confirmed: appointments.filter(apt => apt.status === 'confirmed').length
    };

    if (loading) {
        return (
            <Container maxWidth="lg" className="py-8">
                <Box className="flex justify-center items-center min-h-[60vh]">
                    <CircularProgress size={60} />
                </Box>
            </Container>
        );
    }

    return (
        <Container maxWidth="lg" className="py-6 space-y-6">
            {/* Welcome Banner */}
            <WelcomeBanner user={user} />

            {/* Statistics Cards */}
            <Box>
                <Typography variant="h5" className="font-bold text-gray-800 mb-4">
                    Resumen
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <StatsCard
                            title="Total de Citas"
                            value={stats.total}
                            icon={EventAvailable}
                            color="#667eea"
                            index={0}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <StatsCard
                            title="Próximas"
                            value={stats.upcoming}
                            icon={Schedule}
                            color="#f093fb"
                            index={1}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <StatsCard
                            title="Pendientes"
                            value={stats.pending}
                            icon={PendingActions}
                            color="#ffa726"
                            index={2}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <StatsCard
                            title="Confirmadas"
                            value={stats.confirmed}
                            icon={CheckCircle}
                            color="#4caf50"
                            index={3}
                        />
                    </Grid>
                </Grid>
            </Box>

            <Divider />

            {/* Appointments Section */}
            <Box>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Typography variant="h5" className="font-bold text-gray-800 mb-4">
                        Próximas Citas
                    </Typography>
                </motion.div>

                {error && (
                    <Alert severity="error" className="mb-4">
                        {error}
                    </Alert>
                )}

                {appointments.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Alert severity="info">
                            No tienes citas programadas en este momento.
                        </Alert>
                    </motion.div>
                ) : (
                    <Grid container spacing={3}>
                        {appointments.map((appointment, index) => (
                            <Grid item xs={12} md={6} lg={4} key={appointment.id}>
                                <AppointmentCard
                                    appointment={appointment}
                                    index={index}
                                />
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Box>
        </Container>
    );
};

export default UserHomePage;