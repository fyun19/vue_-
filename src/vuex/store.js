import Vue from 'vue'
import Vuex from 'vuex'
// 声明使用 
Vue.use(Vuex)

// 包含多个状态数据的对象
const state = {
    count:0
}
// 包含了直接修改状态数据的多个方法的对象 一般放同步的方法
const mutations = {
    ADD(state){
        state.count++ 
    },
    REDUCE(state){
        state.count--
    }
}
// 包含了间接修改状态数据的多个方法的对象 一般放异步的方法

const actions = {
    // 通过commit()来触发mutation的调用 更新state
    // 加 在这里去调用mutation里的加的操作
    add(context){
        context.commit('ADD')
    },
    // 减
    reduce(context){
        context.commit('REDUCE')
    },
    // 奇数加
    // addOdd({state,commit}){
    //     if(state.count%2!==0){
    //         commit('ADD')
    //     }
    // },
    // 判断state中count的值 是奇数还是偶数 再提交进行加的操作
    addOdd(context){
        if(context.state.count%2!==0){
            context.commit('ADD')
        }
    },
    // 异步的加
    // AsyncAdd({commit}){
    //     setTimeout(()=>{
    //         commit('ADD')
    //     },1000)
    // }
    AsyncAdd(context){
        setTimeout(()=>{
            context.commit('ADD')
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
    state,
    mutations,
    actions,
    getters
})