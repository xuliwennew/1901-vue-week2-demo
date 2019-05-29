import Vue from "vue"
import VueRouter from "vue-router"
import carts from "../pages/carts"

Vue.use(VueRouter)


let router = new VueRouter({
    routes:[
        {path:"/",component:carts}
    ]
})

export default router
