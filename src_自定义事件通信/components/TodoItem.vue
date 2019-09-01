<template>
       <li 
        :style="{backgroundColor:bgColor,color:fontColor}"
        @mouseenter="mouseHandle(true)"
        @mouseleave="mouseHandle(false)"  

       >
          <label>
            <input type="checkbox" v-model="isCommpleted"/>
            <span>{{todo.title}}</span>
          </label>
          <button class="btn btn-danger" v-show="state" @click="del">删除</button>
        </li>
</template>
<script>
export default {
  props: {
    // 设置接收过来的todo类型
    todo:Object,
    deleteTodo:Function,
    index:Number,
    toggleTodo:Function
  },
  data(){
    return {
      bgColor:'pink',
      fontColor:'blue',
      state:false
    }
  },
  // 方法
  methods: {
    mouseHandle(flag){
      // 判断
      if(flag){
        // 移入
        this.bgColor='yellowgreen'
        this.fontColor='skyblue'
        this.state='true'
      }else{
        // 移出
         this.bgColor='pink'
        this.fontColor='blue'
        this.state='false'
      }
    },
    del(){
      if(confirm('确认删除吗')){
         this.deleteTodo(this.index) 
      }
    }
  },
  computed: {
    // 是否选中
    isCommpleted:{
      get(){
        return this.todo.isShow
      },
      set(val){
        // 是因为调用了toggleTodo这个方法 才有权限修改todo
        this.toggleTodo(this.todo)
      }

    }
  }
}
</script>
<style scoped>

/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  /* display: none; */
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

</style>


