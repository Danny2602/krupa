import React, { useState } from 'react';
import { Container, Typography, Box, Button, Chip, TextField } from '@mui/material';
import { Add, MedicalServices } from '@mui/icons-material';
import { motion } from 'motion/react';
import { AdminTable } from '@/features/admin/components/AdminTable';
import { EmptyState } from '@/features/admin/components/EmptyState';
import { AdminFormModal } from '@/features/admin/components/AdminFormModal';
import { showToast } from '@/lib/toast';

const SpecialtiesPage = () => {
    // Datos de ejemplo
    const [specialties, setSpecialties] = useState([
        { id: 1, name: 'Cardiología', doctorCount: 5, createdAt: '2024-01-15' },
        { id: 2, name: 'Pediatría', doctorCount: 8, createdAt: '2024-02-20' },
        { id: 3, name: 'Dermatología', doctorCount: 3, createdAt: '2024-03-10' },
        { id: 4, name: 'Neurología', doctorCount: 4, createdAt: '2024-04-05' },
        { id: 5, name: 'Oftalmología', doctorCount: 6, createdAt: '2024-05-12' },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingSpecialty, setEditingSpecialty] = useState(null);
    const [formData, setFormData] = useState({ name: '' });

    const columns = [
        { field: 'id', label: 'ID' },
        { field: 'name', label: 'Nombre' },
        {
            field: 'doctorCount',
            label: 'Doctores',
            render: (row) => (
                <Chip
                    label={row.doctorCount || 0}
                    size="small"
                    color="primary"
                />
            )
        },
        {
            field: 'createdAt',
            label: 'Fecha de Creación',
            render: (row) => new Date(row.createdAt).toLocaleDateString('es-ES')
        }
    ];

    const handleOpenModal = (specialty = null) => {
        if (specialty) {
            setEditingSpecialty(specialty);
            setFormData({ name: specialty.name });
        } else {
            setEditingSpecialty(null);
            setFormData({ name: '' });
        }
        setIsModalOpen(true);
    };

    const handleSubmit = () => {
        if (!formData.name.trim()) {
            showToast.error('El nombre es requerido');
            return;
        }

        if (editingSpecialty) {
            // Editar
            setSpecialties(prev =>
                prev.map(s => s.id === editingSpecialty.id
                    ? { ...s, name: formData.name }
                    : s
                )
            );
            showToast.success('Especialidad actualizada exitosamente');
        } else {
            // Crear
            const newSpecialty = {
                id: Math.max(...specialties.map(s => s.id), 0) + 1,
                name: formData.name,
                doctorCount: 0,
                createdAt: new Date().toISOString().split('T')[0]
            };
            setSpecialties(prev => [...prev, newSpecialty]);
            showToast.success('Especialidad creada exitosamente');
        }

        setIsModalOpen(false);
        setFormData({ name: '' });
        setEditingSpecialty(null);
    };

    const handleEdit = (specialty) => {
        handleOpenModal(specialty);
    };

    const handleDelete = (specialty) => {
        if (window.confirm(`¿Estás seguro de eliminar la especialidad "${specialty.name}"?`)) {
            setSpecialties(prev => prev.filter(s => s.id !== specialty.id));
            showToast.success('Especialidad eliminada exitosamente');
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
                        Gestión de Especialidades
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
                        Añadir Especialidad
                    </Button>
                </Box>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {specialties.length === 0 ? (
                    <EmptyState message="No hay especialidades registradas. Añade la primera especialidad." />
                ) : (
                    <AdminTable
                        columns={columns}
                        data={specialties}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        searchPlaceholder="Buscar especialidad..."
                    />
                )}
            </motion.div>

            {/* Modal */}
            <AdminFormModal
                isOpen={isModalOpen}
                setIsOpen={setIsModalOpen}
                title={editingSpecialty ? 'Editar Especialidad' : 'Nueva Especialidad'}
                icon={MedicalServices}
                onSubmit={handleSubmit}
                submitText={editingSpecialty ? 'Actualizar' : 'Crear'}
            >
                <TextField
                    fullWidth
                    label="Nombre de la Especialidad"
                    value={formData.name}
                    onChange={(e) => setFormData({ name: e.target.value })}
                    placeholder="Ej: Cardiología"
                    required
                    autoFocus
                />
            </AdminFormModal>
        </Container>
    );
};

export default SpecialtiesPage;
