import {useState} from 'react'
import { Grid, Stack, TextField,Button,Typography } from "@mui/material";
import { Kbutton } from '@/components/kbutton';
function Form(){
    const [emisor,setEmisor]= useState('');
    const manejarCambio =(e)=>{
        setEmisor(e.target.value);
    }
    return(
        <Grid container spacing={2}>
            <Grid item xs={12} size={{xs:12,md:12}}>
                <Typography variant="h6">Enviar Mensaje</Typography>
                <Stack spacing={2}>
                    <TextField
                        label="Escribe algo..."
                        id='outlined-disabled'
                        size='small'
                        fullWidth
                        color="success"
                        focused
                        style={{backgroundColor:'white'}}
                        value={emisor} onChange={manejarCambio}/>
                    <Grid container spacing={2}>
                        <Grid item size={{xs:12,md:6}}>
                            <TextField
                                label="Escribe algo..."
                                id='outlined-disabled'
                                size='small'
                                fullWidth
                                value={emisor} onChange={manejarCambio}/>
                        </Grid>
                        <Grid item size={{xs:12,md:6}}>
                            <TextField
                                label="Escribe algo..."
                                id='outlined-disabled'
                                size='small'
                                fullWidth
                                value={emisor} onChange={manejarCambio}/>
                        </Grid>
                    </Grid>
                    <TextField
                        label="Escribe algo..."
                        id='outlined-disabled'
                        size='small'
                        fullWidth
                        value={emisor} onChange={manejarCambio}/>
                    <p>{emisor}</p>
                    <Kbutton color="primary" variant="contained" text='Enviar'/>
                </Stack>
            </Grid>
            
        </Grid>
    );
}

export {Form};