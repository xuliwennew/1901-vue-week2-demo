import Vue from "vue"
import VueRouter from "vue-router"
import carts from "../pages/carts"
import product from "../pages/product"

Vue.use(VueRouter)


let router = new VueRouter({
    routes:[
        {path:"/",component:carts},
        {path:"/product",component:product}
    ]
})

export default router
