import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Paper, Stack } from '@mui/material';
import { motion } from 'motion/react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';

const branches = [
    {
        id: 1,
        name: 'Sucursal Quito Norte',
        address: 'Av. 6 de Diciembre N34-150 y Av. República',
        phone: '+593 2 123-4567',
        email: 'quitonorte@biomotion.com',
        hours: 'Lun - Vie: 8:00 AM - 6:00 PM',
        mapUrl: 'https://maps.google.com/maps?q=-0.1807,78.4678&output=embed'
    },
    {
        id: 2,
        name: 'Sucursal Quito Sur',
        address: 'Av. Morán Valverde y Av. Quitumbe',
        phone: '+593 2 234-5678',
        email: 'quitosur@biomotion.com',
        hours: 'Lun - Vie: 8:00 AM - 6:00 PM',
        mapUrl: 'https://maps.google.com/maps?q=-0.2896,78.5400&output=embed'
    },
    {
        id: 3,
        name: 'Sucursal Guayaquil',
        address: 'Av. Francisco de Orellana, Edificio Blue Towers',
        phone: '+593 4 345-6789',
        email: 'guayaquil@biomotion.com',
        hours: 'Lun - Vie: 8:00 AM - 6:00 PM',
        mapUrl: 'https://maps.google.com/maps?q=-2.1894,79.8865&output=embed'
    },
    {
        id: 4,
        name: 'Sucursal Cuenca',
        address: 'Av. Remigio Crespo y Av. Solano',
        phone: '+593 7 456-7890',
        email: 'cuenca@biomotion.com',
        hours: 'Lun - Vie: 8:00 AM - 6:00 PM',
        mapUrl: 'https://maps.google.com/maps?q=-2.9005,78.9996&output=embed'
    }
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: "easeOut"
        }
    })
};

function Ubicaciones() {
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
                        sx={{
                            color: '#012558',
                            fontSize: { xs: '2rem', md: '3rem' }
                        }}
                    >
                        Nuestras Sucursales
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: '#666',
                            fontSize: { xs: '1rem', md: '1.25rem' }
                        }}
                    >
                        Encuentra la sucursal más cercana a ti
                    </Typography>
                    <Box
                        className="w-24 h-1 mx-auto mt-4 rounded-full"
                        sx={{ backgroundColor: '#f57922' }}
                    />
                </motion.div>

                {/* Branches Grid */}
                <Grid container spacing={4}>
                    {branches.map((branch, index) => (
                        <Grid item size={{ xs: 12, md: 6 }} key={branch.id}>
                            <motion.div
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={cardVariants}
                            >
                                <Card
                                    className="h-full hover:shadow-2xl transition-shadow duration-300"
                                    sx={{
                                        borderRadius: 4,
                                        overflow: 'hidden',
                                        border: '1px solid',
                                        borderColor: 'divider'
                                    }}
                                >
                                    {/* Map Embed */}
                                    <Box
                                        className="relative"
                                        sx={{ height: 250, overflow: 'hidden' }}
                                    >
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            frameBorder="0"
                                            src={branch.mapUrl}
                                            allowFullScreen
                                            loading="lazy"
                                            style={{ border: 0 }}
                                        />
                                        <Box
                                            className="absolute top-4 left-4 px-4 py-2 rounded-full font-bold"
                                            sx={{
                                                backgroundColor: '#f57922',
                                                color: 'white'
                                            }}
                                        >
                                            #{branch.id}
                                        </Box>
                                    </Box>

                                    {/* Card Content */}
                                    <CardContent className="p-6">
                                        <Typography
                                            variant="h5"
                                            className="font-bold mb-4"
                                            sx={{ color: '#012558' }}
                                        >
                                            {branch.name}
                                        </Typography>

                                        <Stack spacing={2.5}>
                                            <Box className="flex items-start gap-3">
                                                <LocationOnIcon sx={{ color: '#f57922', mt: 0.5 }} />
                                                <Box>
                                                    <Typography variant="body2" className="text-gray-500 mb-1">
                                                        Dirección
                                                    </Typography>
                                                    <Typography variant="body1" className="font-medium">
                                                        {branch.address}
                                                    </Typography>
                                                </Box>
                                            </Box>

                                            <Box className="flex items-start gap-3">
                                                <PhoneIcon sx={{ color: '#f57922', mt: 0.5 }} />
                                                <Box>
                                                    <Typography variant="body2" className="text-gray-500 mb-1">
                                                        Teléfono
                                                    </Typography>
                                                    <Typography variant="body1" className="font-medium">
                                                        {branch.phone}
                                                    </Typography>
                                                </Box>
                                            </Box>

                                            <Box className="flex items-start gap-3">
                                                <EmailIcon sx={{ color: '#f57922', mt: 0.5 }} />
                                                <Box>
                                                    <Typography variant="body2" className="text-gray-500 mb-1">
                                                        Email
                                                    </Typography>
                                                    <Typography variant="body1" className="font-medium">
                                                        {branch.email}
                                                    </Typography>
                                                </Box>
                                            </Box>

                                            <Box className="flex items-start gap-3">
                                                <AccessTimeIcon sx={{ color: '#f57922', mt: 0.5 }} />
                                                <Box>
                                                    <Typography variant="body2" className="text-gray-500 mb-1">
                                                        Horario
                                                    </Typography>
                                                    <Typography variant="body1" className="font-medium">
                                                        {branch.hours}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Stack>

                                        <Box className="mt-6">
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="w-full py-3 rounded-lg font-bold text-white transition-all"
                                                style={{ backgroundColor: '#012558' }}
                                            >
                                                Ver en Google Maps
                                            </motion.button>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-16"
                >
                    <Paper
                        className="p-8 text-center"
                        sx={{
                            borderRadius: 4,
                            background: 'linear-gradient(135deg, #012558 0%, #024080 100%)',
                            color: 'white'
                        }}
                    >
                        <Typography variant="h4" className="font-bold mb-4">
                            ¿Necesitas más información?
                        </Typography>
                        <Typography variant="body1" className="mb-6 opacity-90">
                            Nuestro equipo está listo para atenderte en cualquiera de nuestras sucursales
                        </Typography>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 rounded-lg font-bold transition-all"
                            style={{ backgroundColor: '#f57922', color: 'white' }}
                        >
                            Contactar Ahora
                        </motion.button>
                    </Paper>
                </motion.div>
            </Container>
        </Box>
    );
}

export { Ubicaciones };
