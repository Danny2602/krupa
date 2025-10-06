
import '@/assets/styles/imgStyle.css'
import { Height, Transform } from '@mui/icons-material';
import { Box, Button, Grid,Stack,Typography,Paper,styled,useMediaQuery } from '@mui/material'
import { useState,useEffect } from 'react';



const Item = styled(Paper)(({ theme, isActive,isMovile, normalBg,hoverBg }) => ({
  ...theme.typography.body2,
  
  padding: theme.spacing(1),
  textAlign: "center",
  color: "white",
  ...(isMovile ? {backgroundImage: isActive ? hoverBg : normalBg,}
    :{
      backgroundImage: isActive ? hoverBg : normalBg,
        transition: "all 0.8s ease-in-out", // 👈 suave
        transform: isActive ? "scale(1.1)" : "scale(1)",
        width: isActive ? "23vh !important" : "11vh",
        zIndex: isActive ? 2:0,
    }   
  )
  
}));
const ImageItemCenter = ({ image,isMovile,isActive,size={}, children,style={} ,...props }) => (
     
  <Item
    {...props}
    isMovile={isMovile}
    isActive={isActive}
    normalBg={`linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${image})`}
    hoverBg={`url(${image})`} // solo imagen al hover
    className="imgItemCenter"
    size={size}
    style={{
      ...props.style,
      ...style
    }}
  >
    {children}
  </Item>
  
);

function GroupImage({images}){
    const [activeIndex, setActiveIndex] = useState(0);
  const isMovile = useMediaQuery("(max-width:900px)");

  // Cambiar de imagen activa automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 2000); // 👈 cada 2s cambia la activa
    return () => clearInterval(interval);
  }, [images.length]);
    return(<>
    
        <Grid container padding={0} margin={0}>
            {images.map((image,index) =>(
                        <ImageItemCenter key={index} item isActive={index === activeIndex} isMovile={isMovile} size={{xs:0.1,md:0.1}} style={{width:isMovile ? '4vh': '11vh',height:isMovile ? '': '50vh'}} image={images[index]}>
                        </ImageItemCenter>
                    )
                )
            }  

        </Grid>
        
    </>)
}
export {GroupImage};