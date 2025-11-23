import { useState } from 'react'
import { Grid, Stack, TextField, Button, Typography } from "@mui/material";
import { Kbutton } from '@/components/ui/KButton';
const colorTextField = {
    "& .MuiInputBase-root":
    {
        backgroundColor: "#fffdfdff !important", // color de fondo
        color: "black", // color del texto
    },

}
function Form() {
    const [emisor, setEmisor] = useState('');
    const manejarCambio = (e) => {
        setEmisor(e.target.value);
    }
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} size={{ xs: 12, md: 12 }}>
                <Typography variant="h6">Enviar Mensaje</Typography>
                <Stack spacing={2}>
                    <TextField
                        label="Escribe algo..."
                        id='outlined-disabled'
                        size='small'
                        fullWidth
                        color=""
                        sx={colorTextField}

                        value={emisor} onChange={manejarCambio} />
                    <Grid container spacing={2}>
                        <Grid item size={{ xs: 12, md: 6 }}>
                            <TextField
                                label="Escribe algo..."
                                id='outlined-disabled'
                                size='small'
                                fullWidth
                                value={emisor} onChange={manejarCambio}
                                sx={colorTextField}
                            />

                        </Grid>
                        <Grid item size={{ xs: 12, md: 6 }}>
                            <TextField
                                label="Escribe algo..."
                                id='outlined-disabled'
                                size='small'
                                fullWidth
                                sx={colorTextField}
                                value={emisor} onChange={manejarCambio} />
                        </Grid>
                    </Grid>
                    <TextField
                        label="Escribe algo..."
                        id='outlined-multiline-flexible'
                        size='small'
                        fullWidth
                        style={{ height: '2vh' }}
                        multiline
                        maxRows={3}
                        value={emisor} onChange={manejarCambio}
                        sx={colorTextField}
                    />
                    <p>{emisor}</p>
                    <Kbutton color="primary" variant="contained" text='Enviar' />
                </Stack>
            </Grid>

        </Grid>
    );
}

export { Form };