<template>
    <div>
        <h1>次数：{{count}},奇数or偶数：{{evenOrOdd}}</h1>
        <button @click="add">+</button>
        <button @click="reduce">-</button>
        <button @click="addOdd">奇数+</button>
        <button @click="AsyncAdd">异步+</button>
    </div>
</template>

<script>
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
    export default {
        computed:{
            ...mapState(['count']),
            ...mapGetters(['evenOrOdd'])
        },

        methods:{
            // 加和减两大类 直接修改 通过action中的commit出发  所以是用mapMutations
            ...mapMutations({
                add:'ADD',
                reduce:'REDUCE'
            }),

 
            // 包含间接修改的方法的对象---action---dispatch 一般放异步方法
            ...mapActions(['addOdd','AsyncAdd'])
        }
    }
</script>

<style scoped>

</style>