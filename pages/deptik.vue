<template>
    <div class="container px-10 mx-auto">
        <!-- <div class="video h-screen py-10">
            <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/GMvLopaIdhk"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                class="rounded-lg"
            ></iframe>
        </div> -->
        <canvas id="canvas" class="border" width="400" height="400">

        </canvas>

        <button class="p-5" @click="animateMouth('halo nama saya')">Gerak</button>
    </div>
</template>

<script>
export default {
    data() {
        return {            
            mouthImage: [
                
            ]
        }
    },
    methods: {
        drawMouth(positions) {
            
        },
        animateMouth(text) {
            const vowels = ["a", "e", "i", "o", "u"];
            const positions = [];
            for (let i = 0; i < text.length; i++) {
                const char = text.charAt(i).toLowerCase();
                if (vowels.indexOf(char) !== -1) {
                    const position = this.mouthPositions[i % this.mouthPositions.length];
                    positions.push(position);
                }
            }
            this.drawMouth(positions);
        }
    },
    mounted() {
        // this.animateMouth("hello, how are you");
    }
}
</script>
