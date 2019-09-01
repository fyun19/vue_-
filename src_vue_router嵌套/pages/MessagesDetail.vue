<template>
  <ul>
    <li>id:{{$route.params.id}}</li>
    <li>title:{{detail.title}}</li>
    <li>content:{{detail.content}}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      messageDetail: [
        { id: 1, title: "messages001", content: "message content001" },
        { id: 3, title: "messages003", content: "message content003" },
        { id: 5, title: "messages005", content: "message content005" }
      ],
      detail: {}
    };
  },
  mounted() {
    //   const id=this.$route.params.id *1 // 因为此时id是字符串类型 所以*1
    //   this.detail = this.messageDetail.find(m=>m.id===id )
    this.showDetail(this.$route); //可以传参 不传也行
  },
  watch: {
    $route(val) {
      // const id=this.$route.params.id *1 // 因为此时id是字符串类型 所以*1
      // this.detail = this.messageDetail.find(m=>m.id===id )
      this.showDetail(val);
    }
  },
  methods: {
    showDetail(val) {
      const id = this.$route.params.id * 1; // 因为此时id是字符串类型 所以*1
      // 因为此时id是字符串类型 所以*1
      this.detail = this.messageDetail.find(m => m.id === id)
      // const id=this.$route.params.id
      // this.detail = this.messageDetail.find( m => m.id === +id )
    }
  }
};
</script>

<style scoped>
</style>