<template>
    <!-- <div class="container mx-auto py-8"> -->

    <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">

        <div class="mb-5 max-w-2xl mx-auto">
            <h1 href="#" class="text-primary-900 font-bold text-3xl mb-2">{{dataArticle.title}}</h1>
            <div class="text-gray-700 text-xs flex my-6 justify-between">
                <div class="flex items-center">
                    <a href="#"><img class="w-12 h-12 rounded-full mr-2" src="../../assets/img/pens.jpg"
                            alt="Avatar of Jonathan Reinink"></a>
                    <div class="text-sm">
                        <a href="#" v-if="dataArticle.publisher"
                            class="text-gray-900 font-medium leading-none hover:text-indigo-600 transition duration-500 ease-in-out capitalize">
                            {{ dataArticle.publisher.name ? dataArticle.publisher.name : dataArticle.publisher }}
                        </a>
                        <p class="text-gray-600 text-xs">{{ Math.round((new Date().getTime() - new Date(dataArticle.createdAt).getTime()) / (1000 * 3600 * 24))  }} days ago</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-cover h-64 text-center overflow-hidden"
            style="height: 450px; background-image: url('http://ditobektiwibowo.it.student.pens.ac.id/img/carousel/2.jpg')"
            :title="'article '+ dataArticle.title">
        </div>
        <div class="max-w-2xl mx-auto">
            <div
                class="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                <div class="">
                    <p class="text-base leading-8 my-5 text-justify">
                        {{dataArticle.description}}</p>
            </div>

        </div>
    </div>
</div>

<!-- </div> -->

<!-- </div> --></template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            dataArticle: ''
        }
    },

    async mounted() {
        await this.getDataArticle()
        console.log(this.dataArticle);
    },

    methods: {
        async getDataArticle() {
            await axios.get(useRuntimeConfig().public.API_URL + '/article/' + this.$route.params.id).then(
                (res) => {
                    this.dataArticle = res.data
                }
            )
        },
    },
}
</script>