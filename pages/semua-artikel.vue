<template>
    <div>
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-primary-900 dark:text-white">
                        Artikel Seputar DTIK</h2>
                    <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">Berikut merupakan artikel terkait
                        Departemen Teknik Informatika dan Komputer</p>
                </div>
                <div class="grid gap-8 lg:grid-cols-3" >

                    <article v-for="article in dataArticle"
                        class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div class="flex items-center mb-5 text-gray-500">
                            <span v-for="category in article.category"
                                class="mr-3 capitalize bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                {{category}}
                            </span>


                            <span class="text-sm ml-auto">{{ Math.round((new Date().getTime() - new Date(article.createdAt).getTime()) / (1000 * 3600 * 24))  }} days ago</span>

                        </div>
                        <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">{{ article.title}}</a></h2>
                        <p class="mb-5 font-light text-gray-500 dark:text-gray-400 line-clamp-3 text-justify">{{article.description}}</p>

                        <div class="flex justify-between items-center">
                            <div class="flex items-center space-x-4">
                                <img class="w-7 h-7 rounded-full"
                                    src="../assets/img/pens.jpg"
                                    alt="Jese Leos avatar" />
                                <span class="font-medium dark:text-white capitalize" v-if="article.publisher">
                                    {{ article.publisher.name? article.publisher.name: article.publisher }}
                                </span>
                            </div>
                            <nuxt-link :to="'/article/' + article._id"
                                class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                                Selengkapnya
                                <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </nuxt-link>
                        </div>
                    </article>

                </div>
            </div>
        </section>

        <Pagination v-if="dataArticle" :totalPages="totalPage" :perPage="10" :currentPage="currentPage"
                        :totalData="totalData" @pagechanged="onPageChanged">

        </Pagination>
    </div>
</template>

<script>
import axios from 'axios';
import Pagination from '~/components/Pagination.vue';

export default {
    data() {
        return {
            dataArticle: [],
            currentPage: 1,
            totalPage: 1,
            totalData: 0,
        }
    },
    async mounted() {
        await this.getDataArticle(1,10)
    },

    methods: {
        async getDataArticle(page,limit) {
            await axios.get(useRuntimeConfig().public.API_URL + 'article?page=' + page + "&limit=" + limit).then(
                (res) => {
                    this.dataArticle = res.data.data
                    this.currentPage = res.data.currentPage
                    this.totalPage = res.data.totalPage
                    this.totalData = res.data.total
                }
            ).catch(
                (err) => {
                    console.log(err);
                }
            )
        },

        async onPageChanged(page) {
            this.currentPage = page;
            await this.getDataArticle(page, 10);
        },
    },
    components: {Pagination}
}
</script>