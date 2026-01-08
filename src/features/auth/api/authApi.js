import api from '@/lib/axios';

export const authApi = {
    // Registrar un nuevo usuario
    register: async (userData) => {
        const { data } = await api.post('/users', userData);
        return data;
    },

    // Iniciar sesión (Placeholder por ahora, ya que el form actual solo redirige)
    login: async (credentials) => {// login simple para probar
        const { data } = await api.post('/auth/credentials', credentials);
        return data;
    },

    // Verificar estado de la sesión
    checkStatus: async () => {
        const { data } = await api.get('/auth/check-status', {
            withCredentials: true  // Importante para cookies
        });
        return data;
    },

    // Cerrar sesión
    logout: async () => {
        const { data } = await api.get('/auth/logout', {
            withCredentials: true  //mportante para cookies
        });
        return data;
    }
};
