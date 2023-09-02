<template>
    <div v-if="!selectedViewer" class="min-h-screen flex">
        <div class="flex-1 flex justify-center items-center">

            <div data-tooltip-target="tooltip-wali" data-tooltip-placement="bottom" type="button"
                class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 py-20 text-center cursor-pointer hover:bg-gray-50"
                @click="this.selectedViewer = 'wali'">
                <svg xmlns="http://www.w3.org/2000/svg" class="m-auto mb-5" height="5em"
                    viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                        d="M160 64c0-35.3 28.7-64 64-64H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H336.8c-11.8-25.5-29.9-47.5-52.4-64H384V320c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v32h64V64L224 64v49.1C205.2 102.2 183.3 96 160 96V64zm0 64a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM133.3 352h53.3C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7H26.7C11.9 512 0 500.1 0 485.3C0 411.7 59.7 352 133.3 352z" />
                </svg>
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Wali</h5>
            </div>

            <div id="tooltip-wali" role="tooltip"
                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Berisi menu untuk wali murid berisi informasi seputar profil departemen, penelitian, dan prestasi
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

        </div>
        <div class="flex-1 flex justify-center items-center">

            <div data-tooltip-target="tooltip-siswa" data-tooltip-placement="bottom" type="button"
                class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 py-20 text-center cursor-pointer hover:bg-gray-50"
                @click="this.selectedViewer = 'murid'">
                <svg xmlns="http://www.w3.org/2000/svg" class="m-auto mb-5" height="5em"
                    viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                        d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" />
                </svg>
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Siswa</h5>
            </div>

            <div id="tooltip-siswa" role="tooltip"
                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Berisi menu untuk murid, berisi informasi seputar karya mahasiswa, profil departemen, dan inovasi mahasiswa
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>

        </div>

        <div class="h-1/2 bg-primary-900 w-full -z-10 bottom-0 absolute">

        </div>
    </div>

    <div class=" mx-auto h-screen" v-else>
        <div class="p-8 h-screen">
            <AnimationContainer class="h-[90%]"></AnimationContainer>

            <div class="w-full text-center">
                <font-awesome-icon @click="isModal = true" icon="fa-regular fa-circle-up"
                    class="text-primary-900 text-4xl mt-5 cursor-pointer" />
            </div>
        </div>



        <div class="h-full w-full bg-black bg-opacity-30 absolute top-0 p-0 flex" v-if="isModal">
            <div class="bg-white w-[75%] h-[75%] m-auto rounded-3xl p-20" style="box-shadow: -20px 20px #1e3a8a;">

                <div class="grid grid-cols-3 gap-14 h-fit">

                    <nuxt-link :to="menu.url"
                        class="w-full bg-white border py-10 border-gray-200 rounded-lg hover:shadow-[-10px_10px_#1e3a8a] dark:bg-gray-800 dark:border-gray-700 text-center cursor-pointer hover:bg-gray-50 hover:translate-x-[10px] hover:translate-y-[-10px]"
                        v-for="menu in menus">
                        <font-awesome-icon :icon="menu.icon" class="text-primary-900 text-6xl mb-6" />
                        <h5 class="text-xl font-extrabold tracking-tight text-gray-900 dark:text-white capitalize">
                            {{ menu.menu_title }}</h5>
                    </nuxt-link>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

import { initTooltips } from 'flowbite';
export default {
    data() {
        return {
            isModal: false,
            selectedViewer: null,
            menus: []
        }
    },
    async mounted() {
        initTooltips()
        await this.getDataMenu()
    },
    methods: {
        async getDataMenu() {
            await axios.get(useRuntimeConfig().public.API_URL + '/menu').then(
                (res) => {
                    this.menus = res.data
                }
            ).catch((err) => console.log(err))
        }
    },
    watch: {
        menus: {
            handler(newVal) {
                if (newVal[2].isActive) {
                    // this.menus.unshift(this.menus.pop())
                }
            },
            deep: true
        }
    }
}
</script>

<style></style>