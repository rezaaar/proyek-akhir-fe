import axios from "axios"
export const useMenuStore = defineStore({
    id: 'menu',
    state: () => ({
        menus: [],
        selectedMenu: [],
        prodis: [],
        selectedProdi: []
    }),
    getters: {
        
    },
    actions: {
        async getProdi() {
            await axios.get(useRuntimeConfig().public.API_URL+ 'prodi').then(
                (res) => {
                    this.prodis = res.data
                }
            )
        },

        async getOneProdi(id) {
            await axios.get(useRuntimeConfig().public.API_URL + 'prodi/' + id).then(
                (res) => {
                    this.selectedProdi = res.data
                }
            )
        },

        async editProdi() {
            await axios.put(useRuntimeConfig().public.API_URL + "menu/"+ this.selectedMenu._id, {
                full_title: data.full_title,
                description: data.description,
                menu_title: data.menu_title
            }).then((response) => {
                // console.log(response);
                this.selectedMenu = response.data
                for (const i in this.menus) {
                    if (this.menus[i]._id == response.data._id) {
                        this.menus[i] = response.data
                    }
                }
                
            })
        },

       async getMenus() {
            await axios.get(useRuntimeConfig().public.API_URL + "menu").then((response) => {
                this.menus = response.data
            }).catch((err) => {
                console.log(err);
            })
       },
       async editMenus(data) {
            await axios.put(useRuntimeConfig().public.API_URL + "menu/"+ this.selectedMenu._id, {
                full_title: data.full_title,
                description: data.description,
                menu_title: data.menu_title
            }).then((response) => {
                // console.log(response);
                this.selectedMenu = response.data
                for (const i in this.menus) {
                    if (this.menus[i]._id == response.data._id) {
                        this.menus[i] = response.data
                    }
                }
                
            })
       },
       async getOneMenu(id) {
            await axios.get(useRuntimeConfig().public.API_URL + "menu/"+id).then((response) => {
                this.selectedMenu = response.data
            }).catch((err) => {
                console.log(err);
            })


       },
         async deleteMenu(id) {
            await axios.delete(useRuntimeConfig().public.API_URL + "menu/"+id).then((response) => {
                console.log(response);
            })
        },
        async createMenu(menu) {
            await axios.post(useRuntimeConfig().public.API_URL + 'menu', {
              full_title: menu.full_title,
              description: menu.description,
                menu_title: menu.menu_title,
                
            }).then(
                (res) => {
                    this.menus.push(res.data)
                }
            )
        },
        async deleteMenu(id) {
            await axios.delete(useRuntimeConfig().public.API_URL + "menu/"+ id)
        }
    }
})