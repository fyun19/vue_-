// 引入Vue
import Vue from 'vue'
// 引入App组件
import App from './App.vue'
// 
Vue.config.productionTip = false
//$bus里拥有了Vue里的所有方法
Vue.prototype.$bus=new Vue()
// 实例化
/* eslint-disable no-new */
new Vue({
    el: '#app',
    // 注册组件
    components:{
        App
    },
    template: '<App/>'
})
