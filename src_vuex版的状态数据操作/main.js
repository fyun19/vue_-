// 引入Vue
import Vue from 'vue'
// 引入App组件
import App from './App.vue'

import store from './vuex/store.js'

// 
Vue.config.productionTip = false

// 实例化
/* eslint-disable no-new */
new Vue({
    el: '#app',
    // 注册组件
    components:{
        App
    },
    template: '<App/>',
    store
})