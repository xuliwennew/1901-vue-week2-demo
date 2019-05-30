

/**
 *  1, npm install vuex -S
 *  2, Vue.use(Vuex)
 *  3, 使用vuex创建一个store
 *  4, state,mutaions,actions getter
 *  5, store 注册到viewmodel
 *
 */

import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

let store = new Vuex.Store({

    //原材料
    state:{ //shared state
        rice:"rice",
        egg:"tuegg",
        riceegg:"xx"
    },
    //负责修改状态，返回最新的状态
    mutations:{
        //任强负责鸡蛋炒饭
        RENQIAN(state,args){
            console.log("RENQIAN")
            //加工操作
            state.riceegg = state.rice +"-"+ state.egg + args
            return state.riceegg
        }
    },
    //负责接收请求，并提交合法请求
    actions:{
        //杨琪负责接客，只鸡蛋炒饭的客人去你那
        YANGQI(store,payload){
            console.log("YANGQI")
            //提交给任强
            store.commit("RENQIAN",payload)
        }
    },
    getters:{
        //谭宏亮 负责端菜
        TANGHONGLIANG(state){
            return state.riceegg
        }
    }
})

export default store
