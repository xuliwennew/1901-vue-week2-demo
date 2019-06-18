


export default {
    install(Vue,options){
        Vue.prototype.$show = function () {
            alert(1)
        }

        Vue.component("loading",{
            render(h){
                return h("h1",{},"loading.....")
            }
        })
    }
}








