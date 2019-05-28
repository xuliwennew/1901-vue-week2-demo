<template>
   <h1>hello component</h1>
</template>

<script>
    import userApi from "../apis/userApi"
    export default {
        name: "hello",
        created(){
           this._initData()
        },
        methods:{
            _initData(){
                userApi.getUsers(data=>{
                    console.log(data)
                })
            }
        }
    }
</script>

<style scoped>

</style>
