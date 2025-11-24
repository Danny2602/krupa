import api from '@/lib/axios';

export const authApi = {
    // Registrar un nuevo usuario
    register: async (userData) => {
        const { data } = await api.post('/api/users', userData);
        console.log(data);
        return data;
    },

    // Iniciar sesión (Placeholder por ahora, ya que el form actual solo redirige)
    login: async (credentials) => {// login simple para probar
        const { data } = await api.post('/api/auth/credentials', credentials);
        console.log("Login simulado con:", credentials);
        return data;
    },

    // Verificar estado de la sesión
    checkStatus: async () => {
        const { data } = await api.get('/api/auth/check-status', {
            withCredentials: true  // ✨ Importante para cookies
        });
        return data;
    },

    // Cerrar sesión
    logout: async () => {
        const { data } = await api.get('/api/auth/logout', {
            withCredentials: true  // ✨ Importante para cookies
        });
        return data;
    }
};
