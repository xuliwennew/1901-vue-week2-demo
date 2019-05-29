<template>
    <li style="position: relative">
        <div class="shop-info">
            <input type="checkbox" @change="singleCheck(sid,pid)" v-model="data.checked" class="check goods-check goodsCheck">
            <div class="shop-info-img">
                <a href="#">
                    <img :src="data.pic" />
                </a>
            </div>
            <div class="shop-info-text">
                <h4>{{data.title}}</h4>
                <div class="shop-brief">
                    <span>重量:{{data.attrs.weight}}</span>
                    <span>颜色:{{data.attrs.color}}</span>
                    <span>版本:{{data.attrs.version}}</span>
                </div>
                <div class="shop-price">
                    <div class="shop-pices">￥<b class="price">{{data.price}}</b>
                    </div>
                    <div class="shop-arithmetic">
                        <a class="minus" >-</a>
                        <span class="num">{{data.num}}</span>
                        <a class="plus">+</a>
                    </div>
                </div>
            </div>
        </div>
        <transition>
            <div class="edit-info" v-show="false"></div>
        </transition>
    </li>
</template>

<script>
    export default {
        name: "cartShopProduct",
        props:["data","sid","pid"],
        methods:{
            singleCheck(sid,pid){
                this.$emit("pCheck",sid,pid)
            }
        }
    }
</script>

<style scoped>
   .edit-info {
       right:0;
       top: 0;
       background-color: red;
       position: absolute;
       width:200px;
       height:100%;
   }
</style>
