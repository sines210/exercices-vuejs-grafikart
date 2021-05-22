<template>
<div>

    <transition name="fade" appear>
        <div class="message success" v-if="visible">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi ullam quo et est cupiditate sequi pariatur deleniti optio dolores minus sapiente, corrupti cumque id voluptas error tempore. Ipsam, dolor repellat?
            </div>
    </transition>

<button @click="toggle">Toggle</button>

</div>

</template>


<script>
export default {
data(){
    return{
        visible:true
    }
},
methods : {
    toggle: function() {
        this.visible = !this.visible
    }
}
   
}

</script>

<style>
    .fade-enter-active, .fade-leave-active{
        transition: opacity 1s;
        transform:1s;
    }
    .fade-enter, .fade-leave-active{
        opacity:0;
        transform: translateX(20px);
    }
</style>