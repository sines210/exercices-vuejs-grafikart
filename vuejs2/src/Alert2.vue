<template>
<div>

    <transition :css="false" @enter="enter" @leave="leave">
        <div class="message success" v-if="visible">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi ullam quo et est cupiditate sequi pariatur deleniti optio dolores minus sapiente, corrupti cumque id voluptas error tempore. Ipsam, dolor repellat?
            </div>
    </transition>

<button @click="toggle">Toggle</button>

</div>

</template>


<script>

let slides = {
    methods : {
    enter :function (el, done) {
        $(el).hide().slideDown(500, done)
    },
    leave :function (el, done) {
        $(el).show().slideUp(500, done)
    },
    toggle: function() {
        this.visible = !this.visible
    }
}
}

export default {
data(){
    return{
        visible:true
    }
},
mixins : [slides],
   
}

</script>
