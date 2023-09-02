export const useProdiStore = defineStore('prodi',{
    state: () => ({
        selectedProdi: '',
    }),
    actions: {
        setProdi(id) {
            this.selectedProdi = id
        }
    }
})
