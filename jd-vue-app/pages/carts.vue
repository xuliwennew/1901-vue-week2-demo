<template>
   <div>
       <jh-cart-header></jh-cart-header>
       <jh-cart-shop-list @del="del" @add="addNum" @minus="minusNum" @pCheck="singleCheck" @sCheck="shopCheckAll" :data="cartInfo"></jh-cart-shop-list>
       <jh-cart-footer @checkAll="cartCheckAll" :data="cartInfo"></jh-cart-footer>
   </div>
</template>

<script>
    import cartApi from "../apis/cartApi"
    import cartFooter from "../components/carts/cartFooter"
    import cartHeader from "../components/carts/cartHeader"
    import cartShopList from "../components/carts/cartShopList"
    export default {
        name: "carts",
        components:{
            "jh-cart-footer": cartFooter,
            "jh-cart-header":cartHeader,
            "jh-cart-shop-list":cartShopList
        },
        created(){
           this._initPageData()
        },
        methods:{
            _initPageData(){
               cartApi.getCartByUserId(data=>{
                    console.log(data)
                    this.cartInfo = data;
                })
            },
            shopCheckAll(sid){
               let isChecked = this.cartInfo.shops[sid].checked;
               this.cartInfo.shops[sid].products.forEach((product,pid)=>{
                    product.checked = isChecked
               })
            },
            singleCheck(sid,pid){
                console.log("pCheck",sid,pid)
                let isChecked= this.cartInfo.shops[sid].products.every((product,idx,arr)=>{
                    return product.checked == true
                })

                this.cartInfo.shops[sid].checked = isChecked
                this.cartInfo.checked = isChecked
            },
            addNum(sid,pid){
                console.log("add",sid,pid)
                this.cartInfo.shops[sid].products[pid].num++
            },
            minusNum(sid,pid){
                console.log("minus",sid,pid)
                if(  this.cartInfo.shops[sid].products[pid].num <=1){
                    this.cartInfo.shops[sid].products[pid].num = 1
                }else {
                    this.cartInfo.shops[sid].products[pid].num--
                }

            },
            cartCheckAll(){
                let isChecked = this.cartInfo.checked;
                this.cartInfo.shops.forEach((shop,sid)=>{
                    shop.checked=isChecked
                    shop.products.forEach((product,pid)=>{
                        product.checked = isChecked
                    })
                })
            },
            del(sid,pid){
                this.cartInfo.shops[sid].products.splice(pid,1)
            }
        },
        data(){
            return {
                //observer
                cartInfo:{}
            }
        },
        watch:{
            cartInfo:{
                handler:function (nObj,oObj) {
                   console.log("watch cartinfo change....")
                },
                deep:true
            }
        }
    }
</script>

<style scoped>
   @import "../assets/carts.css";
</style>
