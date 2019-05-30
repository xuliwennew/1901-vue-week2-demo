<template>
    <div>
        <h1>徐记</h1>
        <h2>{{menu}}</h2>
        <button @click="getRice">上鸡蛋炒饭</button>
    </div>
</template>

<script>
    import {mapGetters} from "vuex"
    export default {
        name: "LaoXuFandian",
        data(){
            return {
                // menu:0
            }
        },
        computed:{
            ...mapGetters({
                menu:"TANGHONGLIANG"
            })
        },
        methods:{
            getRice(){
               //
               this.$store.dispatch("YANGQI","zhimas")
            }
        },
        mounted(){
            console.log(this.$store.state)
        }
    }
</script>

<style scoped>

</style>
