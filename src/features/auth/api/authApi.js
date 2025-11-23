import api from '@/lib/axios';

export const authApi = {
    // Registrar un nuevo usuario
    register: async (userData) => {
        const { data } = await api.post('/users', userData);
        return data;
    },

    // Iniciar sesión (Placeholder por ahora, ya que el form actual solo redirige)
    login: async (credentials) => {
        // En el futuro, esto llamaría a /auth/login
        // const { data } = await api.post('/auth/login', credentials);
        // return data;
        console.log("Login simulado con:", credentials);
        return { user: { name: "Usuario Demo" }, token: "demo-token" };
    }
};
