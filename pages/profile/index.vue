<template>
    <div>
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">

                <div class="mb-24">
                    <!-- <h2
                    class="mb-4 text-3xl lg:text-4xl tracking-tight text-center font-extrabold text-primary-900 dark:text-white">
                    Video Profil</h2>
                <p class="mb-8 font-light text-gray-500 text-center mx-auto max-w-screen-sm sm:text-xl dark:text-gray-400">
                    Berikut merupakan program studi yang terdapat di Departemen Teknik Informatika dan Komputer</p> -->

                <iframe class="w-full rounded" height="700" src="https://www.youtube.com/embed/sW2mZ9TSWqw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <div class="grid grid-cols-2 gap-8 mb-24">
                    <div>
                        <h2
                            class="mb-4 text-3xl max-w-lg lg:text-4xl tracking-tight font-extrabold text-primary-900 dark:text-white">
                            Departemen Teknik Informatika dan Komputer</h2>
                        <p class="text-justify font-light text-gray-500 sm:text-xl dark:text-gray-400">Dengan tujuan menjadi
                            pusat unggulan pendidikan teknologi rekayasa dibidang emerging
                            technology yang terkait bidang Teknologi Informasi dan Komputer untuk menghasilkan lulusan yang
                            siap
                            bersaing dipasar global</p>
                    </div>

                    <div class="text-justify">
                        <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">Departemen Teknik Informatika dan
                            Komputer telah banyak menghasilkan
                            lulusan yang berkualifikasi unggul dan bekerja sebagai Programmer, Software Engineer, Hardware
                            Designer, Network Administrator, Computer System Analyst, Manager/Supervisor, Services/Technical
                            Support, Marketing/Sales, dan lain-lain.</p>
                    </div>
                </div>

                <h2
                    class="mb-4 text-3xl lg:text-4xl tracking-tight text-center font-extrabold text-primary-900 dark:text-white">
                    Program Studi</h2>
                <p class="mb-8 font-light text-gray-500 text-center mx-auto max-w-screen-sm sm:text-xl dark:text-gray-400">
                    Berikut merupakan program studi yang terdapat di Departemen Teknik Informatika dan Komputer</p>

                <div class="grid gap-8 lg:grid-cols-4 mb-24">
                    <nuxt-link :to="'/profile/'+ prodi.name" @click="prodiStore.setProdi(prodi._id)" class="max-w-lg border p-8 flex items-center rounded bg-primary-50" v-for="prodi in dataProdi">
                        <h1 class="font-semibold text-2xl text-center text-gray-900">{{ prodi.name }}</h1>
                    </nuxt-link>
                </div>

            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios';
import { useProdiStore } from '~/store/prodi.js';
export default {
    data() {
        return {
            dataProdi: [],
            prodiStore: useProdiStore()
        }
    },
    async mounted() {
        await this.getDataProdi()
    },

    methods: {
        async getDataProdi() {
            await axios.get(useRuntimeConfig().public.API_URL + 'prodi/list').then(
                (res) => {
                    this.dataProdi = res.data
                }
            ).catch((err) => console.log(err))
        }
    },
}
</script>