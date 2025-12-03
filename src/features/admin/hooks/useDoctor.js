import { adminApi } from "@/features/admin/api/adminApi";

import React, { useState, useCallback } from 'react'
import { showToast } from "@/lib/toast";

export const useDoctorApi = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const fetchDoctors = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const result = await adminApi.getDoctors();
            setData(result.data);
            return result.data;
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Error al cargar los doctores';
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
        fetchDoctors
    };
}
