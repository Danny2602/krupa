import React, { useState } from 'react';
import {
    Typography, Box, Tabs, Tab, Button, Card, CardContent, Chip,
    IconButton, Grid, ToggleButton, ToggleButtonGroup, Container
} from '@mui/material';
import {
    CheckCircle as CheckIcon,
    Cancel as CancelIcon,
    CalendarMonth as CalendarIcon,
    ViewList as ListIcon,
    AccessTime as TimeIcon,
    Event as DateIcon
} from '@mui/icons-material';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import { mockAppointments } from '../data/mockAppointments';
import DoctorCalendar from '../components/DoctorCalendar';

dayjs.locale('es');

export default function DoctorAppointmentsPage() {
    const [viewMode, setViewMode] = useState('list'); // 'lista o calendario
    const [tabValue, setTabValue] = useState(0);
    const [appointments, setAppointments] = useState(mockAppointments);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const handleViewChange = (event, newView) => {
        if (newView !== null) {
            setViewMode(newView);
        }
    };

    const handleStatusChange = (id, newStatus) => {
        setAppointments(prev => prev.map(app =>
            app.id === id ? { ...app, status: newStatus } : app
        ));
    };

    const getFilteredAppointments = () => {
        const statusMap = {
            0: 'pending',
            1: 'confirmed',
            2: 'cancelled' // agrupando canceladas y rechazadas
        };

        if (tabValue === 2) {
            return appointments.filter(app => ['cancelled', 'rejected'].includes(app.status));
        }

        return appointments.filter(app => app.status === statusMap[tabValue]);
    };

    const filteredAppointments = getFilteredAppointments();

    const getStatusChip = (status) => {
        const config = {
            pending: { label: 'Pendiente', color: 'warning' },
            confirmed: { label: 'Confirmada', color: 'success' },
            cancelled: { label: 'Cancelada', color: 'error' },
            rejected: { label: 'Rechazada', color: 'error' },
            completed: { label: 'Completada', color: 'info' }
        };
        const { label, color } = config[status] || { label: status, color: 'default' };
        return <Chip label={label} color={color} size="small" variant="outlined" />;
    };

    return (
        <Container maxWidth="lg" className="py-6 space-y-6">
            <div className="p-4 md:p-8 space-y-6">
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <Typography variant="h4" className="font-bold text-gray-800">
                            Gestión de Citas
                        </Typography>
                        <Typography variant="body1" className="text-gray-500">
                            Administra tu agenda y solicitudes de pacientes
                        </Typography>
                    </div>

                    <ToggleButtonGroup
                        value={viewMode}
                        exclusive
                        onChange={handleViewChange}
                        aria-label="view mode"
                        size="small"
                    >
                        <ToggleButton value="list" aria-label="list">
                            <ListIcon className="mr-2" /> Lista
                        </ToggleButton>
                        <ToggleButton value="calendar" aria-label="calendar">
                            <CalendarIcon className="mr-2" /> Calendario
                        </ToggleButton>
                    </ToggleButtonGroup>
                </header>

                {viewMode === 'calendar' ? (
                    <div className="animate-in fade-in zoom-in duration-300">
                        <DoctorCalendar
                            appointments={appointments}
                            onEventClick={(props) => alert(`Cita con ${props.patientName}\nMotivo: ${props.reason}`)}
                        />
                    </div>
                ) : (
                    <div className="animate-in fade-in zoom-in duration-300 space-y-6">
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={tabValue} onChange={handleTabChange} aria-label="appointment tabs" variant="scrollable" scrollButtons="auto">
                                <Tab label={`Por Confirmar (${appointments.filter(a => a.status === 'pending').length})`} />
                                <Tab label="Confirmadas" />
                                <Tab label="Canceladas / No Confirmadas" />
                            </Tabs>
                        </Box>

                        {filteredAppointments.length === 0 ? (
                            <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                                <Typography variant="h6" color="textSecondary">
                                    No hay citas en esta sección
                                </Typography>
                            </div>
                        ) : (
                            <Grid container spacing={3}>
                                {filteredAppointments.map((app) => (
                                    <Grid item size={{ xs: 12, md: 6, lg: 4 }} key={app.id}>
                                        <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-l-4"
                                            style={{ borderLeftColor: app.status === 'pending' ? '#F59E0B' : app.status === 'confirmed' ? '#10B981' : '#EF4444' }}>
                                            <CardContent>
                                                <div className="flex justify-between items-start mb-3">
                                                    <div>
                                                        <Typography variant="h6" className="font-bold">
                                                            {app.patientName}
                                                        </Typography>
                                                        <Typography variant="caption" className="text-gray-500">
                                                            {app.patientAge} años • {app.type}
                                                        </Typography>
                                                    </div>
                                                    {getStatusChip(app.status)}
                                                </div>

                                                <div className="space-y-2 mb-4">
                                                    <div className="flex items-center text-gray-700">
                                                        <DateIcon fontSize="small" className="mr-2 text-indigo-500" />
                                                        <Typography variant="body2">
                                                            {dayjs(app.date).format('dddd, D [de] MMMM')}
                                                        </Typography>
                                                    </div>
                                                    <div className="flex items-center text-gray-700">
                                                        <TimeIcon fontSize="small" className="mr-2 text-indigo-500" />
                                                        <Typography variant="body2">
                                                            {dayjs(app.date).format('h:mm A')}
                                                        </Typography>
                                                    </div>
                                                    <Typography variant="body2" className="text-gray-600 bg-gray-100 p-2 rounded-md mt-2">
                                                        "{app.reason}"
                                                    </Typography>
                                                </div>

                                                <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100">
                                                    {app.status === 'pending' && (
                                                        <>
                                                            <Button
                                                                variant="contained"
                                                                color="success"
                                                                fullWidth
                                                                startIcon={<CheckIcon />}
                                                                onClick={() => handleStatusChange(app.id, 'confirmed')}
                                                            >
                                                                Aceptar
                                                            </Button>
                                                            <Button
                                                                variant="outlined"
                                                                color="error"
                                                                fullWidth
                                                                startIcon={<CancelIcon />}
                                                                onClick={() => handleStatusChange(app.id, 'rejected')}
                                                            >
                                                                Rechazar
                                                            </Button>
                                                        </>
                                                    )}
                                                    {app.status === 'confirmed' && (
                                                        <Button
                                                            variant="text"
                                                            color="error"
                                                            fullWidth
                                                            onClick={() => handleStatusChange(app.id, 'cancelled')}
                                                        >
                                                            Cancelar Cita
                                                        </Button>
                                                    )}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        )}
                    </div>
                )}
            </div>
        </Container>
    );
}
