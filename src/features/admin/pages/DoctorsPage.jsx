import React, { useState } from 'react';
import { Container, Typography, Box, Button, Avatar, Chip, TextField, MenuItem } from '@mui/material';
import { Add, LocalHospital } from '@mui/icons-material';
import { motion } from 'motion/react';
import { AdminTable } from '@/features/admin/components/AdminTable';
import { EmptyState } from '@/features/admin/components/EmptyState';
import { AdminFormModal } from '@/features/admin/components/AdminFormModal';
import { showToast } from '@/lib/toast';

const DoctorsPage = () => {
    // Datos de ejemplo
    const [doctors, setDoctors] = useState([
        {
            id: 1,
            name: 'Juan',
            lastName: 'Pérez García',
            email: 'juan.perez@hospital.com',
            tlf: '555-0101',
            photo: '',
            specialties: ['Cardiología'],
            biography: 'Especialista en cardiología con 15 años de experiencia'
        },
        {
            id: 2,
            name: 'María',
            lastName: 'González López',
            email: 'maria.gonzalez@hospital.com',
            tlf: '555-0102',
            photo: '',
            specialties: ['Pediatría', 'Dermatología'],
            biography: 'Pediatra certificada'
        },
        {
            id: 3,
            name: 'Carlos',
            lastName: 'Rodríguez Martín',
            email: 'carlos.rodriguez@hospital.com',
            tlf: '555-0103',
            photo: '',
            specialties: ['Neurología'],
            biography: 'Neurólogo especializado en tratamientos innovadores'
        },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingDoctor, setEditingDoctor] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        tlf: '',
        biography: '',
        specialties: []
    });

    const availableSpecialties = ['Cardiología', 'Pediatría', 'Dermatología', 'Neurología', 'Oftalmología'];

    const columns = [
        {
            field: 'photo',
            label: 'Foto',
            render: (row) => (
                <Avatar src={row.photo} alt={row.name}>
                    {row.name?.charAt(0)}
                </Avatar>
            )
        },
        { field: 'name', label: 'Nombre' },
        { field: 'lastName', label: 'Apellido' },
        { field: 'email', label: 'Email' },
        {
            field: 'specialties',
            label: 'Especialidades',
            render: (row) => (
                <Box className="flex gap-1 flex-wrap">
                    {row.specialties?.map((specialty, idx) => (
                        <Chip
                            key={idx}
                            label={specialty}
                            size="small"
                            color="primary"
                            variant="outlined"
                        />
                    )) || <span className="text-gray-400">Sin especialidades</span>}
                </Box>
            )
        },
        { field: 'tlf', label: 'Teléfono' }
    ];

    const handleOpenModal = (doctor = null) => {
        if (doctor) {
            setEditingDoctor(doctor);
            setFormData({
                name: doctor.name,
                lastName: doctor.lastName,
                email: doctor.email,
                tlf: doctor.tlf,
                biography: doctor.biography || '',
                specialties: doctor.specialties || []
            });
        } else {
            setEditingDoctor(null);
            setFormData({
                name: '',
                lastName: '',
                email: '',
                tlf: '',
                biography: '',
                specialties: []
            });
        }
        setIsModalOpen(true);
    };

    const handleSubmit = () => {
        if (!formData.name.trim() || !formData.lastName.trim() || !formData.email.trim()) {
            showToast.error('Nombre, apellido y email son requeridos');
            return;
        }

        if (editingDoctor) {
            // Editar
            setDoctors(prev =>
                prev.map(d => d.id === editingDoctor.id
                    ? { ...d, ...formData }
                    : d
                )
            );
            showToast.success('Doctor actualizado exitosamente');
        } else {
            // Crear
            const newDoctor = {
                id: Math.max(...doctors.map(d => d.id), 0) + 1,
                ...formData,
                photo: ''
            };
            setDoctors(prev => [...prev, newDoctor]);
            showToast.success('Doctor creado exitosamente');
        }

        setIsModalOpen(false);
        setEditingDoctor(null);
    };

    const handleEdit = (doctor) => {
        handleOpenModal(doctor);
    };

    const handleDelete = (doctor) => {
        if (window.confirm(`¿Estás seguro de eliminar al doctor "${doctor.name} ${doctor.lastName}"?`)) {
            setDoctors(prev => prev.filter(d => d.id !== doctor.id));
            showToast.success('Doctor eliminado exitosamente');
        }
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
                        Gestión de Doctores
                    </Typography>
                    <Button
                        variant="contained"
                        startIcon={<Add />}
                        onClick={() => handleOpenModal()}
                        sx={{
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            '&:hover': {
                                background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)'
                            }
                        }}
                    >
                        Añadir Doctor
                    </Button>
                </Box>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {doctors.length === 0 ? (
                    <EmptyState message="No hay doctores registrados. Añade el primer doctor." />
                ) : (
                    <AdminTable
                        columns={columns}
                        data={doctors}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        searchPlaceholder="Buscar doctor..."
                    />
                )}
            </motion.div>

            {/* Modal */}
            <AdminFormModal
                isOpen={isModalOpen}
                setIsOpen={setIsModalOpen}
                title={editingDoctor ? 'Editar Doctor' : 'Nuevo Doctor'}
                icon={LocalHospital}
                onSubmit={handleSubmit}
                submitText={editingDoctor ? 'Actualizar' : 'Crear'}
            >
                <div className="grid grid-cols-2 gap-4">
                    <TextField
                        fullWidth
                        label="Nombre"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        autoFocus
                    />
                    <TextField
                        fullWidth
                        label="Apellido"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                    />
                </div>
                <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                />
                <TextField
                    fullWidth
                    label="Teléfono"
                    value={formData.tlf}
                    onChange={(e) => setFormData({ ...formData, tlf: e.target.value })}
                />
                <TextField
                    fullWidth
                    select
                    label="Especialidades"
                    value={formData.specialties}
                    onChange={(e) => setFormData({ ...formData, specialties: e.target.value })}
                    SelectProps={{
                        multiple: true,
                        renderValue: (selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} size="small" />
                                ))}
                            </Box>
                        )
                    }}
                >
                    {availableSpecialties.map((specialty) => (
                        <MenuItem key={specialty} value={specialty}>
                            {specialty}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    fullWidth
                    label="Biografía"
                    multiline
                    rows={3}
                    value={formData.biography}
                    onChange={(e) => setFormData({ ...formData, biography: e.target.value })}
                />
            </AdminFormModal>
        </Container>
    );
};

export default DoctorsPage;
