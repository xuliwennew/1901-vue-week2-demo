<template>
    <div class="shopping">
        <jh-cart-shop @del="del" @minus="minusNum" @add="addNum" @pCheck="singleCheck" @sCheck="shopCheckAll" :key="sid" :data="shop" :sid="sid" v-for="(shop,sid) in data.shops"></jh-cart-shop>
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
            },
            addNum(sid,pid){
                this.$emit("add",sid,pid)
            },
            minusNum(sid,pid){
                this.$emit("minus",sid,pid)
            },
            del(sid,pid){
                this.$emit("del",sid,pid)
            }
        }
    }
</script>

<style scoped>

</style>
