// src/components/Footer.jsx
import React from "react";
import { Box, Typography, Grid, IconButton, Stack } from "@mui/material";
import { Facebook, Twitter, Instagram,Home,LocalPhone } from "@mui/icons-material";
import {Form} from "@/components/form.jsx";
const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#012558", // secondary
        color: "#ffffff", // textPrimary
        py: 4,
        px: { xs: 2, sm: 6 },
      }}
    >
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="flex-start"
        textAlign={{ xs: "center", sm: "left" }}
      >
        {/* Logo o Nombre */}
        <Grid item size={{xs:12, sm:3}}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#f57922" }}>
            Krupa
          </Typography>
          <Typography variant="body2">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#f57922" }}>
            Horario de atención:
          </Typography>
          <Typography variant="body2">
            Lunes a Viernes: 9:00 - 13:00
                            14:00 - 18:00
          </Typography>
        </Grid>

        {/* Enlaces */}
        <Grid item size={{xs:12, sm:1}}>
          <Typography variant="h6" sx={{ mb: 1, color: "#f57922" }}>
            Enlaces
          </Typography>
          <Stack spacing={1}>
            <Typography variant="body2" component="a" href="#" sx={{ textDecoration: "none", color: "inherit" }}>
              Inicio
            </Typography>
            <Typography variant="body2" component="a" href="#" sx={{ textDecoration: "none", color: "inherit" }}>
              Servicios
            </Typography>
            <Typography variant="body2" component="a" href="#" sx={{ textDecoration: "none", color: "inherit" }}>
              Contacto
            </Typography>
          </Stack>
        </Grid>

        {/* Redes Sociales */}
        <Grid item size={{xs:12, sm:4}}>
          <Typography variant="h6" sx={{ mb: 1, color: "#f57922" }}>
            Síguenos
          </Typography>
          <Stack direction="row" justifyContent={{ xs: "center", sm: "flex-start" }} spacing={1}>
            <IconButton
              sx={{ color: "#ffffff", "&:hover": { color: "#f57922" } }}
              aria-label="Facebook"
            >
              <Facebook />
            </IconButton>
            <IconButton
              sx={{ color: "#ffffff", "&:hover": { color: "#f57922" } }}
              aria-label="Twitter"
            >
              <Twitter />
            </IconButton>
            
            <IconButton
              sx={{ color: "#ffffff", "&:hover": { color: "#f57922" } }}
              aria-label="Instagram"
              href="https://www.instagram.com/krupaop/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </IconButton>
          </Stack>
          <Typography variant="h6" sx={{ mb: 1, color: "#f57922" }}>
            Contáctanos
          </Typography>
          <Typography variant="body2">
            <Home/> Pasaje Ramiro Barba N43-100 y Edmundo Carvajal
          </Typography>
          <Typography variant="body2">
            <LocalPhone /> (02) 6039378
          </Typography>
        </Grid>
        <Grid item size={{xs:12, sm:4}}>
          <Form></Form>
        </Grid>


      </Grid>
    </Box>
  );
};

export default Footer;
