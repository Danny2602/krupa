import api from "@/lib/axios";

export const appointmentApi = {
    // createAppointment: async (data) => {
    //     const data = await api.post('/api/appointment', data);
    //     return data;
    // }
    getAppointmentForDoctorAndDay: async (doctorId, day) => {
        const data = await api.get(`/api/appointment/?doctorId=${doctorId}&&days=${day}`);
        return data;
    },
}