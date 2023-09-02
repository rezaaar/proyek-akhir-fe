<template>
    <div class="container mx-auto pt-8">
        <section class="bg-white dark:bg-gray-900 flex h-screen -mt-8">

            <div class="max-w-screen-xl px-4 py-8 mx-auto my-auto text-center lg:py-16 lg:px-6">
                <h2 class="mb-10 text-3xl lg:text-6xl tracking-tight text-center font-extrabold text-primary-900 dark:text-white">
                    Prestasi Mahasiswa</h2>
                <dl class="grid max-w-screen-md gap-8 mx-auto text-primary-900 sm:grid-cols-4 dark:text-white">
                    <div class="flex flex-col items-center justify-center">
                        <dt class="mb-2 text-3xl md:text-8xl font-extrabold">{{ statistic.total }}</dt>
                        <dd class="font-light text-gray-500 dark:text-gray-400">Total Prestasi</dd>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <dt class="mb-2 text-3xl md:text-8xl font-extrabold">{{ statistic.internasional }}</dt>
                        <dd class="font-light text-gray-500 dark:text-gray-400">Tingkat Internasional</dd>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <dt class="mb-2 text-3xl md:text-8xl font-extrabold">{{ statistic.nasional }}</dt>
                        <dd class="font-light text-gray-500 dark:text-gray-400">Tingkat Nasional</dd>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <dt class="mb-2 text-3xl md:text-8xl font-extrabold">{{ statistic.regional }}</dt>
                        <dd class="font-light text-gray-500 dark:text-gray-400">Tingkat Regional</dd>
                    </div>
                </dl>
            </div>

            <div class="w-32 h-32 absolute bottom-0 left-0 right-0 mx-auto flex justify-center items-center">
                <font-awesome-icon icon="fa-solid fa-arrow-down" class="text-primary-900 text-3xl" />
            </div>
        </section>  
        <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight text-center font-extrabold text-primary-900 dark:text-white">
            Prestasi Mahasiswa</h2>
        <p class="mb-8 font-light text-gray-500 text-center mx-auto max-w-screen-sm sm:text-xl dark:text-gray-400">
            Berikut merupakan prestasi mahasiswa dari Departemen Teknik Informatika dan Komputer</p>
        <section class="bg-white dark:bg-gray-900 p-3 sm:p-5">
            <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
                <!-- Start coding here -->
                <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                    <!-- <div
                        class="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4 p-4">
                        <div class="w-full">
                            <form class="flex items-center">
                                <label for="simple-search" class="sr-only">Search</label>
                                <div class="relative w-full">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                            fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <input type="text" id="simple-search"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Search">
                                </div>
                            </form>
                        </div>
                    </div> -->
                    <div class="overflow-x-auto">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-4 py-3">No</th>
                                    <th scope="col" class="px-4 py-3">Mahasiswa</th>
                                    <th scope="col" class="px-4 py-3">Program Studi</th>
                                    <th scope="col" class="px-4 py-3">Prestasi</th>
                                    <th scope="col" class="px-4 py-3">Jenis</th>
                                    <th scope="col" class="px-4 py-3">Penyelenggara / Tempat</th>
                                    <th scope="col" class="px-4 py-3">Tingkat</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b dark:border-gray-700" v-for="(prestasi, i) in dataPrestasi.data">
                                    <th scope="row"
                                        class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ i +
                                            1
                                        }}
                                    </th>
                                    <td class="px-4 py-3">{{ prestasi.nama }}</td>
                                    <td class="px-4 py-3">{{ prestasi.prodi }}</td>
                                    <td class="px-4 py-3">{{ prestasi.prestasi }}</td>
                                    <td class="px-4 py-3">{{ prestasi.jenis }}</td>
                                    <td class="px-4 py-3">{{ prestasi.penyelenggara }}</td>
                                    <td class="px-4 py-3">{{ prestasi.tingkat }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <Pagination v-if="dataPrestasi" :totalPages="totalPage" :perPage="10" :currentPage="currentPage"
                        :totalData="totalData" @pagechanged="onPageChanged">

                    </Pagination>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios'
import Pagination from '~/components/Pagination.vue';

export default {
    data() {
        return {
            dataPrestasi: '',
            currentPage: 1,
            totalPage: 1,
            totalData: 0,
            statistic: []
        };
    },
    async mounted() {
        await this.getDataPrestasi(1, 10);
        await this.getDataStatistic()
    },
    methods: {
        async getDataPrestasi(page, limit) {
            await axios.get(useRuntimeConfig().public.API_URL + "prestasi?page=" + page + "&limit=" + limit).then((res) => {
                this.dataPrestasi = res.data;
                this.currentPage = res.data.currentPage
                this.totalPage = res.data.totalPage
                this.totalData = res.data.total
            }).catch((err) => console.log(err));
        },

        async onPageChanged(page) {
            this.currentPage = page;
            await this.getDataPrestasi(page, 10);
        },

        async getDataStatistic() {
            await axios.get(useRuntimeConfig().public.API_URL + "prestasi/statistic").then((res) => {
                this.statistic = res.data;
            }).catch((err) => console.log(err));
        }
    },
    components: { Pagination }
}
</script>