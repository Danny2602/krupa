import api from '@/lib/axios';

export const userProfileApi = {
    // Obtener perfil del usuario
    getProfile: async () => {
        const { data } = await api.get('/users/profile');
        return data;
    },
    // Obtener perfil del usuario
    getIdProfile: async (profileData) => {
        const { data } = await api.get('/users/profile', profileData);
        return { data };
    },
    // Actualizar perfil
    updateProfile: async (profileData) => {
        const { data } = await api.patch('/users/profile', profileData);
        return { data };
    },

    // Cambiar contraseña
    changePassword: async (passwordData) => {
        const { data } = await api.post('/users/change-password', passwordData);
        return data;
    }
};
