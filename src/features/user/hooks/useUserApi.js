import { useState, useCallback } from 'react';
import { userProfileApi } from '@/features/user/api/profile';
import { showToast } from "@/lib/toast";

export const useUserApi = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const fetchProfile = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const result = await userProfileApi.getIdProfile();
            setData(result.data);
            return result.data;
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Error al cargar el perfil';
            setError(errorMessage);
            showToast.error(errorMessage);
            return null;
        } finally {
            setLoading(false);
        }
    }, []);

    const updateProfile = async (profileData) => {
        setLoading(true);
        setError(null);
        try {
            const result = await userProfileApi.updateProfile(profileData);
            showToast.success(result.data.message || 'Perfil actualizado correctamente');
            return result.data;
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Error al actualizar el perfil';
            setError(errorMessage);
            showToast.error(errorMessage);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        error,
        data,
        fetchProfile,
        updateProfile
    };
};
