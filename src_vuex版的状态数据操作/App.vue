<template>
    <div>
        <h1>次数:{{$store.state.count}},奇数or偶数:{{$store.getters.evenOrOdd}}</h1>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementIfOdd">奇数+</button>
        <button @click="incrementAsync">异步+</button>
    </div>
</template>

<script>

    export default{

        mounted () {
            console.log(this);
        },

        methods:{
            increment(){
            //    this.count++
            this.$store.commit("INCREMENT")
            },
            decrement(){
            //     this.count--
            this.$store.commit("DECREMENT")
            },
            // 奇数加
            incrementIfOdd(){
                // if(this.count % 2 !==0){
                //     this.count++
                // }
                this.$store.dispatch("incrementIfOdd")
            },
            // 异步的加
            incrementAsync(){
                // setTimeout(()=>{
                //     this.count++
                // },1000)
                this.$store.dispatch("incrementAsync")
            }

        }
    }
</script>

<style scoped>

</style>