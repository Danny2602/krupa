import api from "@/lib/axios";

export const appointmentApi = {
    createAppointment: async (data) => {
        const result = await api.post('/appointment', data);
        return result;
    },
    getAppointmentForDoctorAndDay: async (doctorId, day) => {
        const data = await api.get(`/appointment/?doctorId=${doctorId}&&days=${day}`);
        return data;
    },
}