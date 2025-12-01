import React, { createContext, useContext, useEffect, useState } from 'react';
import { authApi } from '@/features/auth/api/authApi';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('use Auth es para usar dentro del AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const checkAuth = async () => {
        try {
            const data = await authApi.checkStatus();
            setUser(data.user);
            setIsAuthenticated(true);
        } catch (error) {
            console.error("Error verificando sesión:", error);
            setUser(null);
            setIsAuthenticated(false);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        checkAuth();
    }, []);

    const login = async (data) => {
        // Esta función es opcional si ya manejas el login en el componente,
        // pero es útil para actualizar el estado global inmediatamente.
        setUser(data.user);
        setIsAuthenticated(true);
    };

    const logout = async () => {
        try {
            await authApi.logout();
        } catch (error) {
            console.error("Error cerrando sesión:", error);
        } finally {
            setUser(null);
            setIsAuthenticated(false);
        }
    };

    // ✨ NUEVO: Función para refrescar el estado de autenticación
    const refreshAuth = async () => {
        await checkAuth();
    };

    // ✨ Helper para verificar si el usuario es admin o super admin
    const isAdmin = () => {
        return user?.role === 'ADMIN' || user?.role === 'SUPER_ADMIN';
    };

    // ✨ Helper para verificar si el usuario es super admin
    const isSuperAdmin = () => {
        return user?.role === 'SUPER_ADMIN';
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated,
                isLoading,
                login,
                logout,
                refreshAuth,  // ✨ Exponer función para refrescar
                isAdmin,      // ✨ Exponer helper de admin
                isSuperAdmin  // ✨ Exponer helper de super admin
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
