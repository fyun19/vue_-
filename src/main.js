import Vue from 'vue'
import App from './App'
// 引入store仓库对象
import store from './vuex/store.js'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
    el:'#app',
    components:{App},
    template:'<App/>',
    store
})