<template>
     <div class="todo-container">
    <div class="todo-wrap">
      <!-- 这里是通过v-bind把数据绑到属性里面 传到另外一个组件 另外一个组件通过props接收并设置这个数据使用类型-->
      <!--@自定义事件通信--> 
      <TodoHeader @addTodo="addTodo"/>  <!--:deleteTodo="deleteTodo"-->
      <TodoList :todos="todos" /><!--:toggleTodo="toggleTodo"-->
      <TodoFooter :todos="todos" :checkAll="checkAll"/>
    </div>
  </div>
</template>
<script>

// 在父级组件中，引入三个子级组件
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

// 通过消息订阅，实现删除todo的功能 界面加载之后 订阅就完成了
import PubSub from 'pubsub-js'

// Vue.component() 全局的方式注册组件
export default {
  // 界面加载后 所有的方法都在VueComponent这个组件对象上 实例的方法是$开头的
  mounted() {
    /**
     * Vue和vm vm.__proto__===Vue.prototype
     * App对象__proto__.__proto__===vm.__proto__
     *  console.log(this.__proto__.__proto__===Vue.prototype)
     */
    // 第一个参数：消息---事件名
    // 第二个参数：回调函数 在vm对象卸载之前 利用token标识取消订阅 
  var token = PubSub.subscribe('deleteTodo',(msg,index)=>{
      // 删除操作  当发布时才会被调用
      this.deleteTodo(index)
    })

    // 绑定事件  分发(触发)之后执行
    this.$bus.$on('toggleTodo',(todo)=>{
      this.toggleTodo(todo)
    })
   
  },
  name:'App',
  // 注册组件（局部）
  components: {
    TodoHeader,
    TodoList,
    TodoFooter,
  },
  data(){
    return { 
      todos:[
          {id:1,title:'香蕉',isShow:false},
          {id:2,title:'苹果',isShow:true},
          {id:3,title:'橘子',isShow:false},
      ]
    }
  },
  methods: {
    // 删除数组的操作
    deleteTodo(index){
      this.todos.splice(index,1)
    },
    // 添加数据的操作 (添加对象)
    addTodo(todo){
      this.todos.unshift(todo)
    },
    // 选中  传入一个选项，设置该选项是否被选中
    toggleTodo(todo){
      todo.isShow=!todo.isShow
    },
    // 是否全选
    checkAll(isCheck){
      // 遍历数组中每个数据，设置isShow为true或者false
      this.todos.forEach(todo => {
        todo.isShow = isCheck
      })
    }
  }

}
</script>
<style scoped>



/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>