import { specialtyApi } from "@/features/appointments/api/specialty";

import React, { useState, useCallback } from 'react'
import { showToast } from "@/lib/toast";

export const useSpecialtyApi = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const fetchSpecialty = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const result = await specialtyApi.getSpecialty();
            setData(result.data);
            return result.data;
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Error al cargar la especialidad';
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
        fetchSpecialty,
    };
}
