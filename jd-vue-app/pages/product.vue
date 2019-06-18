<template>
  <div>
     <h1 @click="show">
        product component

     </h1>
      <cui-loading></cui-loading>

  </div>
</template>

<script>
    import {mapGetters} from "vuex"
    export default {
        name: "product",
        computed:{
            ...mapGetters({
                cartInfo:"GETCARTINFO"
            })
        },
        mounted(){
            console.log(this.$store.state)
        },
        methods:{
            show(){
                this.$show()
            }
        }
    }
</script>

<style scoped>

</style>
