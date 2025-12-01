import api from "@/lib/axios";

export const specialtyApi = {
    getSpecialty: async () => {
        const data = await api.get('/specialty');
        return data;
    },

}
