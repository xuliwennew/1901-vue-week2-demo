<template>
   <ul>
      <jh-cart-shop-product @pCheck="singleCheck" :data="product" :sid="sid" :pid="pid" v-for="(product,pid) in data"></jh-cart-shop-product>

   </ul>

</template>

<script>
    import cartShopProduct from "./cartShopProduct"
    export default {
        name: "cartShopProductList",
        components:{
            "jh-cart-shop-product":cartShopProduct
        },
        props:["data","sid"],
        methods:{
            singleCheck(sid,pid){
                this.$emit("pCheck",sid,pid)
            }
        }
    }
</script>

<style scoped>

</style>
