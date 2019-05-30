<template>
    <div class="payment-bar">
        <div class="all-checkbox">
            <input @change="checkAll" type="checkbox" v-model="data.checked" class="check goods-check">全选
        </div>
        <div class="shop-total">
            <strong>总价：<i id="AllTotal" class="total">{{data|counter}}</i></strong>
            <span>减免：100</span></div>
        <a href="#" class="settlement">结算</a>
    </div>
</template>

<script>
    export default {
        name: "cartFooter",
        props:["data"],
        filters:{
            counter(cartinfo){
                let total = 0;
                if(cartinfo.shops){
                    cartinfo.shops.forEach((shop,sid)=>{
                        shop.products.forEach((product,pid)=>{
                            if(product.checked){
                                total +=product.price * product.num
                            }
                        })
                    })
                }
                return total
            }
        },
        methods:{
            checkAll(){
                this.$emit("checkAll")
            }
        }
    }
</script>

<style scoped>

</style>
