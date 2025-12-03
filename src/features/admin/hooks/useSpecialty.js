import { adminApi } from "@/features/admin/api/adminApi";
import React, { useState, useCallback } from 'react'
import { showToast } from "@/lib/toast";

export const useSpecialtyApi = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const fetchSpecialties = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const result = await adminApi.getSpecialties();
            setData(result.data);
            return result.data;
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Error al cargar las especialidades';
            setError(errorMessage);
            showToast.error(errorMessage);
            return null;
        } finally {
            setLoading(false);
        }
    }, []);

    const createSpecialty = useCallback(async (data) => {
        setLoading(true);
        setError(null);
        try {
            const result = await adminApi.createSpecialty(data);
            setData(result.data);
            return result.data;
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Error al crear la  especialidad';
            setError(errorMessage);
            showToast.error(errorMessage);
            return null;
        } finally {
            setLoading(false);
        }
    }, []);

    const updateSpecialty = useCallback(async (data) => {
        setLoading(true);
        setError(null);
        try {
            const result = await adminApi.updateSpecialty(data);
            setData(result.data);
            return result.data;
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Error al actualizar la  especialidad';
            setError(errorMessage);
            showToast.error(errorMessage);
            return null;
        } finally {
            setLoading(false);
        }
    }, []);
    return {
        loading,
        error,
        data,
        createSpecialty,
        updateSpecialty,
        fetchSpecialties
    };
}
