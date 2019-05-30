<template>
    <div>
        <h1>B组件</h1>
        <h2>{{num}}</h2>
        <button @click="add">+</button>
    </div>
</template>

<script>
    export default {
        name: "CounterB",
        data(){
            return {
                num:localStorage.getItem("num")
            }
        },
        methods:{
            add(){
                this.num++
            }
        },
        mounted(){
           setInterval(()=>{
               this.num = localStorage.getItem("num")
           })
        }
    }
</script>

<style scoped>

</style>
