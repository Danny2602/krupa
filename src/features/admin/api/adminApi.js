import api from '@/lib/axios';

// Placeholder API para funcionalidad futura
export const adminApi = {
    // Especialidades
    getSpecialties: async () => {
        const result = await api.get('/specialty');
        return result;
    },
    createSpecialty: async (specialtyData) => {
        const result = await api.post('/specialty', specialtyData);
        return result;
    },
    updateSpecialty: async (specialtyData) => {
        console.log("specialtyData", specialtyData);
        const result = await api.patch(`/specialty/${specialtyData.id}`, specialtyData);
        return result;
    },
    // deleteSpecialty: async (specialtyId) => {
    //     const result = await api.delete(`/specialty/${specialtyId}`);
    //     return result;
    // },
    // // Doctores
    getDoctors: async () => {
        const result = await api.get('/doctor');
        return result;
    },
    // createDoctor: async (doctorData) => {
    //     // TODO: Implementar llamada real
    //     return { data: {} };
    // },

    // // Usuarios
    // getUsers: async () => {
    //     // TODO: Implementar llamada real
    //     return { data: [] };
    // },
    // updateUserRole: async (userId, role) => {
    //     // TODO: Implementar llamada real
    //     return { data: {} };
    // },

    // // Citas
    // getAllAppointments: async () => {
    //     // TODO: Implementar llamada real
    //     return { data: [] };
    // },
    // updateAppointmentStatus: async (appointmentId, status) => {
    //     // TODO: Implementar llamada real
    //     return { data: {} };
    // },

    // // Estadísticas
    // getStats: async () => {
    //     // TODO: Implementar llamada real
    //     return {
    //         data: {
    //             totalUsers: 0,
    //             totalDoctors: 0,
    //             totalAppointments: 0,
    //             totalSpecialties: 0
    //         }
    //     };
    // }
};
