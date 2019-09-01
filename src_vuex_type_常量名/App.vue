<template>
    <div>
        <h1>次数:{{count}},奇数or偶数:{{evenOrOdd}}</h1>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementIfOdd">奇数+</button>
        <button @click="incrementAsync">异步+</button>
    </div>
</template>

<script>
import {mapState, mapGetters,mapMutations, mapActions} from 'vuex'
    export default{
        computed: {
            // count(){
            //     return this.$store.state.count
            // },
            // evenOrOdd(){
            //     return this.$store.getters.evenOrOdd
            // }
            // 拆包
            ...mapState([
                'count',// count:()=>{return this.$store.state.count}
                      ]),
            ...mapGetters(['evenOrOdd'])
        },
        mounted () {
            console.log(this);
        },

        methods:{
           
            // increment(){
            // //    this.count++
            // this.$store.commit("INCREMENT")
            // },
            // decrement(){
            // //     this.count--
            // this.$store.commit("DECREMENT")
            // },


                 // 去mutation里提交
                 ...mapMutations({
                    increment:'INCREMENT',
                    decrement:'DECREMENT'
                 }),


                // 去action里提交
                ...mapActions(['incrementIfOdd','incrementAsync'])

            // // 奇数加
            // incrementIfOdd(){
            //     // if(this.count % 2 !==0){
            //     //     this.count++
            //     // }
            //     this.$store.dispatch("incrementIfOdd")
            // },
            // // 异步的加
            // incrementAsync(){
            //     // setTimeout(()=>{
            //     //     this.count++
            //     // },1000)
            //     this.$store.dispatch("incrementAsync")
            // }


        }
    }
</script>

<style scoped>

</style>