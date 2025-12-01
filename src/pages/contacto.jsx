import React, { useState } from 'react';
import { Box, Container, Typography, Grid, TextField, Button, IconButton, Divider } from '@mui/material';
import { motion } from 'motion/react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const contactInfo = {
    phone: '+593 2 123-4567',
    email: 'contacto@biomotion.com',
    address: 'Av. 6 de Diciembre N34-150, Quito - Ecuador',
};

function Contacto() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Aquí iría la lógica para enviar el formulario
    };

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
                        Contáctanos
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{ color: '#666', fontSize: { xs: '1rem', md: '1.25rem' }, maxWidth: '800px', mx: 'auto' }}
                    >
                        Estamos aquí para ayudarte. Envíanos un mensaje y nos pondremos en contacto contigo
                    </Typography>
                    <Box className="w-24 h-1 mx-auto mt-4 rounded-full" sx={{ backgroundColor: '#f57922' }} />
                </motion.div>

                <Grid container spacing={4}>
                    {/* Contact Form */}
                    <Grid item size={{ xs: 12, md: 7 }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Box
                                component="form"
                                onSubmit={handleSubmit}
                                sx={{
                                    p: 4,
                                    borderRadius: 4,
                                    border: '2px solid',
                                    borderColor: 'divider',
                                    backgroundColor: 'white'
                                }}
                            >
                                <Typography variant="h5" className="font-bold mb-6" sx={{ color: '#012558' }}>
                                    Envíanos un Mensaje
                                </Typography>

                                <Grid container spacing={3}>
                                    <Grid item size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            fullWidth
                                            label="Nombre Completo"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            variant="outlined"
                                            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                                        />
                                    </Grid>
                                    <Grid item size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            fullWidth
                                            label="Correo Electrónico"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            variant="outlined"
                                            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                                        />
                                    </Grid>
                                    <Grid item size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            fullWidth
                                            label="Teléfono"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            variant="outlined"
                                            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                                        />
                                    </Grid>
                                    <Grid item size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            fullWidth
                                            label="Asunto"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            variant="outlined"
                                            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                                        />
                                    </Grid>
                                    <Grid item size={{ xs: 12 }}>
                                        <TextField
                                            fullWidth
                                            label="Mensaje"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            multiline
                                            rows={6}
                                            variant="outlined"
                                            sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                                        />
                                    </Grid>
                                    <Grid item size={{ xs: 12 }}>
                                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                fullWidth
                                                endIcon={<SendIcon />}
                                                sx={{
                                                    py: 1.5,
                                                    borderRadius: 2,
                                                    backgroundColor: '#f57922',
                                                    fontWeight: 'bold',
                                                    fontSize: '1.1rem',
                                                    '&:hover': { backgroundColor: '#d66a1d' }
                                                }}
                                            >
                                                Enviar Mensaje
                                            </Button>
                                        </motion.div>
                                    </Grid>
                                </Grid>
                            </Box>
                        </motion.div>
                    </Grid>

                    {/* Contact Info */}
                    <Grid item size={{ xs: 12, md: 5 }}>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <Box
                                sx={{
                                    p: 4,
                                    borderRadius: 4,
                                    background: 'linear-gradient(135deg, #012558 0%, #024080 100%)',
                                    color: 'white',
                                    height: '100%'
                                }}
                            >
                                <Typography variant="h5" className="font-bold mb-6">
                                    Información de Contacto
                                </Typography>

                                <Box className="space-y-6">
                                    <Box className="flex items-start gap-4">
                                        <Box
                                            sx={{
                                                p: 2,
                                                borderRadius: 2,
                                                backgroundColor: 'rgba(245, 121, 34, 0.2)'
                                            }}
                                        >
                                            <PhoneIcon sx={{ color: '#f57922', fontSize: 30 }} />
                                        </Box>
                                        <Box>
                                            <Typography variant="subtitle2" className="opacity-80 mb-1">
                                                Teléfono
                                            </Typography>
                                            <Typography variant="h6" className="font-bold">
                                                {contactInfo.phone}
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Box className="flex items-start gap-4">
                                        <Box
                                            sx={{
                                                p: 2,
                                                borderRadius: 2,
                                                backgroundColor: 'rgba(245, 121, 34, 0.2)'
                                            }}
                                        >
                                            <EmailIcon sx={{ color: '#f57922', fontSize: 30 }} />
                                        </Box>
                                        <Box>
                                            <Typography variant="subtitle2" className="opacity-80 mb-1">
                                                Email
                                            </Typography>
                                            <Typography variant="h6" className="font-bold">
                                                {contactInfo.email}
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Box className="flex items-start gap-4">
                                        <Box
                                            sx={{
                                                p: 2,
                                                borderRadius: 2,
                                                backgroundColor: 'rgba(245, 121, 34, 0.2)'
                                            }}
                                        >
                                            <LocationOnIcon sx={{ color: '#f57922', fontSize: 30 }} />
                                        </Box>
                                        <Box>
                                            <Typography variant="subtitle2" className="opacity-80 mb-1">
                                                Dirección
                                            </Typography>
                                            <Typography variant="body1" className="font-medium">
                                                {contactInfo.address}
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Divider sx={{ my: 4, backgroundColor: 'rgba(255,255,255,0.2)' }} />

                                    <Box>
                                        <Typography variant="h6" className="font-bold mb-4">
                                            Síguenos
                                        </Typography>
                                        <Box className="flex gap-3">
                                            {[
                                                { icon: <FacebookIcon />, link: '#' },
                                                { icon: <InstagramIcon />, link: '#' },
                                                { icon: <TwitterIcon />, link: '#' },
                                                { icon: <LinkedInIcon />, link: '#' }
                                            ].map((social, index) => (
                                                <motion.div
                                                    key={index}
                                                    whileHover={{ scale: 1.1, y: -5 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <IconButton
                                                        sx={{
                                                            backgroundColor: 'rgba(245, 121, 34, 0.2)',
                                                            color: '#f57922',
                                                            '&:hover': {
                                                                backgroundColor: '#f57922',
                                                                color: 'white'
                                                            }
                                                        }}
                                                    >
                                                        {social.icon}
                                                    </IconButton>
                                                </motion.div>
                                            ))}
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>

                {/* Map Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-12"
                >
                    <Box
                        sx={{
                            borderRadius: 4,
                            overflow: 'hidden',
                            border: '2px solid',
                            borderColor: 'divider',
                            height: '400px'
                        }}
                    >
                        <iframe
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            src="https://maps.google.com/maps?q=-0.1807,78.4678&output=embed"
                            allowFullScreen
                            loading="lazy"
                            style={{ border: 0 }}
                        />
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
}

export { Contacto };
