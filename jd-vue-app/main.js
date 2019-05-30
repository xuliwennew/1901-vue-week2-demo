import Vue from "vue"
import VueRouter from "vue-router"
import router from "./router"
import app from "./app"
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})

//创建一个viewmodel
new Vue({
    el:"#app",
    router, // $router $route
    render(h){
        return h(app)
    }
})
