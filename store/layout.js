export const useLayoutStore = defineStore({
    id: 'layout',
    state: () => ({
        theme: 'dark',
        layout: 'admin'
    }),
    getters: {
        getTheme: (state) => state.theme,
        getLayout: (state) => state.layout
    },
    actions: {
        setTheme(theme) {
            state.theme = theme
        },
        setLayout(layout) {
            this.layout = layout
        }
    }
})