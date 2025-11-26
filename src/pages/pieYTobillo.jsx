import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Chip, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { motion } from 'motion/react';
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const prosthesisData = [
    {
        id: 1,
        name: 'Prótesis Total de Tobillo',
        category: 'Tobillo',
        description: 'Reemplazo total de tobillo que preserva el movimiento y reduce el dolor en artritis severa.',
        features: ['Componentes de titanio y polietileno', 'Diseño de tres componentes', 'Preserva movimiento', 'Reducción del dolor'],
        image: 'https://via.placeholder.com/400x300/012558/FFFFFF?text=Tobillo+Total'
    },
    {
        id: 2,
        name: 'Implante de Fusión de Tobillo',
        category: 'Tobillo',
        description: 'Sistema de artrodesis de tobillo para casos de deformidad severa o falla de prótesis.',
        features: ['Placa anatómica', 'Tornillos de compresión', 'Titanio', 'Unión sólida'],
        image: 'https://via.placeholder.com/400x300/f57922/FFFFFF?text=Fusion+Tobillo'
    },
    {
        id: 3,
        name: 'Prótesis de Hallux (Dedo Gordo)',
        category: 'Pie',
        description: 'Reemplazo de articulación metatarsofalángica del primer dedo para hallux rigidus.',
        features: ['Silicona médica', 'Diseño anatómico', 'Preserva función', 'Biocompatible'],
        image: 'https://via.placeholder.com/400x300/012558/FFFFFF?text=Hallux'
    },
    {
        id: 4,
        name: 'Sistema de Fijación de Fracturas de Pie',
        category: 'Pie',
        description: 'Placas y tornillos para fijación de fracturas metatarsianas y tarsianas.',
        features: ['Placas de bajo perfil', 'Tornillos corticales', 'Titanio', 'Mínimamente invasiva'],
        image: 'https://via.placeholder.com/400x300/f57922/FFFFFF?text=Fijacion+Pie'
    },
    {
        id: 5,
        name: 'Implante de Artrodesis Subastragalina',
        category: 'Tobillo',
        description: 'Tornillo de fusión para articulación subastragalina en casos de artritis postraumática.',
        features: ['Tornillo canulado', 'Compresión gradual', 'Titanio', 'Bajo perfil'],
        image: 'https://via.placeholder.com/400x300/012558/FFFFFF?text=Subastragalina'
    },
    {
        id: 6,
        name: 'Prótesis de Dedos Menores',
        category: 'Pie',
        description: 'Implantes para corrección de deformidades en dedos 2-5 del pie.',
        features: ['Silicona flexible', 'Corrección de hammer toe', 'Varios tamaños', 'Fácil implantación'],
        image: 'https://via.placeholder.com/400x300/f57922/FFFFFF?text=Dedos+Menores'
    }
];

const categories = ['Todas', 'Tobillo', 'Pie'];

function PieYTobillo() {
    const [selectedCategory, setSelectedCategory] = useState('Todas');
    const [selectedProsthesis, setSelectedProsthesis] = useState(null);

    const filteredProsthesis = selectedCategory === 'Todas'
        ? prosthesisData
        : prosthesisData.filter(p => p.category === selectedCategory);

    return (
        <Box className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
            <Container maxWidth="xl">
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
                        Prótesis de Pie y Tobillo
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{ color: '#666', fontSize: { xs: '1rem', md: '1.25rem' }, maxWidth: '800px', mx: 'auto' }}
                    >
                        Soluciones especializadas para recuperar la movilidad del pie y tobillo
                    </Typography>
                    <Box className="w-24 h-1 mx-auto mt-4 rounded-full" sx={{ backgroundColor: '#f57922' }} />
                </motion.div>

                <Box className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Chip
                                label={category}
                                onClick={() => setSelectedCategory(category)}
                                sx={{
                                    px: 2, py: 3, fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer',
                                    backgroundColor: selectedCategory === category ? '#012558' : 'white',
                                    color: selectedCategory === category ? 'white' : '#012558',
                                    border: '2px solid',
                                    borderColor: selectedCategory === category ? '#012558' : '#e0e0e0',
                                    '&:hover': {
                                        backgroundColor: selectedCategory === category ? '#024080' : '#f5f5f5',
                                        borderColor: '#012558'
                                    }
                                }}
                            />
                        </motion.div>
                    ))}
                </Box>

                <Grid container spacing={4}>
                    {filteredProsthesis.map((prosthesis, index) => (
                        <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={prosthesis.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card
                                    className="h-full hover:shadow-2xl transition-all duration-300 cursor-pointer"
                                    sx={{
                                        borderRadius: 4, overflow: 'hidden', border: '2px solid transparent',
                                        '&:hover': { borderColor: '#f57922', transform: 'translateY(-8px)' }
                                    }}
                                    onClick={() => setSelectedProsthesis(prosthesis)}
                                >
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={prosthesis.image}
                                        alt={prosthesis.name}
                                        sx={{ height: 200, objectFit: 'cover' }}
                                    />
                                    <CardContent className="p-6">
                                        <Chip
                                            label={prosthesis.category}
                                            size="small"
                                            sx={{ mb: 2, backgroundColor: '#f57922', color: 'white', fontWeight: 'bold' }}
                                        />
                                        <Typography variant="h6" className="font-bold mb-3" sx={{ color: '#012558' }}>
                                            {prosthesis.name}
                                        </Typography>
                                        <Typography variant="body2" className="text-gray-600 mb-4 line-clamp-3">
                                            {prosthesis.description}
                                        </Typography>
                                        <Button
                                            variant="outlined"
                                            fullWidth
                                            startIcon={<InfoIcon />}
                                            sx={{
                                                borderColor: '#012558', color: '#012558', fontWeight: 'bold',
                                                '&:hover': { borderColor: '#f57922', backgroundColor: '#f57922', color: 'white' }
                                            }}
                                        >
                                            Ver Detalles
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

                <Dialog
                    open={selectedProsthesis !== null}
                    onClose={() => setSelectedProsthesis(null)}
                    maxWidth="md"
                    fullWidth
                    PaperProps={{ sx: { borderRadius: 4 } }}
                >
                    {selectedProsthesis && (
                        <>
                            <Box sx={{ position: 'relative' }}>
                                <img src={selectedProsthesis.image} alt={selectedProsthesis.name} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                                <Chip label={selectedProsthesis.category} sx={{ position: 'absolute', top: 16, right: 16, backgroundColor: '#f57922', color: 'white', fontWeight: 'bold' }} />
                            </Box>
                            <DialogTitle>
                                <Typography variant="h5" className="font-bold" sx={{ color: '#012558' }}>
                                    {selectedProsthesis.name}
                                </Typography>
                            </DialogTitle>
                            <DialogContent>
                                <Typography variant="body1" className="mb-6">
                                    {selectedProsthesis.description}
                                </Typography>
                                <Typography variant="h6" className="font-bold mb-3" sx={{ color: '#012558' }}>
                                    Características principales:
                                </Typography>
                                <Box className="space-y-2">
                                    {selectedProsthesis.features.map((feature, index) => (
                                        <Box key={index} className="flex items-center gap-2">
                                            <CheckCircleIcon sx={{ color: '#f57922' }} />
                                            <Typography variant="body1">{feature}</Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </DialogContent>
                            <DialogActions sx={{ p: 3 }}>
                                <Button onClick={() => setSelectedProsthesis(null)} variant="outlined" sx={{ borderColor: '#012558', color: '#012558', fontWeight: 'bold' }}>
                                    Cerrar
                                </Button>
                                <Button variant="contained" sx={{ backgroundColor: '#f57922', fontWeight: 'bold', '&:hover': { backgroundColor: '#d66a1d' } }}>
                                    Solicitar Información
                                </Button>
                            </DialogActions>
                        </>
                    )}
                </Dialog>
            </Container>
        </Box>
    );
}

export { PieYTobillo };
