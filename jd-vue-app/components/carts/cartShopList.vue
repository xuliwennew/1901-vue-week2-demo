<template>
    <div class="shopping">
        <jh-cart-shop @pCheck="singleCheck" @sCheck="shopCheckAll" :key="sid" :data="shop" :sid="sid" v-for="(shop,sid) in data.shops"></jh-cart-shop>
    </div>

</template>

<script>
    import cartShop from "./cartShop"
    export default {
        name: "cartShopList",
        components:{
            "jh-cart-shop":cartShop
        },
        props:["data"],
        methods:{
            shopCheckAll(sid){
                this.$emit("sCheck",sid)
            },
            singleCheck(sid,pid){
                this.$emit("pCheck",sid,pid)
            }
        }
    }
</script>

<style scoped>

</style>
