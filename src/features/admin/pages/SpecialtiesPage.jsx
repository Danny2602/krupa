import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, Chip, TextField } from '@mui/material';
import { Add, MedicalServices } from '@mui/icons-material';
import { motion } from 'motion/react';
import { AdminTable } from '@/features/admin/components/AdminTable';
import { EmptyState } from '@/features/admin/components/EmptyState';
import { AdminFormModal } from '@/features/admin/components/AdminFormModal';
import { showToast } from '@/lib/toast';
import { useSpecialtyApi } from '@/features/admin/hooks/useSpecialty';
import { ColorPicker } from '@/features/admin/components/ColorPicker';
import { EmojiPickerComponent } from '@/features/admin/components/EmojiPickerComponent';

const SpecialtiesPage = () => {
    // Datos de ejemplo
    const [specialties, setSpecialties] = useState([]);
    const { data, loading, error, fetchSpecialties, createSpecialty, updateSpecialty } = useSpecialtyApi();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingSpecialty, setEditingSpecialty] = useState(null);
    const [formData, setFormData] = useState({ name: '', color: '', icon: '' });

    const loadSpecialties = async () => {
        const result = await fetchSpecialties();
        setSpecialties(result);
    };
    useEffect(() => {
        loadSpecialties();
    }, []);

    const columns = [
        { field: 'id', label: 'ID', render: (row, index) => index + 1 },
        { field: 'name', label: 'Nombre' },
        {
            field: 'color', label: 'Color',
            render: (row) => (
                <Chip
                    sx={{
                        height: 24,
                        width: 24,
                        borderRadius: '50%',
                        backgroundColor: row.color,
                        border: '1px solid #ddd'
                    }}
                />
            )
        },
        {
            field: 'icon', label: 'Icono',
            render: (row) => (
                <Box
                    sx={{
                        fontSize: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minWidth: 40,
                        minHeight: 40
                    }}
                >
                    {row.icon || '😀'}
                </Box>
            )
        }
    ];

    const handleOpenModal = (specialty = null) => {

        if (specialty) {
            setEditingSpecialty(specialty);
            setFormData({ name: specialty.name, color: specialty.color, icon: specialty.icon });
        } else {
            setEditingSpecialty(null);
            setFormData({ name: '', color: '', icon: '' });
        }
        setIsModalOpen(true);
    };

    const handleSubmit = async () => {
        if (!formData.name.trim()) {
            showToast.error('El nombre es requerido');
            return;
        }
        if (!formData.color) {
            showToast.error('El color es requerido');
            return;
        }
        if (editingSpecialty) {
            try {
                const result = await updateSpecialty({ ...editingSpecialty, color: formData.color, icon: formData.icon });
                setSpecialties(prev =>
                    prev.map(s => s.id === editingSpecialty.id
                        ? { ...s, id: editingSpecialty.id, name: formData.name, color: formData.color, icon: formData.icon }
                        : s
                    )
                );
            } catch (error) {
                showToast.error(error.message);
            }

            showToast.success('Especialidad actualizada exitosamente');
        } else {
            try {
                const result = await createSpecialty(formData);
                loadSpecialties();
                showToast.success(result.message);

            } catch (error) {
                showToast.error(error.message);
            }
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
                <Box >
                    <TextField
                        fullWidth
                        label="Nombre de la Especialidad"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Ej: Cardiología"
                        required
                        autoFocus
                    />
                </Box>

                <ColorPicker
                    label="Color de la Especialidad"
                    value={formData.color}
                    onChange={(newColor) => setFormData(prev => ({ ...prev, color: newColor }))}
                    required
                />
                <EmojiPickerComponent
                    label="Icono de la Especialidad"
                    value={formData.icon}
                    onChange={(emoji) => setFormData(prev => ({ ...prev, icon: emoji }))}
                    required
                />
            </AdminFormModal>
        </Container>
    );
};

export default SpecialtiesPage;
