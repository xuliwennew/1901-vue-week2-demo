<template>
   <div class="shop-group-item">
      <div class="shop-name">
         <input type="checkbox" @change="shopCheckAll(sid)" class="check goods-check shopCheck" v-model="data.checked">
         <h4><a href="#">{{data.shopName}}</a></h4>
         <div class="coupons">
            <span>领券</span><em>|</em><span>编辑</span>
         </div>
      </div>
      <jh-cart-shop-product-list @del="del" @minus="minusNum" @add="addNum" @pCheck="singleCheck" :data="data.products" :sid="sid"></jh-cart-shop-product-list>

      <div class="shopPrice">本店总计：￥<span class="shop-total-amount ShopTotal">{{data.products | counter}}</span>
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
        },
        filters:{
            counter(products){
                let total = 0;
                products.forEach((product,index)=>{
                    total += product.price * product.num
                })

                return total
            }
        }
    }
</script>

<style scoped>

</style>
