<template>
    <div>
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">

                <!-- <div class="mb-24">                    
                    <video class="w-full rounded" controls>
                        <source src="/docs/videos/flowbite.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div> -->




                <div class="mb-24">
                    <h2
                        class="mb-4 text-3xl lg:text-4xl tracking-tight text-center font-extrabold text-primary-900 dark:text-white">
                        {{ dataProdi.name }}</h2>
                    <p class="text-justify font-light text-gray-500 sm:text-xl dark:text-gray-400">{{ dataProdi.description }}
                    </p>
                </div>


                <div class="grid grid-cols-2 gap-8 mb-24">
                    <div v-if="dataProdi.visi">
                        <h2
                            class="mb-8 text-5xl font-extrabold tracking-tight text-primary-900 shadow-[0px_5px_#1e3a8a] dark:text-white">
                            Visi</h2>
                        <p class="text-justify font-light text-gray-500 sm:text-xl dark:text-gray-400">
                            {{ dataProdi.visi.main }}</p>
                        <br>
                        <ol
                            class="list-decimal list-inside text-justify font-light text-gray-500 sm:text-xl dark:text-gray-400">
                            <li v-for="visi in dataProdi.visi.sub">{{ visi }}</li>
                        </ol>
                    </div>

                    <div class="text-justify" v-if="dataProdi.misi">
                        <h5
                            class="mb-8 text-5xl font-extrabold tracking-tight text-primary-900 shadow-[0px_5px_#1e3a8a] dark:text-white">
                            Misi</h5>
                        <p class="text-justify font-light text-gray-500 sm:text-xl dark:text-gray-400"
                            v-if="dataProdi.misi.main">{{ dataProdi.misi.main }}</p>

                        <br>
                        <ol
                            class="list-decimal list-inside text-justify font-light text-gray-500 sm:text-xl dark:text-gray-400">
                            <li v-for="misi in dataProdi.misi.sub">{{ misi }}</li>
                        </ol>
                    </div>

                </div>



                <!-- <div>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <caption
                                class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                                Kurikulum
                                <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Berikut merupakan
                                    kurikulum yang diberikan</p>
                            </caption>
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        No
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Kode
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Mata Kuliah
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        SKS
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Jam
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="i in 7">
                                    <th scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {{ i }}
                                    </th>
                                    <td class="px-6 py-4">
                                        {{ "VC04120" + i }}
                                    </td>
                                    <td class="px-6 py-4">
                                        Bahasa
                                    </td>
                                    <td class="px-6 py-4">
                                        2
                                    </td>
                                    <td class="px-6 py-4">
                                        2
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr class="font-semibold text-gray-900 dark:text-white">
                                    <th scope="row" class="px-6 py-3 text-base" colspan="3">Total</th>
                                    <td class="px-6 py-3">3</td>
                                    <td class="px-6 py-3">21,000</td>
                                </tr>
                            </tfoot>
                        </table>

                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        No
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Kode
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Mata Kuliah
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        SKS
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Jam
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="i in 7">
                                    <th scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {{ i }}
                                    </th>
                                    <td class="px-6 py-4">
                                        {{ "VC04120" + i }}
                                    </td>
                                    <td class="px-6 py-4">
                                        Bahasa
                                    </td>
                                    <td class="px-6 py-4">
                                        2
                                    </td>
                                    <td class="px-6 py-4">
                                        2
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr class="font-semibold text-gray-900 dark:text-white">
                                    <th scope="row" class="px-6 py-3 text-base" colspan="3">Total</th>
                                    <td class="px-6 py-3">3</td>
                                    <td class="px-6 py-3">21,000</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                </div> -->

            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios'
import { useProdiStore } from '~/store/prodi';

export default {
    data() {
        return {
            dataProdi: [],
            prodiStore: useProdiStore()
        }
    },
    async mounted() {
        await this.getDataProdi()
        // console.log(this.dataLab);

    },

    methods: {
        async getDataProdi() {
            await axios.get(useRuntimeConfig().public.API_URL + 'prodi/' + this.prodiStore.selectedProdi).then(
                (res) => {
                    this.dataProdi = res.data
                }
            ).catch((err) => console.log(err))
        }
    }
}
</script>