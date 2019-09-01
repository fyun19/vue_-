<template>
     <ul class="todo-main">
       <!-- 遍历数据 -->
       <TodoItem v-for="(todo,index) in todos" :key="todo.id" :todo="todo" :deleteTodo="deleteTodo" :index="index" :toggleTodo="toggleTodo"/>
      </ul>
</template> 
<script>
// 引入TodoItem组件
import TodoItem from "./TodoItem.vue"
export default {
  // props可以实现组件之间的传值，父传子组件的方式---数组的写法 
  props: ['todos','deleteTodo','toggleTodo'],
// 注册组件
components: {
  TodoItem
}
}
</script>
<style scoped>

/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}

</style>
