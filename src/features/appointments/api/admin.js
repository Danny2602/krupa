import api from '@/lib/axios';

export const adminAppointmentsApi = {
    // Obtener TODAS las citas (filtro opcional)
    getAllAppointments: async (filters) => {
        const { data } = await api.get('/admin/appointments', { params: filters });
        return data;
    },

    // Aprobar/Rechazar cita
    updateStatus: async (id, status) => {
        const { data } = await api.patch(`/admin/appointments/${id}/status`, { status });
        return data;
    },

    // Asignar doctor manualmente
    assignDoctor: async (appointmentId, doctorId) => {
        const { data } = await api.post(`/admin/appointments/${appointmentId}/assign`, { doctorId });
        return data;
    }
};
