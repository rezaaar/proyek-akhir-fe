<template>
    <div class="bg-primary-200 py-10 w-full flex justify-center align-middle rounded cursor-pointer hover:bg-primary-300"
        @click="playAnimation(textVoice)">
        <svg xmlns="http://www.w3.org/2000/svg" v-if="!isPlayed" class="m-auto fill-gray-800" height="6em"
            viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
                d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z" />
        </svg>

        <Character ref="avatar" v-show="isPlayed" class="mt-auto"></Character>
    </div>
</template>

<script>
import hyphenopoly from 'hyphenopoly'
import axios from 'axios';

export default {
    props: {
        textVoice: {
            type: String,
            default: "Selamat Datang, silahkan pilih menu dengan menekan tombol panah dibawah"
        }
    },
    data() {
        return {
            // textVoice: 'Selamat datang, silahkan pilih menu dengan menekan tombol dibawah',
            isPlayed: false,
        }
    },

    methods: {
        async fetchLoaderHyphen() {
            return await fetch(`https://cdn.jsdelivr.net/npm/hyphenopoly@5.0.0-beta.5/patterns/id.wasm`).then((response) => {
                return response.arrayBuffer();
            });
        },
        async hyphenate_en(text) {
            const hyphenator = hyphenopoly.config({
                "require": ["id"],
                "hyphen": "•",
                "loader": this.fetchLoaderHyphen,
                "exceptions": {
                    // "id": "en-han-ces"
                }
            });
            // console.log(await hyphenator);

            const hyphenateText = await hyphenator;
            console.log(hyphenateText(text));
        },

        playAnimation(text) {
            this.isPlayed = true
            // console.log(this.$refs);
            this.createAnimation(text)
            this.createVoice(text)
        },
        createVoice(text) {
            responsiveVoice.speak(text, "Indonesian Male")
        },
        createAnimation(text) {
            this.hyphenate_en(text)

            Array.from(text).forEach((char, index) => {
                // console.log(char);
                switch (char) {
                    case 'a':
                        this.$refs.avatar.changeMouth('a', index)
                        break;
                    case 'e':
                        this.$refs.avatar.changeMouth('e', index)
                        break;
                    case 'i':
                        this.$refs.avatar.changeMouth('i', index)
                        break;
                    case 'u':
                        this.$refs.avatar.changeMouth('u', index)
                        break;
                    case 'o':
                        this.$refs.avatar.changeMouth('o', index)
                        break;
                    default:
                        this.$refs.avatar.changeMouth('def', index)
                        break;
                }
            })
        }
    },
}
</script>