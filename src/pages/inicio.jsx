import React from 'react';
import { Box, Container, Typography, Grid, Button, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Card as HeroCard } from '@/components/cards/card.jsx';

function Inicio() {
    const navigate = useNavigate();

    const servicios = [
        {
            title: 'Columna',
            description: 'Prótesis e implantes para columna vertebral',
            image: 'https://via.placeholder.com/400x300/012558/FFFFFF?text=Columna',
            path: '/servicios/columna'
        },
        {
            title: 'Miembros Superiores',
            description: 'Soluciones para hombro, codo, muñeca y mano',
            image: 'https://via.placeholder.com/400x300/f57922/FFFFFF?text=Superiores',
            path: '/servicios/miembros-superiores'
        },
        {
            title: 'Rodilla',
            description: 'Prótesis totales, parciales y de revisión',
            image: 'https://via.placeholder.com/400x300/012558/FFFFFF?text=Rodilla',
            path: '/servicios/rodilla'
        },
        {
            title: 'Pie y Tobillo',
            description: 'Implantes para tobillo y pie',
            image: 'https://via.placeholder.com/400x300/f57922/FFFFFF?text=Pie',
            path: '/servicios/pie-tobillo'
        }
    ];

    const beneficios = [
        'Tecnología de última generación',
        'Certificaciones internacionales',
        'Equipo médico capacitado',
        'Resultados comprobados'
    ];

    return (
        <Box sx={{ overflowX: 'hidden', width: '100%' }}>
            {/* Hero Section */}
            <Box className='w-full h-[100vh] lg:min-h-screen xl:min-h-screen md:min-h-screen'>
                <HeroCard />
            </Box>

            {/* About Section */}
            <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
                <Container maxWidth="xl">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item size={{ xs: 12, md: 7 }}>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#012558', mb: 2, fontSize: { xs: '2rem', md: '2.5rem' } }}>
                                    Investigación e Innovación
                                </Typography>
                                <Typography variant="h6" sx={{ color: '#f57922', mb: 3, fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                                    al servicio de la salud
                                </Typography>
                                <Typography variant="body1" sx={{ textAlign: 'justify', fontSize: '1rem', lineHeight: 1.7, mb: 2 }}>
                                    Sabemos que los pacientes y profesionales de la salud están constantemente en la búsqueda de información para mejorar su calidad de vida o la calidad de vida de sus pacientes.
                                </Typography>
                                <Typography variant="body1" sx={{ textAlign: 'justify', fontSize: '1rem', lineHeight: 1.7 }}>
                                    Te invitamos a explorar este mundo de soluciones médicas avanzadas y descubrir todo lo que BioMotion puede hacer por ti.
                                </Typography>
                            </motion.div>
                        </Grid>
                        <Grid item size={{ xs: 12, md: 5 }}>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <Box sx={{ p: 3, borderRadius: 3, backgroundColor: 'white', boxShadow: 2 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#012558', mb: 2 }}>
                                        ¿Por qué elegirnos?
                                    </Typography>
                                    {beneficios.map((beneficio, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <Box className="flex items-center gap-2 mb-2">
                                                <CheckCircleIcon sx={{ color: '#f57922', fontSize: 24 }} />
                                                <Typography variant="body2" sx={{ fontSize: '0.95rem' }}>
                                                    {beneficio}
                                                </Typography>
                                            </Box>
                                        </motion.div>
                                    ))}
                                </Box>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Services Section */}
            <Box sx={{ py: 10, backgroundColor: 'white' }}>
                <Container maxWidth="xl">
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-8"
                    >
                        <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#012558', mb: 2, fontSize: { xs: '2rem', md: '2.5rem' } }}>
                            Nuestros Servicios
                        </Typography>
                        <Typography variant="h6" sx={{ color: '#666', mb: 3 }}>
                            Soluciones médicas especializadas en prótesis y órtesis
                        </Typography>
                        <Box className="w-24 h-1 mx-auto rounded-full" sx={{ backgroundColor: '#f57922' }} />
                    </motion.div>

                    <Grid container spacing={3}>
                        {servicios.map((servicio, index) => (
                            <Grid item size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card
                                        className="h-full hover:shadow-2xl transition-all duration-300 cursor-pointer"
                                        sx={{
                                            borderRadius: 3,
                                            border: '2px solid transparent',
                                            '&:hover': {
                                                borderColor: '#f57922',
                                                transform: 'translateY(-8px)'
                                            }
                                        }}
                                        onClick={() => navigate(servicio.path)}
                                    >
                                        <CardMedia
                                            component="img"
                                            height="180"
                                            image={servicio.image}
                                            alt={servicio.title}
                                            sx={{ height: 180 }}
                                        />
                                        <CardContent sx={{ p: 2.5 }}>
                                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#012558', mb: 1.5, fontSize: '1.1rem' }}>
                                                {servicio.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: '#666', fontSize: '0.9rem' }}>
                                                {servicio.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>

                    <Box className="text-center mt-6">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                variant="contained"
                                size="large"
                                endIcon={<MedicalServicesIcon />}
                                onClick={() => navigate('/servicios/columna')}
                                sx={{
                                    backgroundColor: '#f57922',
                                    fontWeight: 'bold',
                                    px: 4,
                                    py: 1.5,
                                    fontSize: '1rem',
                                    '&:hover': { backgroundColor: '#d66a1d' }
                                }}
                            >
                                Ver Todos los Servicios
                            </Button>
                        </motion.div>
                    </Box>
                </Container>
            </Box>

            {/* Locations Section */}
            <Box sx={{ py: 10, background: 'linear-gradient(135deg, #012558 0%, #024080 100%)', color: 'white' }}>
                <Container maxWidth="xl">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item size={{ xs: 12, md: 6 }}>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <LocationOnIcon sx={{ fontSize: 50, color: '#f57922', mb: 2 }} />
                                <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2, fontSize: { xs: '2rem', md: '2.5rem' } }}>
                                    Nuestras Ubicaciones
                                </Typography>
                                <Typography variant="h6" sx={{ mb: 3, opacity: 0.9, fontSize: { xs: '1.1rem', md: '1.3rem' } }}>
                                    Los productos de BioMotion se encuentran en 4 establecimientos estratégicos en Ecuador
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 3, fontSize: '1rem', opacity: 0.9 }}>
                                    Contamos con sucursales en Quito, Guayaquil, Cuenca y Ambato para estar más cerca de ti.
                                </Typography>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button
                                        variant="contained"
                                        size="large"
                                        endIcon={<ArrowForwardIcon />}
                                        onClick={() => navigate('/ubicaciones')}
                                        sx={{
                                            backgroundColor: '#f57922',
                                            fontWeight: 'bold',
                                            px: 3,
                                            py: 1.2,
                                            fontSize: '1rem',
                                            '&:hover': { backgroundColor: '#d66a1d' }
                                        }}
                                    >
                                        Ver Ubicaciones
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </Grid>
                        <Grid item size={{ xs: 12, md: 6 }}>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <Box
                                    sx={{
                                        borderRadius: 3,
                                        overflow: 'hidden',
                                        height: '350px',
                                        border: '3px solid #f57922'
                                    }}
                                >
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        frameBorder="0"
                                        src="https://maps.google.com/maps?q=-0.1807,-78.4678&output=embed"
                                        allowFullScreen
                                        loading="lazy"
                                        style={{ border: 0 }}
                                    />
                                </Box>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* News Section */}
            <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
                <Container maxWidth="xl">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item size={{ xs: 12, md: 4 }}>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <NewspaperIcon sx={{ fontSize: 50, color: '#f57922', mb: 2 }} />
                                <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#012558', mb: 2, fontSize: { xs: '2rem', md: '2.5rem' } }}>
                                    Últimas Noticias
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#666', mb: 3, fontSize: '1rem' }}>
                                    Mantente informado sobre las últimas innovaciones y eventos en el mundo de la medicina ortopédica
                                </Typography>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button
                                        variant="contained"
                                        size="large"
                                        endIcon={<ArrowForwardIcon />}
                                        onClick={() => navigate('/noticias')}
                                        sx={{
                                            backgroundColor: '#012558',
                                            fontWeight: 'bold',
                                            px: 3,
                                            py: 1.2,
                                            fontSize: '0.95rem',
                                            '&:hover': { backgroundColor: '#024080' }
                                        }}
                                    >
                                        Ver Todas las Noticias
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </Grid>

                        <Grid item size={{ xs: 12, md: 8 }}>
                            <Grid container spacing={3}>
                                {[1, 2, 3].map((item, index) => (
                                    <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <Card
                                                className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer"
                                                sx={{
                                                    borderRadius: 3,
                                                    border: '2px solid transparent',
                                                    '&:hover': { borderColor: '#f57922', transform: 'translateY(-5px)' }
                                                }}
                                                onClick={() => navigate('/noticias')}
                                            >
                                                <CardMedia
                                                    component="img"
                                                    height="150"
                                                    image={`https://via.placeholder.com/400x250/${index % 2 === 0 ? '012558' : 'f57922'}/FFFFFF?text=Noticia+${item}`}
                                                    alt={`Noticia ${item}`}
                                                    sx={{ height: 150 }}
                                                />
                                                <CardContent sx={{ p: 2 }}>
                                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#012558', mb: 1, fontSize: '1rem' }}>
                                                        Innovación en Prótesis {item}
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ color: '#666', fontSize: '0.85rem', lineHeight: 1.4 }}>
                                                        Descubre las últimas novedades en tecnología médica...
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* CTA Contact Section */}
            <Box sx={{ py: 10, background: 'linear-gradient(135deg, #f57922 0%, #d66a1d 100%)', color: 'white' }}>
                <Container maxWidth="md">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <ContactMailIcon sx={{ fontSize: 70, mb: 3 }} />
                        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 3, fontSize: { xs: '2rem', md: '2.5rem' } }}>
                            ¿Necesitas más información?
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 4, opacity: 0.95, fontSize: { xs: '1.1rem', md: '1.3rem' } }}>
                            Nuestro equipo está listo para ayudarte. Envíanos un mensaje y nos pondremos en contacto contigo.
                        </Typography>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                variant="contained"
                                size="large"
                                endIcon={<ArrowForwardIcon />}
                                onClick={() => navigate('/contacto')}
                                sx={{
                                    backgroundColor: '#012558',
                                    fontWeight: 'bold',
                                    px: 5,
                                    py: 1.8,
                                    fontSize: '1.1rem',
                                    '&:hover': { backgroundColor: '#024080' }
                                }}
                            >
                                Contáctanos
                            </Button>
                        </motion.div>
                    </motion.div>
                </Container>
            </Box>
        </Box>
    );
}

export { Inicio };