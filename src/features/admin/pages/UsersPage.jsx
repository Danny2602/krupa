import React, { useState } from 'react';
import { Container, Typography, Box, Chip, Avatar, TextField, MenuItem } from '@mui/material';
import { People } from '@mui/icons-material';
import { motion } from 'motion/react';
import { AdminTable } from '@/features/admin/components/AdminTable';
import { EmptyState } from '@/features/admin/components/EmptyState';
import { AdminFormModal } from '@/features/admin/components/AdminFormModal';
import { showToast } from '@/lib/toast';

const UsersPage = () => {
    // Datos de ejemplo
    const [users, setUsers] = useState([
        {
            id: 1,
            name: 'Ana Martínez',
            email: 'ana.martinez@email.com',
            role: 'USER',
            tlf: '555-1001',
            avatar: '',
            createdAt: '2024-01-10'
        },
        {
            id: 2,
            name: 'Pedro Sánchez',
            email: 'pedro.sanchez@email.com',
            role: 'ADMIN',
            tlf: '555-1002',
            avatar: '',
            createdAt: '2024-02-15'
        },
        {
            id: 3,
            name: 'Laura Fernández',
            email: 'laura.fernandez@email.com',
            role: 'USER',
            tlf: '555-1003',
            avatar: '',
            createdAt: '2024-03-20'
        },
        {
            id: 4,
            name: 'Ricardo Torres',
            email: 'ricardo.torres@email.com',
            role: 'SUPER_ADMIN',
            tlf: '555-1004',
            avatar: '',
            createdAt: '2024-04-05'
        },
        {
            id: 5,
            name: 'Carmen López',
            email: 'carmen.lopez@email.com',
            role: 'USER',
            tlf: '555-1005',
            avatar: '',
            createdAt: '2024-05-12'
        }
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState(null);
    const [formData, setFormData] = useState({ role: 'USER' });

    const getRoleColor = (role) => {
        switch (role) {
            case 'SUPER_ADMIN':
                return { bg: '#f57922', label: 'Super Admin' };
            case 'ADMIN':
                return { bg: '#667eea', label: 'Admin' };
            case 'USER':
            default:
                return { bg: '#4caf50', label: 'Usuario' };
        }
    };

    const columns = [
        {
            field: 'avatar',
            label: 'Avatar',
            render: (row) => (
                <Avatar src={row.avatar} alt={row.name}>
                    {row.name?.charAt(0)}
                </Avatar>
            )
        },
        { field: 'name', label: 'Nombre' },
        { field: 'email', label: 'Email' },
        {
            field: 'role',
            label: 'Rol',
            render: (row) => {
                const roleInfo = getRoleColor(row.role);
                return (
                    <Chip
                        label={roleInfo.label}
                        size="small"
                        sx={{
                            backgroundColor: roleInfo.bg,
                            color: 'white',
                            fontWeight: 'bold'
                        }}
                    />
                );
            }
        },
        { field: 'tlf', label: 'Teléfono' },
        {
            field: 'createdAt',
            label: 'Fecha de Registro',
            render: (row) => new Date(row.createdAt).toLocaleDateString('es-ES')
        }
    ];

    const handleEdit = (user) => {
        setEditingUser(user);
        setFormData({ role: user.role });
        setIsModalOpen(true);
    };

    const handleSubmit = () => {
        if (!formData.role) {
            showToast.error('Debe seleccionar un rol');
            return;
        }

        setUsers(prev =>
            prev.map(u => u.id === editingUser.id
                ? { ...u, role: formData.role }
                : u
            )
        );
        showToast.success('Rol de usuario actualizado exitosamente');
        setIsModalOpen(false);
        setEditingUser(null);
    };

    const handleDelete = (user) => {
        if (user.role === 'SUPER_ADMIN') {
            showToast.error('No se puede eliminar un Super Administrador');
            return;
        }

        if (window.confirm(`¿Estás seguro de eliminar al usuario "${user.name}"?`)) {
            setUsers(prev => prev.filter(u => u.id !== user.id));
            showToast.success('Usuario eliminado exitosamente');
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
                        Gestión de Usuarios
                    </Typography>
                </Box>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {users.length === 0 ? (
                    <EmptyState message="No hay usuarios registrados en el sistema." />
                ) : (
                    <AdminTable
                        columns={columns}
                        data={users}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        searchPlaceholder="Buscar usuario..."
                    />
                )}
            </motion.div>

            {/* Modal para editar rol */}
            <AdminFormModal
                isOpen={isModalOpen}
                setIsOpen={setIsModalOpen}
                title="Editar Rol de Usuario"
                icon={People}
                onSubmit={handleSubmit}
                submitText="Actualizar Rol"
            >
                {editingUser && (
                    <>
                        <Box className="mb-4 p-4 bg-gray-50 rounded-lg">
                            <Typography variant="body2" className="text-gray-600 mb-1">
                                Usuario
                            </Typography>
                            <Typography variant="h6" className="font-bold">
                                {editingUser.name}
                            </Typography>
                            <Typography variant="body2" className="text-gray-600">
                                {editingUser.email}
                            </Typography>
                        </Box>

                        <TextField
                            fullWidth
                            select
                            label="Rol"
                            value={formData.role}
                            onChange={(e) => setFormData({ role: e.target.value })}
                            required
                        >
                            <MenuItem value="USER">Usuario</MenuItem>
                            <MenuItem value="ADMIN">Administrador</MenuItem>
                            <MenuItem value="SUPER_ADMIN">Super Administrador</MenuItem>
                        </TextField>

                        <Box className="mt-3 p-3 bg-blue-50 rounded-lg">
                            <Typography variant="body2" className="text-blue-800">
                                <strong>Nota:</strong> Cambiar el rol afectará los permisos y accesos del usuario.
                            </Typography>
                        </Box>
                    </>
                )}
            </AdminFormModal>
        </Container>
    );
};

export default UsersPage;
