<template>
    <div class="todo-footer">
      <!-- 使用插槽 slot -->
        <!-- <label slot="left">
          <input type="checkbox" v-model="isChecked"/>
        </label>
        <span slot="center">
          <span>已完成{{count}}</span>
          / 全部{{todos.length}}
        </span>
        <button slot="right" class="btn btn-danger" v-show="count>0">清除已完成任务</button> -->
        <slot name="left"/>
        <slot name="center"/>
        <slot name="right"/>
      </div>
</template>
<script>
export default {
  // props: {
  //   todos:Array,
  //   checkAll:Function
  // },
 
  // computed: {
  //   // 勾选个数
  //   count(){
  //     // 从0开始加 要看当前todo是否被选中 选中让计数器变为1 否则0
  //     return this.todos.reduce((pre,todo) => pre + (todo.isShow ? 1 : 0), 0)
  //   },
  //   isChecked:{
  //   get(){
  //     return this.todos.length===this.count && this.count > 0
  //   },
  //   set(val){
  //     this.checkAll(val)
  //   }
  // }
  // }
};
</script>
<style scoped>

/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}

</style>