<template>
    <li style="position: relative">
        <v-touch @swiperight="onSwipeRight" @swipeleft="onSwipeLeft">
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
                            <a class="minus" @click="minusNum(sid,pid)">-</a>
                            <span class="num">{{data.num}}</span>
                            <a class="plus" @click="addNum(sid,pid)">+</a>
                        </div>
                    </div>
                </div>
            </div>
        </v-touch>

        <transition name="swiper">
            <div @click="del(sid,pid)" class="item-del" v-if="isShow">
                删除
            </div>
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
            },
            addNum(sid,pid){
                this.$emit("add",sid,pid)
            },
            minusNum(sid,pid){
                this.$emit("minus",sid,pid)
            },
            onSwipeLeft(){
                this.isShow= true
            },
            onSwipeRight(){
                this.isShow = false
            },
            del(sid,pid){
                this.isShow = false
                this.$emit("del",sid,pid)
            }

        },
        data(){
            return {
                isShow:false
            }
        }
    }
</script>

<style scoped>
   .item-del {
       position: absolute;
       right: 0;
       top:0;
       width:100px;
       height:100%;
       background-color: red;
   }

    .swiper-enter {
       opacity: 0;
        transform: translate3d(100px,0,0);
    }

    .swiper-enter-active {
        transition: all 1s ease;
    }

    .swiper-enter-to {
        opacity: 1;
        transform: translate3d(0,0,0);
    }

    .swiper-leave {

    }

    .swiper-leave-active {
        transition: all 1s ease;
    }

    .swiper-leave-to {
        transform: translate3d(100px,0,0);
    }
</style>
