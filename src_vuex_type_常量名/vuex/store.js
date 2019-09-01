import Vue from 'vue'
import Vuex from 'vuex'
// 定义常量名
export const INCREMENT='INCREMENT'

Vue.use(Vuex)
// 包含多个状态数据的对象
const state = {
    count:0
}
// 包含直接修改状态数据的多个方法的对象
const mutations = {
    // 这里可以有多个方法，每个方法就是一个mutation
    // INCREMENT(state) {
    //     state.count++
    // },
    [INCREMENT](state) {
        state.count++
    },
    DECREMENT(state) {
        state.count--
    }
}
// 包含间接修改状态数据的多个方法的对象 找到mutations直接修改 要想找到mutation里的方法，需要commit
const actions = {
    increment(context){
        context.commit(INCREMENT)
    },
    // increment(context){
    //     context.commit('INCREMENT')
    // },
    decrement({commit}){
        commit('DECREMENT')
    },
    incrementIfOdd({state,commit}){
        if(state.count%2!==0){
            commit('INCREMENT')
         }
    },
      // 异步的加 不需要state 因为actions里是间接的操作
      incrementAsync({commit}){
        setTimeout(()=>{
            commit('INCREMENT')
        },1000)
    }

   }
// 包含了多个状态数据的计算属性的getter方法的对象
const getters = {
    evenOrOdd(state){
        return state.count%2===0?'偶数':'奇数'
    }
}
// 向外暴露仓库对象
export default new Vuex.Store({
    // 相关配置
    state,
    mutations,
    actions,
    getters
})