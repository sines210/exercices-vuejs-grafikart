<template>
    <div class="carousel">
        <slot></slot>
        <button class="carousel__nav carousel__next" @click.prevent="next"></button>
        <button class="carousel__nav carousel__prev" @click.prevent="prev"></button>
        <div class="carousel__pagination">
            <button v-for="n in slidesCount" @click="goto(n-1)" :class="{active: n-1 == index}"></button>
        </div>
    </div>
</template>


<script>
    export default {
        data () {
            console.log(this.$children)
            return{
                index: 0,
                slides: [],
                direction: null
            }
        },
        mounted () {
           this.slides = this.$children
           this.slides.forEach((slide, i) => {
               slide.index = i
           })
        },
        computed: {
           slidesCount () { return this.slides.length }
        },
        methods: {
            next () { 
                this.index ++,
                this.direction = 'right'
                if(this.index >= this.slidesCount){
                    this.index = 0 
                }
            },
            prev () {
                this.index --,
                this.direction = 'left'
                if(this.index < 0 ){
                    this.index = this.slidesCount - 1
                }
            },
            goto (index) {
                this.direction = index > this.index ? 'right' : 'left'
                this.index = index
            }
        }
    }
</script>

<style>
    .carousel{
        position:relative;
        overflow: hidden;
    }
    .carousel__nav{
        position: absolute;
        top:50%;
        margin-top: -31px;
        left: 10px;
        background: url(./prevSlider.png);
        height: 74px;
        width: 70px;
    }
    .carousel__nav.carousel__next{
       right:10px;
       left:auto;
       background: url(./nextSlider.png);
    }
    .carousel__pagination {
        position:absolute;
        bottom:10px;
        left:0;
        right:0;
        text-align: center;
    }
    .carousel__pagination button {
        display: inline-block;
        width: 10px;
        height: 10px;
        background-color: #000000;
        opacity: 0.8;
        border-radius: 10px;
        margin: 0 2px;
    }
    .carousel__pagination button.active {
        background-color: #ffffff;
    }

</style>