<template>
      <div class="todo-header">           <!--回车时调用-->
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" 
        v-model="title" @keyup.13="add"/> <!--add是keyup这个事件的回调函数-->
      </div>
</template>
<script>
export default {
  // 简写
//  props: {
//    addTodo: Function
//  }
    // props:{
    //   addTodo:{
    //     type:Function,
    //     require:true
    //   }
    // },
    data(){
      return{
        title:''//文本框数据的内容
      }
    },
    methods: {
      add(){
        const title = this.title.trim()
        // 判断
        // title!==''   title.length!=0 
        if(title){
            // 调用addTodo方法
        const todo={
          id:Date.now(),
          title:title,
          isShow:false
        }
        // this.addTodo(todo) //事件的回调函数里调用了addTodo方法--->一个事件触发了
        //但是没有vm 可以使用this 因为当前this是一个组件对象 组件对象是Vue的间接子级对象
        // 分发事件===触发事件
        this.$emit('addTodo',todo)
        this.title=''
        }
      
      }
    }
}
</script>
<style scoped>

/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}

</style>