import React, { useState } from 'react';
import { Container, Typography, Box, Chip } from '@mui/material';
import { motion } from 'motion/react';
import { AdminTable } from '@/features/admin/components/AdminTable';
import { EmptyState } from '@/features/admin/components/EmptyState';

const AppointmentsPage = () => {
    // TODO: Estos datos deben venir de la API
    const [appointments, setAppointments] = useState([]);

    const getStatusColor = (status) => {
        switch (status) {
            case 'CONFIRMED':
                return { bg: '#4caf50', label: 'Confirmada' };
            case 'PENDING':
                return { bg: '#ffa726', label: 'Pendiente' };
            case 'CANCELED':
                return { bg: '#ef4444', label: 'Cancelada' };
            default:
                return { bg: '#9ca3af', label: status };
        }
    };

    const columns = [
        { field: 'id', label: 'ID' },
        {
            field: 'userName',
            label: 'Paciente',
            render: (row) => row.user?.name || 'N/A'
        },
        {
            field: 'doctorName',
            label: 'Doctor',
            render: (row) => `${row.doctor?.name} ${row.doctor?.lastName}` || 'N/A'
        },
        {
            field: 'startTime',
            label: 'Fecha y Hora',
            render: (row) => new Date(row.startTime).toLocaleString('es-ES')
        },
        {
            field: 'status',
            label: 'Estado',
            render: (row) => {
                const statusInfo = getStatusColor(row.status);
                return (
                    <Chip
                        label={statusInfo.label}
                        size="small"
                        sx={{
                            backgroundColor: statusInfo.bg,
                            color: 'white',
                            fontWeight: 'bold'
                        }}
                    />
                );
            }
        },
        {
            field: 'notes',
            label: 'Notas',
            render: (row) => row.notes || '-'
        }
    ];

    const handleView = (appointment) => {
        // TODO: Implementar vista de detalles
        console.log('Ver cita:', appointment);
    };

    const handleEdit = (appointment) => {
        // TODO: Implementar edición de estado
        console.log('Editar cita:', appointment);
    };

    const handleDelete = (appointment) => {
        // TODO: Implementar cancelación
        console.log('Cancelar cita:', appointment);
    };

    return (
        <Container maxWidth="lg" className="py-6">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Box className="flex justify-between items-center mb-6">
                    <Typography variant="h4" className="font-bold text-gray-800">
                        Gestión de Citas
                    </Typography>
                </Box>

                {/* TODO: Añadir filtros por estado, fecha, doctor */}
                <Box className="mb-4">
                    <Typography variant="body2" className="text-gray-600">
                        Filtros: (Por implementar - Estado, Fecha, Doctor)
                    </Typography>
                </Box>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {appointments.length === 0 ? (
                    <EmptyState message="No hay citas registradas en el sistema." />
                ) : (
                    <AdminTable
                        columns={columns}
                        data={appointments}
                        onView={handleView}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        searchPlaceholder="Buscar cita..."
                    />
                )}
            </motion.div>
        </Container>
    );
};

export default AppointmentsPage;
