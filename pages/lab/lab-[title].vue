<template>
    <div class="container mx-auto pt-5">
        <img v-if="dataLab.image" class="h-auto max-w-full" :src="'https://drive.google.com/uc?export=view&id=' + dataLab.image.image_id" alt="">
        <h2 class="mb-4 text-3xl lg:text-4xl mt-5 tracking-tight text-center font-extrabold text-primary-900 dark:text-white">
            {{ dataLab.name }}</h2>
    </div>
</template>

<script>
import axios from 'axios';
import { useRGStore } from '~/store/rg';

export default {
    data() {
        return {
            dataLab: [],
            RGStore: useRGStore()
        }
    },

    async mounted() {
        await this.getDataLab()
    },

    methods: {
        async getDataLab() {
            await axios.get(useRuntimeConfig().public.API_URL + 'lab/' + this.RGStore.selectedLab).then(
                (res) => {
                    this.dataLab = res.data
                }
            ).catch(
                (err) => {
                    console.log(err);
                }
            )
        },

        async getImage() {
            await axios.get(useRuntimeConfig().public.API_URL + 'upload-base64/').then(
                (res) => {
                    this.dataLab = res.data
                }
            ).catch(
                (err) => {
                    console.log(err);
                }
            )
        }
    }
}
</script>