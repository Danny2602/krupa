import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import {
    Grid,
    Typography,
    Box,
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
import { useAppointmentApi } from '@/features/user/hooks/useAppointments';
import { AppointmentCard } from '@/features/user/components/AppointmentCard';
import { StatsCard } from '@/features/user/components/StatsCard';
import { WelcomeBanner } from '@/features/user/components/WelcomeBanner';
import { KSkeleton } from '@/components/ui/KSkeleton';
import { showToast } from "@/lib/toast";

const UserHomePage = () => {
    const { user } = useAuth();
    const { loading, error, fetchAppointmentsForUser } = useAppointmentApi();
    const [filteredAppointments, setFilteredAppointments] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const [proxAppointments, setProxAppointments] = useState(0);

    useEffect(() => {
        loadAppointments();
    }, []);

    const loadAppointments = async () => {
        try {
            const result = await fetchAppointmentsForUser();
            setAppointments(result);

            const filteredAppointments = result.appointments.filter(appointment => dayjs(appointment.startTime).toDate() >= new Date());
            setProxAppointments(filteredAppointments.length);
            setFilteredAppointments(filteredAppointments);

        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Error al cargar la citas';
            showToast.error(errorMessage);
        }
    };

    if (loading) {
        return (
            <Container maxWidth="lg" className="py-6 space-y-6">
                {/* Welcome Banner Skeleton */}
                <Box sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper', mb: 4 }}>
                    <KSkeleton variant="text" width="40%" height={40} sx={{ mb: 1 }} />
                    <KSkeleton variant="text" width="60%" height={24} />
                </Box>

                {/* Stats Cards Skeleton */}
                <Box>
                    <KSkeleton variant="text" width={150} height={32} sx={{ mb: 4 }} />
                    <Grid container spacing={3}>
                        {[1, 2, 3, 4].map((item) => (
                            <Grid item xs={12} sm={6} md={3} key={item}>
                                <KSkeleton variant="rectangular" height={140} sx={{ borderRadius: 2 }} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Divider />

                {/* Appointments Skeleton */}
                <Box>
                    <KSkeleton variant="text" width={200} height={32} sx={{ mb: 4 }} />
                    <Grid container spacing={3}>
                        {[1, 2, 3].map((item) => (
                            <Grid item xs={12} md={6} lg={4} key={item}>
                                <KSkeleton variant="rectangular" height={200} sx={{ borderRadius: 2 }} />
                            </Grid>
                        ))}
                    </Grid>
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
                            value={appointments.total}
                            icon={EventAvailable}
                            color="#667eea"
                            index={0}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <StatsCard
                            title="Próximas"
                            value={proxAppointments}
                            icon={Schedule}
                            color="#f093fb"
                            index={1}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <StatsCard
                            title="Pendientes"
                            value={appointments.pending}
                            icon={PendingActions}
                            color="#ffa726"
                            index={2}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <StatsCard
                            title="Confirmadas"
                            value={appointments.completed}
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
                        {filteredAppointments
                            .map((appointment, index) => (
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