import api from '@/lib/axios';

export const userAppointmentsApi = {
    // Obtener mis citas
    getMyAppointments: async () => {
        const { data } = await api.get('/appointments/my-appointments');
        return data;
    },

    // Crear una nueva cita
    createAppointment: async (appointmentData) => {
        const { data } = await api.post('/appointments', appointmentData);
        return data;
    },

    // Cancelar mi cita
    cancelAppointment: async (id) => {
        const { data } = await api.patch(`/appointments/${id}/cancel`);
        return data;
    },

    // --- Nuevos métodos para el Stepper ---

    // Obtener especialidades disponibles
    getSpecialties: async () => {
        const { data } = await api.get('/appointments/specialties');
        return data;
    },

    // Obtener doctores (opcionalmente filtrados por especialidad)
    getDoctors: async (specialtyId) => {
        const { data } = await api.get('/appointments/doctors', { params: { specialtyId } });
        return data;
    },

    // Obtener slots disponibles para un doctor y fecha
    getAvailableSlots: async (doctorId, date) => {
        const { data } = await api.get(`/appointments/doctors/${doctorId}/slots`, { params: { date } });
        return data;
    }
};
