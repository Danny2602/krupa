import React, { useState } from 'react';
import { Container, Typography, Box, Button, Chip, TextField } from '@mui/material';
import { Add, Newspaper } from '@mui/icons-material';
import { motion } from 'motion/react';
import { AdminTable } from '@/features/admin/components/AdminTable';
import { EmptyState } from '@/features/admin/components/EmptyState';
import { AdminFormModal } from '@/features/admin/components/AdminFormModal';
import { showToast } from '@/lib/toast';

const NewsPage = () => {
    // Datos de ejemplo
    const [news, setNews] = useState([
        {
            id: 1,
            title: 'Nueva Ala de Cardiología Inaugurada',
            content: 'El hospital ha inaugurado una nueva ala dedicada a la cardiología con tecnología de punta.',
            author: 'Dr. Juan Pérez',
            status: 'PUBLISHED',
            createdAt: '2024-11-15',
            publishedAt: '2024-11-20'
        },
        {
            id: 2,
            title: 'Campaña de Vacunación Gratuita',
            content: 'Se llevará a cabo una campaña de vacunación gratuita durante todo el mes de diciembre.',
            author: 'Dra. María González',
            status: 'PUBLISHED',
            createdAt: '2024-11-10',
            publishedAt: '2024-11-12'
        },
        {
            id: 3,
            title: 'Nuevo Equipo de Resonancia Magnética',
            content: 'Hemos adquirido un equipo de resonancia magnética de última generación.',
            author: 'Dr. Carlos Rodríguez',
            status: 'DRAFT',
            createdAt: '2024-11-25',
            publishedAt: null
        },
        {
            id: 4,
            title: 'Horarios Especiales para Navidad',
            content: 'Consulte los horarios especiales de atención durante las festividades navideñas.',
            author: 'Admin',
            status: 'SCHEDULED',
            createdAt: '2024-11-28',
            publishedAt: '2024-12-15'
        }
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingNews, setEditingNews] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        author: '',
        status: 'DRAFT'
    });

    const getStatusColor = (status) => {
        switch (status) {
            case 'PUBLISHED':
                return { bg: '#4caf50', label: 'Publicada' };
            case 'DRAFT':
                return { bg: '#9ca3af', label: 'Borrador' };
            case 'SCHEDULED':
                return { bg: '#ffa726', label: 'Programada' };
            default:
                return { bg: '#9ca3af', label: status };
        }
    };

    const columns = [
        { field: 'id', label: 'ID' },
        {
            field: 'title',
            label: 'Título',
            render: (row) => (
                <Typography variant="body2" className="font-semibold">
                    {row.title}
                </Typography>
            )
        },
        {
            field: 'content',
            label: 'Contenido',
            render: (row) => (
                <Typography variant="body2" className="text-gray-600">
                    {row.content.substring(0, 50)}...
                </Typography>
            )
        },
        { field: 'author', label: 'Autor' },
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
            field: 'createdAt',
            label: 'Fecha de Creación',
            render: (row) => new Date(row.createdAt).toLocaleDateString('es-ES')
        }
    ];

    const handleOpenModal = (newsItem = null) => {
        if (newsItem) {
            setEditingNews(newsItem);
            setFormData({
                title: newsItem.title,
                content: newsItem.content,
                author: newsItem.author,
                status: newsItem.status
            });
        } else {
            setEditingNews(null);
            setFormData({
                title: '',
                content: '',
                author: '',
                status: 'DRAFT'
            });
        }
        setIsModalOpen(true);
    };

    const handleSubmit = () => {
        if (!formData.title.trim() || !formData.content.trim()) {
            showToast.error('Título y contenido son requeridos');
            return;
        }

        if (editingNews) {
            // Editar
            setNews(prev =>
                prev.map(n => n.id === editingNews.id
                    ? { ...n, ...formData }
                    : n
                )
            );
            showToast.success('Noticia actualizada exitosamente');
        } else {
            // Crear
            const newNewsItem = {
                id: Math.max(...news.map(n => n.id), 0) + 1,
                ...formData,
                createdAt: new Date().toISOString().split('T')[0],
                publishedAt: formData.status === 'PUBLISHED' ? new Date().toISOString().split('T')[0] : null
            };
            setNews(prev => [...prev, newNewsItem]);
            showToast.success('Noticia creada exitosamente');
        }

        setIsModalOpen(false);
        setFormData({ title: '', content: '', author: '', status: 'DRAFT' });
        setEditingNews(null);
    };

    const handleEdit = (newsItem) => {
        handleOpenModal(newsItem);
    };

    const handleDelete = (newsItem) => {
        if (window.confirm(`¿Estás seguro de eliminar la noticia "${newsItem.title}"?`)) {
            setNews(prev => prev.filter(n => n.id !== newsItem.id));
            showToast.success('Noticia eliminada exitosamente');
        }
    };

    const handleView = (newsItem) => {
        // TODO: Implementar vista detallada
        showToast.info(`Ver detalles de: ${newsItem.title}`);
    };

    return (
        <Container maxWidth="lg" className="py-6">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Box className="flex justify-between items-center mb-6">
                    <div>
                        <Typography variant="h4" className="font-bold text-gray-800">
                            Gestión de Noticias
                        </Typography>
                        <Typography variant="body2" className="text-gray-600 mt-1">
                            Administra las publicaciones y anuncios del hospital
                        </Typography>
                    </div>
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
                        Nueva Noticia
                    </Button>
                </Box>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {news.length === 0 ? (
                    <EmptyState message="No hay noticias publicadas. Crea la primera noticia." />
                ) : (
                    <AdminTable
                        columns={columns}
                        data={news}
                        onView={handleView}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        searchPlaceholder="Buscar noticia..."
                    />
                )}
            </motion.div>

            {/* Modal */}
            <AdminFormModal
                isOpen={isModalOpen}
                setIsOpen={setIsModalOpen}
                title={editingNews ? 'Editar Noticia' : 'Nueva Noticia'}
                icon={Newspaper}
                onSubmit={handleSubmit}
                submitText={editingNews ? 'Actualizar' : 'Publicar'}
            >
                <TextField
                    fullWidth
                    label="Título"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Ej: Nueva Campaña de Salud"
                    required
                    autoFocus
                />
                <TextField
                    fullWidth
                    label="Contenido"
                    multiline
                    rows={5}
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    placeholder="Escribe el contenido de la noticia..."
                    required
                />
                <TextField
                    fullWidth
                    label="Autor"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    placeholder="Ej: Dr. Juan Pérez"
                />
                <TextField
                    fullWidth
                    select
                    label="Estado"
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    SelectProps={{ native: true }}
                >
                    <option value="DRAFT">Borrador</option>
                    <option value="PUBLISHED">Publicada</option>
                    <option value="SCHEDULED">Programada</option>
                </TextField>
            </AdminFormModal>
        </Container>
    );
};

export default NewsPage;
