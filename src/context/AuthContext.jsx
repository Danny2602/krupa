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

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
