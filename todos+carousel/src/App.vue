<template>
  <div>
    <carousel>
      <carousel-slide v-for="sln in slides" :key="sln">
        <div style="position:absolute; left:0; right:0; text-align:center; top:50%; color: #FFF; font-size:16px"> Salut les gens {{ sln }}</div>
        <img :src="require( `@/assets/${sln}img.jpg` )" width="100%" id="imgTech" alt="images tech">
      </carousel-slide>
    </carousel>
     <todos></todos> 
  </div>
</template>

<script>
import Todos from './components/Todos'

import Carousel from './components/carousel/Carousel'

import CarouselSlide from './components/carousel/CarouselSlide'



export default {
  name: 'App',
  components: {
    Todos,
    Carousel, 
    CarouselSlide
  },
  data () {
    return {
      slides : 3
    }
  },
  methods : {
    addSlide () {
      this.slides ++
    }
  }

}
</script>