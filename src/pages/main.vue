<template>
   <hello-world></hello-world>
</template>

<script>
    //kebab case 
    import helloWorld from "../components/helloWorld"
    export default {
        name: "main",
        components:{
            helloWorld
        }
    }
</script>

<style scoped>

</style>
