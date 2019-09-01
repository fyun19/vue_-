<template>
  <div>
      <h1 v-if="!repUrl">正在加载中...</h1>
      <h1 v-else>
          most star is
          <a :href="repUrl">{{repName}}</a>
      </h1>
  </div>
</template>

<script>
export default {
    data(){
        return{
            repUrl:"",
            repName:""
        }
    },
    mounted(){
        // 发送请求
        console.log(this)
        const url =  `https://api.github.com/search/repositories?q=v&sort=stars`;
        this.$http
            .get(url)
            .then(Response => {
                // 获取相关的数据
                const result = Response.data.items[0]
                // 更新data中的数据
                this.repUrl = result.html_url
                this.repName = result.name
                })
            .catch(error => {
                console.log("错误信息",error)
            })
    }
}
</script>

<style>

</style>