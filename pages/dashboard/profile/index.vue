<template>
    <div>
        {{ dataProfile }}
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            dataProfile: []
        }
    },

    async mounted() {
        await this.getDataProfile()
    },

    methods: {
        async getDataProfile() {
            await axios.get('http://localhost:3030/api/profile' + this.$route.query.id)
                .then((response) => {
                    this.dataProfile = response.data
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    },
}
</script>