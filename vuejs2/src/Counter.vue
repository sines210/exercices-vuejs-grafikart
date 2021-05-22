
<template>
<div class="counter">
{{count}}
<div class="counter__button" @click="increment">+</div>
</div>

</template>


<script>

import store from './store/NotificationsStore.js'

export default {
    data () {
        return{
            state : store.state
        } 
    },
    computed : {
        count:function() {return this.state.count}
    },
    methods : {
        increment(){
            store.increment()
        }
    }
    
}

</script>

<style>
.counter
{font-weight:bold;
height:5vh;
width:5vh;
margin-left: 50%;
background-color: grey;
}
.counter__button
{border: 1px dashed black;
border-radius: 15px}
    </style>