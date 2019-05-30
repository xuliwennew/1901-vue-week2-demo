<template>
    <div>
        <!--<counter-a></counter-a>-->
        <!--<hr/>-->
        <!--<counter-b></counter-b>-->
        <!--<hr/>-->
        <lao-xu-fandian></lao-xu-fandian>
    </div>
</template>

<script>
    import CounterA from "./components/CounterA"
    import CounterB from "./components/CounterB"
    import LaoXuFandian from "./components/LaoXuFandian"
    export default {
        name: "App",
        components:{
            CounterA,
            CounterB,
            LaoXuFandian
        }
    }
</script>

<style scoped>

</style>
