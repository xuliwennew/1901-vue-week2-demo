<template>
   <div class="shop-group-item">
      <div class="shop-name">
         <input type="checkbox" @change="shopCheckAll(sid)" class="check goods-check shopCheck" v-model="data.checked">
         <h4><a href="#">{{data.shopName}}</a></h4>
         <div class="coupons">
            <span>领券</span><em>|</em><span>编辑</span>
         </div>
      </div>
      <jh-cart-shop-product-list @pCheck="singleCheck" :data="data.products" :sid="sid"></jh-cart-shop-product-list>

      <div class="shopPrice">本店总计：￥<span class="shop-total-amount ShopTotal">0</span>
      </div>
   </div>

</template>

<script>
    import cartShopProductList from "./cartShopProductList"
    export default {
        name: "cartShop",
        components:{
            "jh-cart-shop-product-list":cartShopProductList
        },
        props:["data","sid"],
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
