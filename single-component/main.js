import Vue from "vue"
import VueRouter from "vue-router"
import app from "./app"
import router from "./router"


new Vue({
    el:"#app",
    router, // $router $route
    render(h){
        return h(app)
    }
})
