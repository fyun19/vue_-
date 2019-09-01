<template>
     <div>
          <ul>
          <li v-for="(m,index) in messages" :key="index">
              <router-link :to="`/home/messages/detail/${m.id}`">{{m.title}}</router-link>
              <!-- 编程式 -->
              ---<button @click="pushClick(m.id)">push查看</button>
              ---<button @click="replaceClick(m.id)">replace查看</button>
          </li>
      </ul>
      <hr>
      <button @click="$router.back()">返回</button>
      <router-view></router-view>
     </div>
</template>
<script>
    export default {
        data(){
            return{
                // 空数组
                messages:[]
            }
        },
        mounted () {
            setTimeout((index)=>{
                this.messages=[
                    {id:'1',title:'messages001'},
                    {id:'3',title:'messages003'},
                    {id:'5',title:'messages005'},
                ]
            },1000)
        },
        methods:{
            // 编程式
            pushClick(id){
                this.$router.push(`/home/messages/detail/${id}`)
            },
            replaceClick(id){
                this.$router.replace(`/home/messages/detail/${id}`)
            }
        }
    }
</script>

<style scoped>

</style>