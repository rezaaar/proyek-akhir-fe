<template>
    <div>
        <div
            class="block max-w p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-10">
            <div class="flex justify-between">
                <div>
                    <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{
                        store.selectedProdi.name }}
                    </h5>
                </div>

                <div>
                    <button type="button" data-modal-target="editProdi" data-modal-toggle="editProdi" @click="fillForm()"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit</button>

                    <div id="editProdi" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
                        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div class="relative w-full max-w-2xl max-h-full">
                            <!-- Modal content -->
                            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <!-- Modal header -->
                                <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                        Edit
                                    </h3>
                                    <button type="button"
                                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                        data-modal-hide="editProdi">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </button>
                                </div>
                                <!-- Modal body -->
                                <div class="p-6 space-y-6">
                                    <form @submit.prevent="menuStore.createMenu(form.prodi)">
                                        <div class="grid gap-4 mb-4 sm:grid-cols-2">
                                            <div class="sm:col-span-2">
                                                <label for="name"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prodi
                                                    Name</label>
                                                <input type="text" name="name" id="name" v-model="form.prodi.name"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                    placeholder="Type product name" required>
                                            </div>
                                            <div class="sm:col-span-2">
                                                <label for="description"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                                <textarea id="description" rows="4" v-model="form.prodi.description"
                                                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                    placeholder="Write product description here"></textarea>
                                            </div>

                                            <div>
                                                <label for="visi"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Visi
                                                </label>
                                                <textarea type="text" name="visi" id="visi" v-model="form.prodi.visi.main"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                    placeholder="Product brand" required></textarea>
                                            </div>
                                            <div>
                                                <label for="misi"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Misi</label>
                                                <textarea type="text" name="misi" id="misi" v-model="form.prodi.misi.main"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                    placeholder="Product brand" required></textarea>
                                            </div>
                                            <div>
                                                <label for="visi-sub"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Visi List
                                                </label>
                                                <input type="text" :name="'visi-sub-' +i" :id="'visi-sub-'+i" v-for="(visi, index) in form.prodi.visi.sub"
                                                    v-model="form.prodi.visi.sub[index]"
                                                    class="bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                    placeholder="Product brand" required>
                                                    
                                            </div>
                                            <div>
                                                <label for="misi-sub"
                                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Misi List
                                                </label>
                                                <input type="text" :name="'misi-sub-'+i" :id="'misi-sub'+i" v-for="(misi, index) in form.prodi.misi.sub"
                                                    v-model="form.prodi.misi.sub[index]"
                                                    class="bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                    placeholder="Product brand" required>
                                            </div>

                                        </div>
                                        <button type="submit"
                                            class="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                            <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                            Add new menu
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700">
            <p class="font-semibold text-gray-700 dark:text-gray-400 capitalize">Deskripsi :</p>
            <p class="font-light text-justify text-gray-600 dark:text-gray-400">{{ store.selectedProdi.description }}</p>
            <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700">

            <div class="grid grid-cols-2 gap-8">
                <div v-if="store.selectedProdi.visi">
                    <p class="font-semibold text-gray-700 dark:text-gray-400 capitalize">Visi :</p>
                    <p class="font-light text-justify text-gray-600 dark:text-gray-400">{{ store.selectedProdi.visi.main }}
                    </p>
                    <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700">
                    <ol class="list-decimal list-inside">
                        <li v-for="sub in store.selectedProdi.visi.sub "
                            class="font-light text-justify text-gray-600 dark:text-gray-400 mb-3">{{ sub }}</li>
                    </ol>

                </div>
                <div v-if="store.selectedProdi.misi">
                    <p class="font-semibold text-gray-700 dark:text-gray-400 capitalize">Misi :</p>
                    <p class="font-light text-justify text-gray-600 dark:text-gray-400">{{ store.selectedProdi.misi.main }}
                    </p>
                    <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700">
                    <ol class="list-decimal list-inside">
                        <li v-for="sub in store.selectedProdi.misi.sub"
                            class="font-light text-justify text-gray-600 dark:text-gray-400 mb-3">{{ sub }}</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { initModals } from 'flowbite';
import { useMenuStore } from '~/store/menu';

definePageMeta({
    layout: "admin",

})

export default {
    data() {
        return {
            store: useMenuStore(),
            form: {
                prodi: {
                    visi: {
                        main: '',
                        sub: []
                    },
                    misi: {
                        main: '',
                        sub: []
                    }
                }
            }
        }
    },
    mounted() {
        initModals()
    },

    methods: {
        fillForm() {
            this.form.prodi = this.store.selectedProdi
        }
    },
}
</script>