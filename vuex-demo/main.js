import Vue from "vue"
import App from "./App"
import Vuex from "vuex"
import store from "./store"

Vue.use(Vuex)


new Vue({
    el:"#app",
    store, // $store
    render(h){
        return h(App)
    }
})
