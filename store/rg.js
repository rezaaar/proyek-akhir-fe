export const useRGStore = defineStore({
    id: 'rg',
    state: () => ({
        selectedRG: '',
        selectedLab: ''
    }),
    getters: {
       
    },
    actions: {
        setRG(id) {
            this.selectedRG = id
        },

        setLab(id) {
            this.selectedLab = id
        }
    }
})