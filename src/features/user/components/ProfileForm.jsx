import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Grid, Typography, Paper, Box } from '@mui/material';
import { Kbutton } from '@/components/ui/KButton';

const ProfileForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName: 'Juan',
            lastName: 'Pérez',
            email: 'juan.perez@example.com',
            phone: '0991234567'
        }
    });

    const onSubmit = (data) => {
        console.log('Actualizando perfil:', data);
        // Aquí llamaríamos a userProfileApi.updateProfile(data)
    };

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
                            {...register('firstName', { required: 'El nombre es requerido' })}
                            error={!!errors.firstName}
                            helperText={errors.firstName?.message}
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
                            {...register('email', { required: 'El correo es requerido' })}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                            variant="outlined"
                            disabled // El email suele ser inmutable o requiere otro proceso
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="Teléfono"
                            {...register('phone')}
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
