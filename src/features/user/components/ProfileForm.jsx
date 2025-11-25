import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Grid, Typography, Paper, Box } from '@mui/material';
import { Kbutton } from '@/components/ui/KButton';
import { updateProfileApi } from '@/features/user/api/updateprofile';
import { showToast } from "@/lib/toast";

const ProfileForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
            try {
                const nombre=`${data.lastName} ${data.name}`.trim()
                console.log(data.lastName)
                const formulario={
                    name:nombre,
                    tlf:data.tlf,
                    password:data.password
                }
                console.log(formulario)
                const respuesta = await updateProfileApi.updateProfile(formulario);
                console.log(respuesta)
                showToast.success(respuesta.data.message);
            } catch (error) {
                showToast.error(error.response.data.message);
            }
        }

    return (
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom color="primary">
                Mi Perfil
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Actualiza tu información personal aquí.
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="Nombre"
                            {...register('name', { required: 'El nombre es requerido' })}
                            error={!!errors.name}
                            helperText={errors.name?.message}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="Apellido"
                            {...register('lastName', { required: 'El apellido es requerido' })}
                            error={!!errors.lastName}
                            helperText={errors.lastName?.message}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="Correo Electrónico"
                            type="email"
                            value={'dato'}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                            variant="outlined"
                            disabled // El email suele ser inmutable o requiere otro proceso
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="Contraseña"
                            type="password"
                            
                            {...register("password", {
									required: "La contraseña es requerida",
								})}
                            error={!!errors.message}
                            helperText={errors.password?.message}
                            variant="outlined"

                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="Teléfono"
                            {...register('tlf')}
                            variant="outlined"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Box display="flex" justifyContent="flex-end" mt={2}>
                            <Kbutton
                                text="Guardar Cambios"
                                color="primary"
                                variant="contained"
                                type="submit"
                                size="large"
                            />
                        </Box>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
};

export default ProfileForm;
