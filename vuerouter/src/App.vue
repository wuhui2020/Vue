<template>
  <div id="app">
      <router-link to="/">首页</router-link>
      <router-link to="/news">新闻</router-link>
      <router-link to="/user">用户</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
// import Home from './components/Home.vue';
// import News from './components/News.vue';
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components:{
    // 'v-home':Home,
    // 'v-news':News
  }
}
</script>

<style lang="scss">

</style>
