import Vue from "vue"
import VueRouter from "vue-router"
import hello from "../pages/hello"

Vue.use(VueRouter)


let router = new VueRouter({
    routes:[
        {path:"/",component:hello}
    ]
})


export default router
