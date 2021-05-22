//Creating components

//de manière globale (il ne faut pas déclarer components ds l'instance vm avec cette manière)
// Vue.component('message',{
//     props : ["type", "message"],
//     template : `<div :class="type"> {{message}} </div>`
// })


//autre manière qui fonctionne mieux avec les require, injection du composant direct ds l'instance
var message = {
    props : {
      type: {type : String, default : "success"},
    message: String,
    header: String
    },
    template : `<div :class="type">
    <button @click.prevent="close">X</button>
    <div class="header">{{ header }}</div>
    {{message}}
     </div>`,
     methods : {
         close() {
             this.$emit('close')
         }
     }
}

var counter = {
    data : function() {
        return{
            count : 0
        }
    },
    props : {
        start : {type:Number, default:0}
    },
    computed: {
        total: function(){
           return this.start + this.count
        }
    },
    methods : {
       increment : function () {
            this.count ++
        }
    },
    template : ` <button @click="increment">{{ total }}</button>`,
 
}

var formUser = {
    props: {
        value : Object
    },
    data (){
        return{
            user : {...this.value}
        }
    },
    methods : {
        save() {
            this.$emit('input', this.user)
        }
    },
   template : 
    `<form @submit.prevent="save">
    <p> <slot name="header"></slot></p>
    <div class="field">
    <label for="">Prénom</label>
    <input type="text" v-model="user.firstName"/>
    </div>
    <div class="field">
    <label for="">Nom</label>
    <input type="text" v-model="user.lastName"/>
    </div>
    <button type="submit">Envoyer</button>
    <p> <slot name="footer"></slot></p>
    </form> `,
    mounted : function(){
        console.log(this)
    }
}

var vm = new Vue({
    el: "#createComponent",
    components : { message, counter, formUser },
    data: {
        message : "Un meilleur texte",
        alert: false,
        user : {
            firstName : "Jean",
            lastName : "DeLaTour"
        }

    },
    methods: {
        showAlert() {
            this.alert = true
        },
        hideAlert() {
            this.alert = false
        }
    }

})