import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, Avatar, Chip, TextField, MenuItem } from '@mui/material';
import { Add, LocalHospital } from '@mui/icons-material';
import { motion } from 'motion/react';
import { AdminTable } from '@/features/admin/components/AdminTable';
import { EmptyState } from '@/features/admin/components/EmptyState';
import { AdminFormModal } from '@/features/admin/components/AdminFormModal';
import { showToast } from '@/lib/toast';
import { useDoctorApi } from '@/features/admin/hooks/useDoctor';
import { useSpecialtyApi } from '@/features/admin/hooks/useSpecialty';
import { MultiSelectChip } from '@/features/admin/components/MultiSelectChip';
import { InputImage } from '@/components/inputImage';
const DoctorsPage = () => {
    const [doctors, setDoctors] = useState([]);
    const [specialties, setSpecialties] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingDoctor, setEditingDoctor] = useState(null);
    const [photoPreview, setPhotoPreview] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        tlf: '',
        biography: '',
        specialties: []
    });
    const { data, loading, error, fetchDoctors, createDoctor, updateDoctor, deleteDoctor } = useDoctorApi();
    const { data: specialtiesData, loading: specialtiesLoading, error: specialtiesError, fetchSpecialties } = useSpecialtyApi();
    useEffect(() => {
        loadDoctors();
    }, []);

    const loadDoctors = async () => {
        const result = await fetchDoctors();
        const specialtiesResult = await fetchSpecialties();
        setDoctors(result);
        setSpecialties(specialtiesResult);
    };

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
            field: 'doctorSpecialty',
            label: 'Especialidades',
            render: (row) => (
                <Box className="flex gap-1 flex-wrap">
                    {row.doctorSpecialty?.map((specialty, idx) => (
                        <Chip
                            key={idx}
                            label={specialty.specialty.name}
                            size="small"
                            style={{ backgroundColor: specialty.specialty.color, color: 'white' }}
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
            setPhotoPreview(doctor.photo || null);
            setFormData({
                name: doctor.name,
                lastName: doctor.lastName,
                email: doctor.email,
                tlf: doctor.tlf,
                biography: doctor.biography || '',
                photo: doctor.photo || null,
                specialties: doctor.doctorSpecialty.map((specialty) => (specialty.specialty)) || []
            });
        } else {
            setEditingDoctor(null);
            setPhotoPreview(null);
            setFormData({
                name: '',
                lastName: '',
                email: '',
                tlf: '',
                biography: '',
                photo: null,
                specialties: []
            });
        }
        setIsModalOpen(true);
    };


    const handleSubmit = async () => {
        if (!formData.name.trim() || !formData.lastName.trim() || !formData.email.trim()) {
            showToast.error('Nombre, apellido y email son requeridos');
            return;
        }

        if (editingDoctor) {
            const editDoctor = {
                id: editingDoctor.id,
                ...formData,
                specialties: formData.specialties.map((specialty) => (specialty.id)),
            };
            console.log("editDoctor", editDoctor);
            const result = await updateDoctor(editDoctor);

            if (result) {
                setDoctors(prev =>
                    prev.map(d => d.id === result.id
                        ? { ...d, ...result }
                        : d
                    )
                );
                showToast.success('Doctor actualizado exitosamente');
                setIsModalOpen(false);
                setEditingDoctor(null);
            }
        } else {
            const newDoctor = {
                ...formData,
                specialties: formData.specialties.map((specialty) => (specialty.id)),

            };
            console.log("newDoctor", newDoctor);
            const result = await createDoctor(newDoctor);
            if (result) {
                setDoctors(prev => [...prev, result]);
                showToast.success('Doctor creado exitosamente');
                setIsModalOpen(false);
                setEditingDoctor(null);
            }
        }
    };

    const handleEdit = (doctor) => {
        handleOpenModal(doctor);
    };

    const handleDelete = async (doctor) => {
        if (window.confirm(`¿Estás seguro de eliminar al doctor "${doctor.name} ${doctor.lastName}"?`)) {
            const result = await deleteDoctor(doctor.id);
            if (result) {
                setDoctors(prev => prev.filter(d => d.id !== doctor.id));
                showToast.success('Doctor eliminado exitosamente');
            }
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
                <div className="grid md:grid-cols-[30%_70%] grid-cols-1 gap-1">
                    <div className="p-1 items-center justify-center flex">
                        <InputImage
                            photoPreview={photoPreview}
                            setPhotoPreview={setPhotoPreview}
                            setFormData={setFormData}
                        />
                    </div>
                    <div className="">
                        <Box className="mb-2">
                            <TextField
                                fullWidth
                                label="Nombre"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                autoFocus

                            />
                        </Box>

                        <Box className="mb-2">
                            <TextField
                                fullWidth
                                label="Apellido"
                                value={formData.lastName}
                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                required
                            />
                        </Box>
                        <Box className="mb-2">
                            <TextField
                                fullWidth
                                label="Email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </Box>
                    </div>

                </div>
                <Box>
                    <TextField
                        fullWidth
                        label="Teléfono"
                        value={formData.tlf}
                        onChange={(e) => setFormData({ ...formData, tlf: e.target.value })}
                    />
                </Box>
                <Box>
                    <MultiSelectChip
                        label="Especialidades"
                        value={formData.specialties}
                        onChange={(newSpecialties) => setFormData({ ...formData, specialties: newSpecialties })}
                        options={specialties}
                        getOptionLabel={(specialty) => specialty.name}
                        getOptionValue={(specialty) => ({ id: specialty.id, name: specialty.name, color: specialty.color })}
                        getOptionColor={(specialty) => specialty.color}
                    />
                </Box>
                <Box>
                    <TextField
                        fullWidth
                        label="Biografía"
                        multiline
                        rows={3}
                        value={formData.biography}
                        onChange={(e) => setFormData({ ...formData, biography: e.target.value })}
                    />
                </Box>
            </AdminFormModal>
        </Container>
    );
};

export default DoctorsPage;
