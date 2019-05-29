<template>
   <div>
       <jh-cart-header></jh-cart-header>
       <jh-cart-shop-list @pCheck="singleCheck" @sCheck="shopCheckAll" :data="cartInfo"></jh-cart-shop-list>
       <jh-cart-footer :data="cartInfo"></jh-cart-footer>
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
            }
        },
        data(){
            return {
                //observer
                cartInfo:{}
            }
        }
    }
</script>

<style scoped>
   @import "../assets/carts.css";
</style>
