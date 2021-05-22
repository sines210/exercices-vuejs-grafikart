<template>
    <div>
    
            <ul>
                <transition-group name="bounce">
                <li v-for="item in items" :key="item">{{item}}</li>
            </transition-group>
            </ul>
       
          <button class="ui button"  @click="add">Ajouter</button>
          <button class="ui button error"  @click="shuffle">Mélanger</button>

    </div>
    
    </template>
    
    
    <script>
    
    
    export default {
    data(){
        return{
            visible:true,
            items: [1,2,3,4,5]
        }
    },
    methods: {
        add: function() {
            this.items.push(Math.random())
        },
        shuffle: function() {
            this.items = [2,3,5,4,1]
        },
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
    .bounce-move{
        transition : transform 1.5s;
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
    