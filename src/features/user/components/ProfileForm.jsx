import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Grid, Typography, Paper, Box, Avatar, Divider, InputAdornment, IconButton } from '@mui/material';
import { Kbutton } from '@/components/ui/KButton';
import { useUserApi } from '@/features/user/hooks/useUserApi';
import { useAuth } from '@/context/AuthContext';
import { KSkeleton } from '@/components/ui/KSkeleton';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const ProfileForm = () => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const { user } = useAuth();
    const { fetchProfile, updateProfile, loading, data } = useUserApi();
    const [showPassword, setShowPassword] = React.useState(false);

    useEffect(() => {
        load();
    }, [fetchProfile, setValue]);

    const load = async () => {
        const profileData = await fetchProfile();
        if (profileData) {
            setValue('name', profileData.name);
            setValue('tlf', profileData.tlf);
            setValue('email', profileData.email);
            // Password usually isn't sent back for security, but if it is:
            // setValue('password', profileData.password); 
        }
    };
    const onSubmit = async (formData) => {
        await updateProfile(formData);
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    if (loading && !data) {
        return (
            <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: '1px solid', borderColor: 'divider' }}>
                <Box display="flex" alignItems="center" mb={4}>
                    <KSkeleton variant="circular" width={80} height={80} sx={{ mr: 3 }} />
                    <Box width="100%">
                        <KSkeleton variant="text" width="40%" height={32} sx={{ mb: 1 }} />
                        <KSkeleton variant="text" width="60%" height={20} />
                    </Box>
                </Box>
                <Grid container spacing={3}>
                    {[1, 2, 3, 4].map((item) => (
                        <Grid item xs={12} md={6} key={item}>
                            <KSkeleton variant="rectangular" height={56} sx={{ borderRadius: 1 }} />
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        );
    }

    return (
        <Paper elevation={0} sx={{ p: { xs: 3, md: 5 }, borderRadius: 3, border: '1px solid', borderColor: 'divider', background: 'linear-gradient(to bottom right, #ffffff, #f8f9fa)' }}>
            <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} alignItems="center" mb={4}>
                <Avatar
                    sx={{
                        width: 80,
                        height: 80,
                        bgcolor: 'primary.main',
                        fontSize: '2rem',
                        mr: { xs: 0, sm: 3 },
                        mb: { xs: 2, sm: 0 },
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}
                >
                    {data?.name ? data.name.charAt(0).toUpperCase() : <PersonIcon fontSize="large" />}
                </Avatar>
                <Box textAlign={{ xs: 'center', sm: 'left' }}>
                    <Typography variant="h5" fontWeight="800" color="text.primary">
                        {data?.name || 'Mi Perfil'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Gestiona tu información personal y seguridad
                    </Typography>
                </Box>
            </Box>

            <Divider sx={{ mb: 4 }} />

            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={3}>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <TextField
                            fullWidth
                            label="Nombre Completo"
                            placeholder="Ej. Juan Pérez"
                            {...register('name', { required: 'El nombre es requerido' })}
                            error={!!errors.name}
                            helperText={errors.name?.message}
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonIcon color="action" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>

                    <Grid item size={{ xs: 12, md: 6 }}>
                        <TextField
                            fullWidth
                            label="Correo Electrónico"
                            type="email"
                            value={user?.email || ''}
                            variant="outlined"
                            disabled
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon color="action" />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{ bgcolor: 'action.hover' }}
                        />
                    </Grid>

                    <Grid item size={{ xs: 12, md: 6 }}>
                        <TextField
                            fullWidth
                            label="Teléfono"
                            placeholder="+51 999 999 999"
                            {...register('tlf')}
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PhoneIcon color="action" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>

                    <Grid item size={{ xs: 12, md: 6 }}>
                        <TextField
                            fullWidth
                            label="Contraseña"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Actualizar contraseña"
                            {...register("password")}
                            error={!!errors.password}
                            helperText={errors.password?.message || "Dejar en blanco para mantener la actual"}
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon color="action" />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Box display="flex" justifyContent="flex-end" mt={3}>
                            <Kbutton
                                text={loading ? "Guardando..." : "Guardar Cambios"}
                                color="primary"
                                variant="contained"
                                type="submit"
                                size="large"
                                disabled={loading}
                                sx={{
                                    px: 5,
                                    py: 1.5,
                                    borderRadius: 2,
                                    fontWeight: 'bold',
                                    boxShadow: '0 4px 14px 0 rgba(0,118,255,0.39)'
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
};

export default ProfileForm;
