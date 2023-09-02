<template>
    <div class="py-8 container mx-auto">


        <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight text-center font-extrabold text-primary-900 dark:text-white">
            Lab</h2>
        <p class="mb-8 font-light text-gray-500 text-center mx-auto max-w-screen-sm sm:text-xl dark:text-gray-400">
            Berikut merupakan Lab yang terdapat di Departemen Teknik Informatika dan Komputer</p>

        <div class="grid grid-cols-4 gap-8 mb-24">
            <!-- <div v-for="lab in dataLab"
                class="border bg-white hover:bg-gray-50 cursor-pointer p-8 flex flex-col justify-center items-center rounded">
                <img class="rounded-t" src="	https://dtik.pens.ac.id/wp-content/uploads/2018/11/2-e1522373753821.jpg"
                    alt="" />
                <h2 class="text-2xl lg:text-4xl tracking-tight text-center font-extrabold text-primary-900 dark:text-white">
                    {{ lab.name }}</h2>
            </div> -->

            <nuxt-link :to="'/lab/lab-' + lab.name" @click="RGStore.setLab(lab._id)" v-for="lab in dataLab" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img v-if="lab.image" class="rounded-t-lg" :src="'https://drive.google.com/uc?export=view&id=' + lab.image.image_id" alt="" />
                <div class="p-5">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-primary-900 dark:text-white">{{lab.name}}</h5>
                </div>
            </nuxt-link>
        </div>

        <div class="w-full flex justify-center">
            <nuxt-link to="http://virtualtour.pens.ac.id/" target="_blank">
            <button type="button" class="text-white bg-primary-900 hover:bg-primary-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-3 mr-2 mb-24 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Virtual Tour PENS</button>
        </nuxt-link>
        </div>


        <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight text-center font-extrabold text-primary-900 dark:text-white">
            Riset Grup</h2>
        <p class="mb-8 font-light text-gray-500 text-center mx-auto max-w-screen-sm sm:text-xl dark:text-gray-400">
            Berikut merupakan riset grup yang terdapat di Departemen Teknik Informatika dan Komputer</p>

        <div class="grid grid-cols-3 gap-8">
            <nuxt-link :to="'/lab/rg-' + rg.name" @click="RGStore.setRG(rg._id)" v-for="rg in dataRG"
                class="border bg-white hover:bg-gray-50 cursor-pointer p-8 flex justify-center align-middle items-center rounded">
                <h2 class="text-3xl lg:text-4xl tracking-tight text-center font-extrabold text-primary-900 dark:text-white">
                    {{ rg.name }}</h2>
            </nuxt-link>
        </div>



    </div>
</template>

<script>
import axios from 'axios';
import { useRGStore } from '~/store/rg.js';

export default {
    data() {
        return {
            dataLab: null,
            dataRG: null,
            RGStore: useRGStore()
        }
    },
    async mounted() {
        await this.getDataLab()
        await this.getDataRG()
    },

    methods: {
        async getDataLab() {
            axios.get(useRuntimeConfig().public.API_URL + 'lab').then(
                (res) => {
                    this.dataLab = res.data
                }
            ).catch(
                (err) => {
                    console.log(err);
                }
            )
        },

        async getDataRG() {
            axios.get(useRuntimeConfig().public.API_URL + 'research-group').then(
                (res) => {
                    this.dataRG = res.data
                }
            ).catch(
                (err) => {
                    console.log(err);
                }
            )
        }
    },
}

</script>