import axios from "axios";

export const useUserStore = defineStore('user', {
    state: () => ({
        users: []
    }),
    getters: {
        
    },
    actions: {
        async getAllUser() {
            await axios.get(useRuntimeConfig().API_URL + "user").then((response) => {
                this.users = response.data
            }).catch((err) => {
                console.log(err);
            })
        },
        async editUser(id, data) {
            await axios.put(useRuntimeConfig().API_URL + "user/"+id, {
                username: data.username,
                email: data.email,
                role: data.role
            }).then((response) => {
                console.log(response);
            })
        },
        async deleteUser(id) {
            await axios.delete(useRuntimeConfig().API_URL + "user/"+id).then((response) => {
                console.log(response);
            })
        },
    },
});
