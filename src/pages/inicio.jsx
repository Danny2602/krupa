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
import { motion,useInView } from 'motion/react'
import { CarouselScroll } from '@/components/carouselScroll'
import { GroupImage } from '@/components/groupImage'
import { Wrench } from "lucide-react"; 
const image=[{id:2,url:image7},{id:3,url:image8},{id:4,url:image9},{id:5,url:image10},{id:6,url:image11},{id:7,url:image12},]
function Inicio(){
    const inContruccion=true
    const isMovile = useMediaQuery('(max-width:900px)');
    return(
        <>
            <div className='w-full h-[100vh] lg:min-h-screen xl:min-h-screen md:min-h-screen'>
                <Card />
            </div>
            <Box style={{width:'90%', alignItems:'center', margin:'0 auto',textAlign:'center'}}>
                
                <Grid container spacing={4} padding={0} style={{textAlign:'center',alignItems:'center',justifyContent:'center',display:'flex'}}> 
                    {isMovile ? (
                        <>
                            <Grid item size={{xs:12,md:6}} style={{}}>
                                <TextMove title1='Investigación e innovación' title1Size= {isMovile ? '3vh':'5vh'} title2='al servicio de la salud' title2Size={isMovile ? '1.5vh':'3vh'}></TextMove>
                                <br></br>
                                <Typography sx={{textAlign:'justify'}} fontWeight={'bold'} fontSize={isMovile ? '1.9vh':'5vh'}>
                                Sabemos que los pacientes y profesionales de la salud 
                                esten constamente en la busqueda de información para mejorar 
                                su calidad de vida o la calidad de vida de sus pacientes.<br/>
                                Detrás de mucho de los productos que manejamos en Ecuador existen 
                                investigaciones científicas e información interesante para esas personas.<br/>
                                Les invitamos explorar este mundo de artículos, videos, fotos y 
                                presentaciones para tener un mejor conocimiento de todo lo que 
                                BioMotion puede hacer para ti.</Typography>
                            </Grid>
                            <Grid item size={{xs:12,md:6}} style={{}}>
                                <GroupImage images={image} />
                            </Grid>
                        </>
                    ) : (
                        <>

                            <Grid item size={{xs:12,md:4}} >
                                <GroupImage images={image} />
                            </Grid>
                            <Grid item size={{xs:12,md:8}} >
                                <TextMove title1='Investigación e innovación' title1Size= {isMovile ? '2vh':'5vh'} title2='al servicio de la salud' title2Size={isMovile ? '1.5vh':'3vh'}></TextMove>
                                <br></br>
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

                <Grid container spacing={2} padding={2}>
                    <Grid item size={{xs:12,md:6}} style={{alignItems:'center', display:'flex', justifyContent:'center'}}>
                        <Stack spacing={2} style={{textAlign:'center',alignItems:'center', justifyContent:'center'}}>

                            <Typography variant="h1" sx={{fontWeight: "bold",color: "#000",position: "relative",fontSize:'4vh'}}>
                                Los productos de BioMotion se encuentran en los siguientes establecimientos:
                            </Typography>
                            <Kbutton size='medium' variant="contained" color="primary" style={{width:'80%',fontWeight:'bold'}} text="Ver establecimientos"></Kbutton>
                        </Stack>
                    </Grid>
                    <Grid item size={{xs:12,md:6}}  >
                        <img src={image6} alt="Imagen" style={{width:'100%', height:'100%', objectFit:'cover'}} /> 
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
            {inContruccion ? (
                <div container padding={2} className='bg-amber-300'>
                    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <motion.div
        animate={{ rotate: [0, 20, -20, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <Wrench size={80} className="text-amber-500" />
      </motion.div>
      <h1 className="text-3xl font-bold mt-4 text-gray-800">Página en construcción</h1>
      <p className="text-gray-500 mt-2">Vuelve pronto 🚀</p>
    </div>
                </div>
            ) : (
                <div container padding={2} className='bg-amber-300'>
                    <CarouselScroll title='Productos'></CarouselScroll>
                </div>
            )}
        </>
    )
}
export {Inicio};