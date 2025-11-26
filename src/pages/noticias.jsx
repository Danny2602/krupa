import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Chip, Button, TextField, InputAdornment } from '@mui/material';
import { motion } from 'motion/react';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ArticleIcon from '@mui/icons-material/Article';

const newsData = [
    {
        id: 1,
        title: 'Nueva Tecnología en Prótesis de Rodilla Mejora Recuperación',
        category: 'Innovación',
        excerpt: 'Estudios recientes demuestran que las nuevas prótesis de rodilla con sensores integrados reducen el tiempo de recuperación en un 40%.',
        date: '2025-11-20',
        author: 'Dr. Carlos Méndez',
        image: 'https://via.placeholder.com/600x400/012558/FFFFFF?text=Protesis+Innovacion',
        featured: true
    },
    {
        id: 2,
        title: 'Inauguración de Nueva Sucursal en Cuenca',
        category: 'Empresa',
        excerpt: 'BioMotion expande sus servicios con la apertura de su cuarta sucursal en la ciudad de Cuenca, Ecuador.',
        date: '2025-11-18',
        author: 'Equipo BioMotion',
        image: 'https://via.placeholder.com/600x400/f57922/FFFFFF?text=Nueva+Sucursal',
        featured: false
    },
    {
        id: 3,
        title: 'Avances en Implantes de Columna Cervical',
        category: 'Investigación',
        excerpt: 'Nuevos materiales biocompatibles prometen mejorar la osteointegración en implantes cervicales.',
        date: '2025-11-15',
        author: 'Dra. María Rodríguez',
        image: 'https://via.placeholder.com/600x400/012558/FFFFFF?text=Columna+Cervical',
        featured: false
    },
    {
        id: 4,
        title: 'Seminario Gratuito sobre Prótesis de Tobillo',
        category: 'Eventos',
        excerpt: 'Únete a nuestro seminario virtual donde expertos compartirán los últimos avances en reemplazo de tobillo.',
        date: '2025-11-12',
        author: 'Dr. Luis Fernández',
        image: 'https://via.placeholder.com/600x400/f57922/FFFFFF?text=Seminario',
        featured: false
    },
    {
        id: 5,
        title: 'Testimonios: Recuperando la Movilidad con Prótesis de Cadera',
        category: 'Testimonios',
        excerpt: 'Pacientes comparten sus experiencias positivas después de recibir prótesis de cadera de última generación.',
        date: '2025-11-10',
        author: 'Equipo de Comunicación',
        image: 'https://via.placeholder.com/600x400/012558/FFFFFF?text=Testimonios',
        featured: false
    },
    {
        id: 6,
        title: 'BioMotion Recibe Certificación Internacional de Calidad',
        category: 'Empresa',
        excerpt: 'Nuestra empresa obtiene la certificación ISO 13485 por excelencia en sistemas de gestión de calidad médica.',
        date: '2025-11-08',
        author: 'Dirección General',
        image: 'https://via.placeholder.com/600x400/f57922/FFFFFF?text=Certificacion',
        featured: false
    },
    {
        id: 7,
        title: 'Nuevas Prótesis de Mano Biónicas con IA',
        category: 'Innovación',
        excerpt: 'La inteligencia artificial revoluciona las prótesis de mano, permitiendo movimientos más naturales y precisos.',
        date: '2025-11-05',
        author: 'Dr. Pedro Sánchez',
        image: 'https://via.placeholder.com/600x400/012558/FFFFFF?text=Mano+Bionica',
        featured: true
    },
    {
        id: 8,
        title: 'Campaña de Concientización sobre Salud Articular',
        category: 'Salud',
        excerpt: 'Lanzamos campaña nacional para educar sobre la importancia del cuidado articular y prevención temprana.',
        date: '2025-11-03',
        author: 'Departamento de Salud Pública',
        image: 'https://via.placeholder.com/600x400/f57922/FFFFFF?text=Campana+Salud',
        featured: false
    }
];

const categories = ['Todas', 'Innovación', 'Empresa', 'Investigación', 'Eventos', 'Testimonios', 'Salud'];

function Noticias() {
    const [selectedCategory, setSelectedCategory] = useState('Todas');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredNews = newsData.filter(news => {
        const matchesCategory = selectedCategory === 'Todas' || news.category === selectedCategory;
        const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            news.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const featuredNews = filteredNews.filter(news => news.featured);
    const regularNews = filteredNews.filter(news => !news.featured);

    return (
        <Box className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
            <Container maxWidth="xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <Typography
                        variant="h2"
                        className="font-bold mb-4"
                        sx={{ color: '#012558', fontSize: { xs: '2rem', md: '3rem' } }}
                    >
                        Noticias y Novedades
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{ color: '#666', fontSize: { xs: '1rem', md: '1.25rem' }, maxWidth: '800px', mx: 'auto' }}
                    >
                        Mantente informado sobre las últimas innovaciones y eventos de BioMotion
                    </Typography>
                    <Box className="w-24 h-1 mx-auto mt-4 rounded-full" sx={{ backgroundColor: '#f57922' }} />
                </motion.div>

                {/* Search Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8"
                >
                    <TextField
                        fullWidth
                        placeholder="Buscar noticias..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon sx={{ color: '#012558' }} />
                                </InputAdornment>
                            )
                        }}
                        sx={{
                            maxWidth: '600px',
                            mx: 'auto',
                            display: 'block',
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 3,
                                '&:hover fieldset': {
                                    borderColor: '#f57922'
                                }
                            }
                        }}
                    />
                </motion.div>

                {/* Category Filters */}
                <Box className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <Chip
                                label={category}
                                onClick={() => setSelectedCategory(category)}
                                icon={<ArticleIcon />}
                                sx={{
                                    px: 2, py: 3, fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer',
                                    backgroundColor: selectedCategory === category ? '#012558' : 'white',
                                    color: selectedCategory === category ? 'white' : '#012558',
                                    border: '2px solid',
                                    borderColor: selectedCategory === category ? '#012558' : '#e0e0e0',
                                    '& .MuiChip-icon': {
                                        color: selectedCategory === category ? 'white' : '#012558'
                                    },
                                    '&:hover': {
                                        backgroundColor: selectedCategory === category ? '#024080' : '#f5f5f5',
                                        borderColor: '#012558'
                                    }
                                }}
                            />
                        </motion.div>
                    ))}
                </Box>

                {/* Featured News */}
                {featuredNews.length > 0 && (
                    <Box className="mb-12">
                        <Typography variant="h4" className="font-bold mb-6" sx={{ color: '#012558' }}>
                            Destacadas
                        </Typography>
                        <Grid container spacing={4}>
                            {featuredNews.map((news, index) => (
                                <Grid item size={{ xs: 12, md: 6 }} key={news.id}>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Card
                                            className="h-full hover:shadow-2xl transition-all duration-300 cursor-pointer"
                                            sx={{
                                                borderRadius: 4,
                                                overflow: 'hidden',
                                                border: '3px solid #f57922'
                                            }}
                                        >
                                            <CardMedia
                                                component="img"
                                                height="300"
                                                image={news.image}
                                                alt={news.title}
                                                sx={{ height: 300, objectFit: 'cover' }}
                                            />
                                            <CardContent className="p-6">
                                                <Box className="flex items-center gap-2 mb-3">
                                                    <Chip
                                                        label={news.category}
                                                        size="small"
                                                        sx={{ backgroundColor: '#f57922', color: 'white', fontWeight: 'bold' }}
                                                    />
                                                    <Chip
                                                        label="DESTACADA"
                                                        size="small"
                                                        sx={{ backgroundColor: '#012558', color: 'white', fontWeight: 'bold' }}
                                                    />
                                                </Box>
                                                <Typography variant="h5" className="font-bold mb-3" sx={{ color: '#012558' }}>
                                                    {news.title}
                                                </Typography>
                                                <Typography variant="body1" className="text-gray-600 mb-4">
                                                    {news.excerpt}
                                                </Typography>
                                                <Box className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                                    <Box className="flex items-center gap-1">
                                                        <CalendarTodayIcon fontSize="small" />
                                                        <span>{new Date(news.date).toLocaleDateString('es-ES')}</span>
                                                    </Box>
                                                    <Box className="flex items-center gap-1">
                                                        <PersonIcon fontSize="small" />
                                                        <span>{news.author}</span>
                                                    </Box>
                                                </Box>
                                                <Button
                                                    variant="contained"
                                                    fullWidth
                                                    sx={{
                                                        backgroundColor: '#012558',
                                                        fontWeight: 'bold',
                                                        '&:hover': { backgroundColor: '#024080' }
                                                    }}
                                                >
                                                    Leer Más
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                )}

                {/* Regular News */}
                {regularNews.length > 0 && (
                    <Box>
                        <Typography variant="h4" className="font-bold mb-6" sx={{ color: '#012558' }}>
                            Todas las Noticias
                        </Typography>
                        <Grid container spacing={4}>
                            {regularNews.map((news, index) => (
                                <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={news.id}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Card
                                            className="h-full hover:shadow-2xl transition-all duration-300 cursor-pointer"
                                            sx={{
                                                borderRadius: 4,
                                                overflow: 'hidden',
                                                border: '2px solid transparent',
                                                '&:hover': {
                                                    borderColor: '#f57922',
                                                    transform: 'translateY(-8px)'
                                                }
                                            }}
                                        >
                                            <CardMedia
                                                component="img"
                                                height="200"
                                                image={news.image}
                                                alt={news.title}
                                                sx={{ height: 200, objectFit: 'cover' }}
                                            />
                                            <CardContent className="p-6">
                                                <Chip
                                                    label={news.category}
                                                    size="small"
                                                    sx={{ mb: 2, backgroundColor: '#f57922', color: 'white', fontWeight: 'bold' }}
                                                />
                                                <Typography variant="h6" className="font-bold mb-3 line-clamp-2" sx={{ color: '#012558' }}>
                                                    {news.title}
                                                </Typography>
                                                <Typography variant="body2" className="text-gray-600 mb-4 line-clamp-3">
                                                    {news.excerpt}
                                                </Typography>
                                                <Box className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                                                    <CalendarTodayIcon fontSize="small" />
                                                    <span>{new Date(news.date).toLocaleDateString('es-ES')}</span>
                                                </Box>
                                                <Button
                                                    variant="outlined"
                                                    fullWidth
                                                    sx={{
                                                        borderColor: '#012558',
                                                        color: '#012558',
                                                        fontWeight: 'bold',
                                                        '&:hover': {
                                                            borderColor: '#f57922',
                                                            backgroundColor: '#f57922',
                                                            color: 'white'
                                                        }
                                                    }}
                                                >
                                                    Leer Más
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                )}

                {/* No Results */}
                {filteredNews.length === 0 && (
                    <Box className="text-center py-16">
                        <ArticleIcon sx={{ fontSize: 80, color: '#ccc', mb: 2 }} />
                        <Typography variant="h5" className="text-gray-500">
                            No se encontraron noticias
                        </Typography>
                    </Box>
                )}
            </Container>
        </Box>
    );
}

export { Noticias };
