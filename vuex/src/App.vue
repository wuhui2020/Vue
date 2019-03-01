<template>
  <div id="app">
      <router-link to="/home">首页</router-link>
      <router-link to="/news">新闻</router-link>
      <div>
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">

</style>
