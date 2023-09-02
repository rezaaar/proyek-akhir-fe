import axios from "axios";

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        profile: {
           
        },
        isLogin: false,
    }),
    getters: {

    },
    actions: {
        async login(user) {
            await axios.post(useRuntimeConfig().API_URL + "auth/signin", {
                username: user.username,
                password: user.password
            }).then((response) => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                    localStorage.setItem('token', response.data.accessToken);
                    this.isLogin = true
                }
            }).catch((err) => {
                console.log(err);
            })
        },
        logout() {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            this.isLogin = false
        },

        async createUser(user) {
            await axios.post(useRuntimeConfig().API_URL + 'auth/createUser', {
              username: user.username,
              email: user.email,
              password: user.password
            });
        },

        async updateProfile(profile) {
            await axios.put(useRuntimeConfig().API_URL + "auth/updateUser/"+profile.id, {
                username: profile.username,
                email: profile.email,
                password: profile.password
            }).then((response) => {
                console.log(response);
            })
        }
    },
});
