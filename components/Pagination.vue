<template>
    <div>
        <nav class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
            aria-label="Table navigation">
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                Showing
                <span class="font-semibold text-gray-900 dark:text-white">{{getFirstDocumentRow + " - " + getLastDocumentRow}}</span>
                of
                <span class="font-semibold text-gray-900 dark:text-white">{{ totalData }}</span>
            </span>

            <ul class="inline-flex items-stretch -space-x-px">

                <li>
                    <button @click="onClickFirstPage" :disabled="isInFirstPage" type="button"
                        class="flex items-center justify-center h-full rounded-l-lg text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">First</button>
                </li>

                <li>
                    <button @click="onClickPreviousPage" :disabled="isInFirstPage" type="button"
                        class="flex items-center justify-center h-full text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <span class="sr-only">Previous</span>
                        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </li>



                <!-- visible button start -->

                <li v-for="page in pages" :key="page.name">
                    <button @click="onClickPage(page.name)" :disabled="page.isDisabled"
                        :class="isPageActive(page.name) ? classActive : classNotActive">{{
                            page.name }}</button>
                </li>

                <!-- visible button end -->

                <li>
                    <button @click="onClickNextPage" :disabled="isInLastPage"
                        class="flex items-center justify-center h-full text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <span class="sr-only">Next</span>
                        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </li>

                <li>
                    <button @click="onClickLastPage" :disabled="isInLastPage"
                        class="flex items-center justify-center h-full rounded-r-lg text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Last</button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    props: {
        maxVisibleButton: {
            type: Number,
            required: false,
            default: 3
        },
        totalPages: {
            type: Number,
            required: true
        },
        totalData: {
            type: Number,
            required: true
        },
        perPage: {
            type: Number,
            required: true
        },
        currentPage: {
            type: Number,
            required: true
        }
    },

    data() {
        return {
            classActive: "flex items-center justify-center h-full text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
            classNotActive: "flex items-center justify-center h-full text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
            dataNow: {
                first: 1,
                last: 10
            }
        }
    },
    computed: {
        startPage() {
            //if first page
            if (this.currentPage === 1) {
                return 1
            }

            //if last page
            if (this.currentPage === this.totalPages) {
                return this.totalPages - this.maxVisibleButton + 1

            }

            //if inbetween
            return this.currentPage - 1
        },

        pages() {
            const range = []

            for (
                let i = this.startPage;
                i <= Math.min(this.startPage + this.maxVisibleButton - 1, this.totalPages);
                i++
            ) {
                range.push({
                    name: i,
                    isDisabled: i === this.currentPage
                })
            }

            return range
        },

        isInFirstPage() {
            return this.currentPage === 1;
        },

        isInLastPage() {
            return this.currentPage === this.totalPages;
        },

        getFirstDocumentRow() {
            if(this.currentPage === 1) {
                return 1
            }
            
            return (this.currentPage -1 ) * 10 + 1
            
        },

        getLastDocumentRow() {
            if(this.currentPage === 1) {
                return 1 * 10
            }

            if (this.currentPage === this.totalPages) {
                return this.totalData
            }

            return this.currentPage * 10
        }
    },

    methods: {
        onClickFirstPage() {
            this.$emit('pagechanged', 1);
        },
        onClickPreviousPage() {
            this.$emit('pagechanged', this.currentPage - 1, this.dataNow.first-10);
        },
        onClickPage(page) {
            this.$emit('pagechanged', page);
        },
        onClickNextPage() {
            this.$emit('pagechanged', this.currentPage + 1, this.dataNow.last+10);
        },
        onClickLastPage() {
            this.$emit('pagechanged', this.totalPages, this.dataNow.last);
        },
        isPageActive(page) {
            return this.currentPage === page;
        }
    }
}
</script>