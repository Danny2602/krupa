import api from "@/lib/axios";

export const specialtyApi = {
    getSpecialty: async () => {
        const data = await api.get('/api/specialty');
        return data;
    },

}
