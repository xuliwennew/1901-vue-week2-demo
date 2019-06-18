import Vue from "vue"
import Vuex from "vuex"
//cartInfo是一个模块
import cartInfo from "./modules/cartInfo"

Vue.use(Vuex)

//创建一个 shared state store
//store中管理的是共享的对象
let store = new Vuex.Store({
   modules:{
      cartInfo
   }
})


export default store;
