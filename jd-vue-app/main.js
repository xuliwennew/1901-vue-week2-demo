import Vue from "vue"
import VueRouter from "vue-router"
import router from "./router"
import app from "./app"
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})
import Vuex from "vuex"

Vue.use(Vuex)
import store from "./store"
import myPlugin from "./plugins/myPlugin"

Vue.use(myPlugin)

import CrazyUI from "crazy-ui"
import "crazy-ui/libs/theme-default/index.css"

Vue.use(CrazyUI)

//创建一个viewmodel
new Vue({
    el:"#app",
    store,  //注册store , $store
    router, // $router $route
    render(h){
        return h(app)
    }
})
