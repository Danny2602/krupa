import {Card} from '@/components/card.jsx'
import {Form} from '@/components/form.jsx'
import TextMove from '@/components/efectos_texto/textMove.jsx'
import {colors} from '@/assets/styles/colors'
import { Box,Grid,Stack,Typography,useMediaQuery } from '@mui/material'
import image6 from '@/assets/images/image6.jpg'
import image7 from '@/assets/images/image7.jpg'
import image8 from '@/assets/images/image8.jpg'
import image9 from '@/assets/images/image9.jpg'
import image10 from '@/assets/images/image10.jpg'
import image11 from '@/assets/images/image11.jpg'
import image12 from '@/assets/images/image12.jpg'
import { Kbutton } from '@/components/kbutton'
import { GroupImage } from '@/components/groupImage'
const image=[image7,image8,image9,image10,image11,image12]
function Inicio(){
    const isMovile = useMediaQuery('(max-width:900px)');
    return(
        <>
      
            <Card />
            
            <Box sx={{'& button':{m:1}}} style={{width:'90%', alignItems:'center', margin:'0 auto',marginTop:'7vh',textAlign:'center'}}>
                <TextMove title1='Investigación e innovación' title1Size= {isMovile ? '2vh':'5vh'} title2='al servicio de la salud' title2Size={isMovile ? '1.5vh':'3vh'}></TextMove>
                <br></br>
                <Grid container spacing={4} padding={0} style={{marginTop:'20px',textAlign:'center',alignItems:'center',justifyContent:'center',display:'flex'}}> 
                    {isMovile ? (
                        <>
                            <Grid item size={{xs:12,md:6}} style={{border:'1px solid black'}}>
                                <Typography sx={{textAlign:'justify'}} fontWeight={'bold'}>
                                Sabemos que los pacientes y profesionales de la salud 
                                esten constamente en la busqueda de información para mejorar 
                                su calidad de vida o la calidad de vida de sus pacientes.<br/>
                                Detrás de mucho de los productos que manejamos en Ecuador existen 
                                investigaciones científicas e información interesante para esas personas.<br/>
                                Les invitamos explorar este mundo de artículos, videos, fotos y 
                                presentaciones para tener un mejor conocimiento de todo lo que 
                                BioMotion puede hacer para ti.</Typography>
                            </Grid>
                            <Grid item size={{xs:12,md:6}} style={{border:'1px solid black'}}>
                                <GroupImage images={image} ></GroupImage>
                            </Grid>
                        </>
                    ) : (
                        <>
                            <Grid item size={{xs:12,md:6.5}} >
                                <GroupImage images={image}></GroupImage>
                            </Grid>
                            <Grid item size={{xs:12,md:5.5}} >
                                <Typography sx={{textAlign:'justify',fontWeight:'bold', fontSize:'2.5vh'}}  >
                                Sabemos que los pacientes y profesionales de la salud 
                                esten constamente en la busqueda de información para mejorar 
                                su calidad de vida o la calidad de vida de sus pacientes.<br/>
                                Detrás de mucho de los productos que manejamos en Ecuador existen 
                                investigaciones científicas e información interesante para esas personas.<br/>
                                Les invitamos explorar este mundo de artículos, videos, fotos y 
                                presentaciones para tener un mejor conocimiento de todo lo que 
                                BioMotion puede hacer para ti.</Typography>
                            </Grid>
                        </>
                        
                        )
                    }
                        
                </Grid>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Grid container spacing={2} padding={2}>
                    <Grid item size={{xs:12,md:6}}  >
                        <img src={image6} alt="Imagen" style={{width:'100%', height:'100%', objectFit:'cover'}} /> 
                    </Grid>
                    <Grid item size={{xs:12,md:6}} style={{alignItems:'center', display:'flex', justifyContent:'center'}}>
                        <Stack spacing={2} style={{textAlign:'center',alignItems:'center', justifyContent:'center'}}>

                            <Typography variant="h1" sx={{fontWeight: "bold",color: "#000",position: "relative",fontSize:'4vh'}}>
                                Los productos de BioMotion se encuentran en los siguientes establecimientos:
                            </Typography>
                            <Kbutton size='medium' variant="contained" color="primary" style={{width:'80%',fontWeight:'bold'}} text="Ver establecimientos"></Kbutton>
                        </Stack>
                    </Grid>
                    
                </Grid>
                
                {/* <Grid container spacing={2} style={{marginTop:'20px'}}>
                    <Grid item size={{xs:12,md:6}} style={{border:'1px solid black'}}>
                        <Form />
                    </Grid>                                 
                    <Grid item size={{xs:12,md:6}} style={{border:'1px solid black'}}>
                        
                    </Grid>
                </Grid> */}
                
            </Box>
            <br></br>
            <br></br>
        </>
    )
}
export {Inicio};