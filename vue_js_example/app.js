var app = new Vue({

    el:'#app',
    data : {
        message: 'Salut les gens',
        link: "https://grafikart.fr/",
        success: true,
        seen: false,
        persons : ['Inès', 'Christiane', 'Casper']
    }

})

var interactiveEl = new Vue({

    el:'#interactive',
    data : {
        success: true,
        message:'message de test',
    },
    methods:{
        close : function () {
            this.success = false,
            this.message = 'fermé'
        },
        style : function () {
            if(this.success){
                return {background:'green'}
            }
            else
            {return {background:'red'}}
        }
    }

})


var vm = new Vue ({

    el:'#vm',
    data: {
        success: false,
        message:''
    },
   computed:{
        cls: function(){
          return  this.success === true ? 'success' : 'error'
        }
    }
})


var name = new Vue ({

    el: '#name',
    data:{
        firstName : "Jean",
        lastName : "Clavel",
        },
    computed : {
        fullName : {

            get : function () {
                return this.firstName + " " + this.lastName
            },
            set : function (value) {
                let parts = value.split(' ')
                this.firstName = parts[0]
                this.lastName = parts[1]
            }
            //on peut aussi obtenir le même résultat avec un watcher (voir capture ecran)
        } 
    }
    
})

Vue.directive("salut",{
    bind : function (el, binding, vnode) {
        el.value = binding.value
    },
    update : function (el, binding, vnode, oldvnode) {
        console.log("update")
    }
})

var createDir = new Vue ({
    el : '#createDirective',
    data : {
        message : "Salut", 
        link : "page2.html"
    }
})

//pour tous les directives d'évenements tels que prevent.default, stop propagation, et directives formulaires trim, keycode... voir tuto grafikart directives VueJs2 voir le cours si besoin de définir des directives

Vue.filter("capitalize", function (value) {
    return value.toUpperCase()
})

var filter = new Vue ({
    el : '#filter',
    data : {
        message : "Salut les gens"
    }
})


