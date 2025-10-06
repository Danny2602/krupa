import { useState, useEffect, useRef } from 'react';
import image1 from '@/assets/images/image1.jpg';
import image2 from '@/assets/images/image2.jpg';
import image3 from '@/assets/images/image3.jpg';
import image4 from '@/assets/images/image4.jpg';
import image5 from '@/assets/images/image5.jpg';
//Importar estilos
import '@/assets/styles/imgStyle.css';
//Componentes de MUI
import { Grid, Stack, Paper, Box, styled, useMediaQuery } from "@mui/material";
import { LetterMove } from './efectos_texto/letterMove';
import useScrollAndMobile from "@/hooks/useScrollAndMovile.js";

const images = [
  { src: image1, label: "Nuestra Misión" },
  { src: image2, label: "¿Por qué?" },
  { src: image3, label: "Nosotros" },
  { src: image4, label: "Valores" },
  { src: image5, label: "Nuestra Visión" }
];

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'white',
  backgroundColor: 'transparent',
}));

const ImageItem = ({ image, children, ...props }) => (
  <Item
    {...props}
    className="imgItem"
    style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${image})`,
      ...props.style
    }}
  >
    {children}
  </Item>
);

const ImageItemCenter = ({ image, children, ...props }) => (
  <Item
    {...props}
    className="imgItemCenter"
    style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${image})`,
      ...props.style
    }}
  >
    {children}
  </Item>
);

function Card() {
  const [mainIdx, setMainIdx] = useState(4); // image5 es la principal al inicio
  const intervalRef = useRef();
  const { scrolled, isMobile } = useScrollAndMobile();
  // Rotación automática
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setMainIdx(prev => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Cuando el usuario selecciona una imagen pequeña
  const handleSelect = (idx) => {
    if (idx === mainIdx) return;
    // Intercambiar la imagen principal con la seleccionada
    setMainIdx(idx);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setMainIdx(prev => (prev + 1) % images.length);
    }, 10000);
  };

  // Imágenes pequeñas (excluyendo la principal)
  const smallImages = images.map((img, idx) => ({ ...img, idx }))
    .filter(img => img.idx !== mainIdx);

  return (
    <Box sx={{ flexGrow: 1}} padding={1}>
      <Grid container spacing={1}>
        <Grid item size={{ xs: 12, md: 10.5 }}>
          <ImageItemCenter image={images[mainIdx].src} sx={{ height: '100%', boxSizing: 'border-box' }}>
            <Grid container padding={7} alignItems="center" justifyContent="center" style={{ height: '100%' }}>
              <Grid item size={{ xs: 12, md: 6 }}>
                  <LetterMove letter={images[mainIdx].label === "Nuestra Misión" ? "Nuestra Misión" : images[mainIdx].label} fontSize={'1.7vh'}/>
              </Grid>
              <Grid item size={{ xs: 12, md: 6 }}>
                {images[mainIdx].label === "Nuestra Visión" ? (
                  <h3 style={{ textAlign: 'justify', fontSize: isMobile ? '1.5vh': '2.5vh', textShadow: '2px 2px 4px #000000' }}>
                    Ser la mejor empresa que ofrece soluciones y responde
                    directo a las necesidades ortopédicas, protésicas, y
                    ortesicas en Ecuador. {isMobile ? (<>vacio</>): (<>Krupa O&P va a ser el distribuidor
                    de productos O&P más completo del país con una alta variedad
                    de marcas de calidad y disponibilidad a través de un inventario
                    creciente. 
                    Sabemos que nuestros clientes finales son pacientes
                    y trabajamos con nuestros clientes directos para asegurar que
                    tendrán en sus manos las mejores soluciones tecnológicas para
                    sus pacientes. Creemos que ser una empresa ágil y eficiente nos
                    ayudará mantener bajos costos operativos y, por ende, mejores
                    costos al consumidor.</>
                    )} 
                  </h3>
                ) : images[mainIdx].label === "Nosotros" ? (
                  <h3 style={{ textAlign: 'justify',fontSize: isMobile ? '1.5vh': '2.5vh', textShadow: '2px 2px 4px #000000' }}>
                    Krupa O&P es un distribuidor sumamente eficaz de tecnología 
                    ortopédica, protésica y órtesica. Nacimos en 2011 en Quito, 
                    Ecuador.{isMobile ? (<></>) : (<>Krupa O&P es una compañía dedicada a ser el mejor proveedor 
                    de productos O&P en Ecuador.</>)} <br></br>
                    
                  </h3>
                ) : images[mainIdx].label === "¿Por qué?" ? (
                  <h3 style={{ textAlign: 'justify', fontSize: isMobile ? '1.5vh': '2.5vh',textShadow:'2px 2px 4px #000000' }}>
                    El equipo de Krupa O&P tiene más de 25 años sumados de experiencia 
                    en mejorar aceso global a tecnología ortopédico y servicios ortesicos 
                    y protésicos.<br></br> {isMobile ? (<></>) : (<>Desde nuestro punto de vista, existe una falta de selección de productos
                    y tecnologías de calidad para el paciente en Ecuador. Creemos que cualquier
                    persona que requiere algún producto ortopédico, protésico o ortesico debe 
                    tener acceso a lo mejor que ofrece el mundo hoy en día.</>)}
                    
                  </h3>
                ) : images[mainIdx].label === "Nuestra Misión" ? (
                  <h3 style={{ textAlign: 'justify', fontSize: isMobile ? '1.5vh': '2.5vh',textShadow:'2px 2px 4px #000000' }}>
                    Proveer a nuestros clientes los mejores productos y soluciones 
                    de rehabilitación con los precios más competitivos del mercado.
                  </h3>
                ) : images[mainIdx].label === "Valores" ? (
                  <h3 style={{ textAlign: 'justify', fontSize: isMobile ? '1.5vh': '2.5vh',textShadow:'2px 2px 4px #000000' }}>
                    Nuestros principios son la base de KRUPA O&P.Estos valores nos ayudan proveer
                    las mejores soluciones en el campo de rehabilitación, órtesis y prótesis.<br /> 
                    {isMobile ? (<></>) : (<>El enfoque de nuestros principios es el cliente:
                    <ul>
                      <li>Comprehensión</li>
                      <li>Éxito compartido</li>
                      <li>Eficiencia</li>
                      <li>Honestidad e Integridad</li>
                      <li>Excelente Atención al Cliente</li>  
                    </ul></>)} 
                  </h3>
                ) : null}
              </Grid>

            </Grid>
          </ImageItemCenter>
        </Grid>
        <Grid item size={{ xs: 12, md: 1.5 }} style={{ height: '100%' }} >
          <Stack spacing={1} flexWrap='wrap' justifyContent="center" alignItems="center" direction={{ xs: 'row', md: 'column' }} >                 
            {smallImages.map(img => (
              <Grid key={img.idx} size={{xs:3, md:12}} onClick={() => handleSelect(img.idx)} style={{ cursor: 'pointer' }}>
                <ImageItem image={img.src} sx={{ height: '9vw', border: img.idx === mainIdx ? '2px solid #fff' : 'none' }}>
                  <Grid item size={{ md:12}} style={{
                    height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <h2 style={{ fontSize: isMobile ? '1.7vh' : '2.4vh' }}>{img.label}</h2>
                  </Grid>
                </ImageItem>
              </Grid>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export { Card };