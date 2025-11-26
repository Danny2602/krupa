// src/components/Footer.jsx
import React from "react";
import { Box, Typography, Grid, IconButton, Stack, Divider } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn, LocationOn, Phone, Email } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react";

const Footer = () => {
  const footerLinks = {
    servicios: [
      { label: 'Columna', path: '/servicios/columna' },
      { label: 'Miembros Superiores', path: '/servicios/miembros-superiores' },
      { label: 'Rodilla', path: '/servicios/rodilla' },
      { label: 'Pie y Tobillo', path: '/servicios/pie-tobillo' },
    ],
    navegacion: [
      { label: 'Inicio', path: '/inicio' },
      { label: 'Ubicaciones', path: '/ubicaciones' },
      { label: 'Noticias', path: '/noticias' },
      { label: 'Contacto', path: '/contacto' },
    ]
  };

  const socialMedia = [
    { icon: <Facebook />, link: 'https://facebook.com', label: 'Facebook' },
    { icon: <Twitter />, link: 'https://twitter.com', label: 'Twitter' },
    { icon: <Instagram />, link: 'https://www.instagram.com/krupaop/', label: 'Instagram' },
    { icon: <LinkedIn />, link: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #012558 0%, #024080 100%)',
        color: "#ffffff",
        pt: 8,
        pb: 3,
        px: { xs: 2, sm: 6 },
        mt: 8
      }}
    >
      <Grid
        container
        spacing={4}
        justifyContent="space-between"
        sx={{ maxWidth: '1400px', mx: 'auto' }}
      >
        {/* Logo y Descripción */}
        <Grid item xs={12} md={3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#f57922", mb: 2 }}>
              BioMotion
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, opacity: 0.9 }}>
              Innovación y tecnología en prótesis y órtesis. Mejorando vidas a través de soluciones médicas avanzadas.
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#f57922', mb: 1 }}>
              Horario de Atención:
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Lunes a Viernes<br />
              9:00 - 13:00 | 14:00 - 18:00
            </Typography>
          </motion.div>
        </Grid>

        {/* Enlaces de Navegación */}
        <Grid item xs={6} sm={6} md={2}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Typography variant="h6" sx={{ mb: 2, color: "#f57922", fontWeight: 'bold' }}>
              Navegación
            </Typography>
            <Stack spacing={1.5}>
              {footerLinks.navegacion.map((link) => (
                <Typography
                  key={link.path}
                  variant="body2"
                  component={NavLink}
                  to={link.path}
                  sx={{
                    textDecoration: "none",
                    color: "inherit",
                    opacity: 0.9,
                    '&:hover': {
                      color: '#f57922',
                      opacity: 1,
                      transform: 'translateX(5px)',
                      transition: 'all 0.3s ease'
                    }
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Stack>
          </motion.div>
        </Grid>

        {/* Servicios */}
        <Grid item xs={6} sm={6} md={2}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Typography variant="h6" sx={{ mb: 2, color: "#f57922", fontWeight: 'bold' }}>
              Servicios
            </Typography>
            <Stack spacing={1.5}>
              {footerLinks.servicios.map((service) => (
                <Typography
                  key={service.path}
                  variant="body2"
                  component={NavLink}
                  to={service.path}
                  sx={{
                    textDecoration: "none",
                    color: "inherit",
                    opacity: 0.9,
                    '&:hover': {
                      color: '#f57922',
                      opacity: 1,
                      transform: 'translateX(5px)',
                      transition: 'all 0.3s ease'
                    }
                  }}
                >
                  {service.label}
                </Typography>
              ))}
            </Stack>
          </motion.div>
        </Grid>

        {/* Información de Contacto */}
        <Grid item xs={12} md={4}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Typography variant="h6" sx={{ mb: 2, color: "#f57922", fontWeight: 'bold' }}>
              Contáctanos
            </Typography>
            <Stack spacing={2}>
              <Box className="flex items-center gap-2">
                <LocationOn sx={{ color: '#f57922' }} />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Pasaje Ramiro Barba N43-100 y Edmundo Carvajal, Quito
                </Typography>
              </Box>
              <Box className="flex items-center gap-2">
                <Phone sx={{ color: '#f57922' }} />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  (02) 6039378
                </Typography>
              </Box>
              <Box className="flex items-center gap-2">
                <Email sx={{ color: '#f57922' }} />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  contacto@biomotion.com
                </Typography>
              </Box>

              {/* Redes Sociales */}
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle2" sx={{ mb: 1.5, color: "#f57922", fontWeight: 'bold' }}>
                  Síguenos en Redes Sociales
                </Typography>
                <Stack direction="row" spacing={1}>
                  {socialMedia.map((social, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconButton
                        component="a"
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        sx={{
                          color: "#ffffff",
                          backgroundColor: 'rgba(255,255,255,0.1)',
                          "&:hover": {
                            color: "#012558",
                            backgroundColor: "#f57922"
                          }
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    </motion.div>
                  ))}
                </Stack>
              </Box>
            </Stack>
          </motion.div>
        </Grid>
      </Grid>

      {/* Divider */}
      <Divider sx={{ my: 4, backgroundColor: 'rgba(255,255,255,0.1)' }} />

      {/* Copyright */}
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="body2" sx={{ opacity: 0.7 }}>
          © {new Date().getFullYear()} BioMotion. Todos los derechos reservados.
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.7, mt: 0.5 }}>
          Desarrollado con ❤️ para mejorar vidas
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
