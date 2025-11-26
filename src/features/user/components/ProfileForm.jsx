import React,{useEffect, useState} from 'react';
import { set, useForm } from 'react-hook-form';
import { TextField, Grid, Typography, Paper, Box } from '@mui/material';
import { Kbutton } from '@/components/ui/KButton';
import { updateProfileApi } from '@/features/user/api/updateprofile';
import { getProfileApi } from '@/features/user/api/getProfile';
import { showToast } from "@/lib/toast";
import { useAuth } from '@/context/AuthContext';
const ProfileForm = () => {
    const { register, handleSubmit,setValue, formState: { errors } } = useForm();
    const { user } = useAuth();
    

    const onSubmit = async (data) => {
        try{
                const respuesta = await updateProfileApi.updateProfile(data);
                showToast.success(respuesta.data.message);
            } catch (error) {
                showToast.error(error.response.data.message);
            }
        }

    useEffect(()=>{
        loadData()
    },[])

    const loadData= async () =>{
        try{
            const result=await getProfileApi.getIdProfile()
            setValue('name',result.data.name)
            setValue('tlf',result.data.tlf)
            setValue('email',result.data.email)
            setValue('password',result.data.password)
        }catch(e){
            console.log(e)
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
                    <Grid item xs={12} md={12}>
                        <TextField
                            fullWidth
                            label="Nombre y Apellidos"
                            {...register('name', { required: 'El nombre es requerido' })}
                            error={!!errors.name}
                            helperText={errors.name?.message}
                            variant="outlined"
                            
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="Correo Electrónico"
                            type="email"
                            
                            value={user.email}
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
