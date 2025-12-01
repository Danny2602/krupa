import React, { useState } from 'react';
import { Container, Grid, Typography, Box, Button } from '@mui/material';
import {
    People,
    LocalHospital,
    MedicalServices,
    EventAvailable
} from '@mui/icons-material';
import { motion } from 'motion/react';
import { useAuth } from '@/context/AuthContext';
import { AdminWelcomeBanner } from '@/features/admin/components/AdminWelcomeBanner';
import { StatsCard } from '@/features/user/components/StatsCard';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    // TODO: Estos datos deben venir de la API
    const stats = {
        totalUsers: 0,
        totalDoctors: 0,
        totalSpecialties: 0,
        totalAppointments: 0
    };

    const quickActions = [
        {
            title: 'Gestionar Usuarios',
            description: 'Administrar roles y permisos',
            path: '/admin/users',
            color: '#667eea'
        },
        {
            title: 'Gestionar Doctores',
            description: 'Añadir o editar doctores',
            path: '/admin/doctors',
            color: '#f093fb'
        },
        {
            title: 'Gestionar Especialidades',
            description: 'Administrar especialidades médicas',
            path: '/admin/specialties',
            color: '#4caf50'
        },
        {
            title: 'Ver Citas',
            description: 'Revisar todas las citas',
            path: '/admin/appointments',
            color: '#ffa726'
        }
    ];

    return (
        <Container maxWidth="lg" className="py-6 space-y-6">
            {/* Welcome Banner */}
            <AdminWelcomeBanner user={user} />

            {/* Statistics Cards */}
            <Box>
                <Typography variant="h5" className="font-bold text-gray-800 mb-4">
                    Estadísticas Generales
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <StatsCard
                            title="Total Usuarios"
                            value={stats.totalUsers}
                            icon={People}
                            color="#667eea"
                            index={0}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <StatsCard
                            title="Total Doctores"
                            value={stats.totalDoctors}
                            icon={LocalHospital}
                            color="#f093fb"
                            index={1}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <StatsCard
                            title="Especialidades"
                            value={stats.totalSpecialties}
                            icon={MedicalServices}
                            color="#4caf50"
                            index={2}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <StatsCard
                            title="Total Citas"
                            value={stats.totalAppointments}
                            icon={EventAvailable}
                            color="#ffa726"
                            index={3}
                        />
                    </Grid>
                </Grid>
            </Box>

            {/* Quick Actions */}
            <Box>
                <Typography variant="h5" className="font-bold text-gray-800 mb-4">
                    Accesos Rápidos
                </Typography>
                <Grid container spacing={3}>
                    {quickActions.map((action, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <Box
                                    onClick={() => navigate(action.path)}
                                    sx={{
                                        p: 3,
                                        borderRadius: 2,
                                        background: `linear-gradient(135deg, ${action.color}15 0%, ${action.color}05 100%)`,
                                        borderLeft: `4px solid ${action.color}`,
                                        cursor: 'pointer',
                                        transition: 'all 0.3s',
                                        '&:hover': {
                                            boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                                        }
                                    }}
                                >
                                    <Typography variant="h6" className="font-bold mb-1" sx={{ color: action.color }}>
                                        {action.title}
                                    </Typography>
                                    <Typography variant="body2" className="text-gray-600">
                                        {action.description}
                                    </Typography>
                                </Box>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default AdminDashboard;
