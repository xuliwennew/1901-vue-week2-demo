import cartApi from "../../apis/cartApi"

export default {
    state:{
        cartInfo:{}  //创建一个共享的状态
    },
    mutations:{
        //修改状态，把cartinfo进行赋值
        INITDATA(state,data){
            console.log("#2 INITDATA")
            state.cartInfo = data;
        }
    },
    actions:{
        //dispatch 接收组件 的dispatch
        INITCART(store,payload){
            console.log("#1 INITCART")
            cartApi.getCartByUserId((data)=>{
                store.commit("INITDATA",data)
            })
        }
    },
    getters:{
        //事件，用来获取最新的状态
        GETCARTINFO(state){
            return state.cartInfo
        }
    }
}
