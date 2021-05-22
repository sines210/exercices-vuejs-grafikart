<template>
<div>

    <transition name="bounce" appear mode="out-in">
        <div class="ui message success" v-if="visible" key="visible">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi ullam quo et est cupiditate sequi pariatur deleniti optio dolores minus sapiente, corrupti cumque id voluptas error tempore. Ipsam, dolor repellat?
            </div>
            <div class="ui message success" v-else key="invisible">
                psum dolor sit amet consectetur adipisicing elit. Commodi ullam quo et est cupiditate sequi pariatur deleniti optio dolores minus sapiente, corrupti cumque id voluptas error tempore. Ipsam, dolor repellat?
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
  
    .bounce-enter-active{
        animation: bounce-in 0.5s;
    }
    .bounce-leave-active{
        animation: bounce-out 0.5s;
    }

    @keyframes bounce-in{
        0%{
            transform: scale(0);
        }
        50%{
            transform: scale(1.5);
        }
        100%{
            transform: scale(1);
        }
    }
    @keyframes bounce-out{
        0%{
            transform: scale(1);
        }
        50%{
            transform: scale(1.5);
        }
        100%{
            transform: scale(0);
        }
    }

</style>