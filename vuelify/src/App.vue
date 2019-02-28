<template>
  <div id="app">
      <h1>{{msg}}</h1>
      <br/>
      <p>news组件</p>
      <v-news></v-news>
      <hr/>
      <br/>
      <p>home组件</p>
      <v-home></v-home>
      <br/>
      <hr/>
      <br/>
      

      <button @click="flag=!flag">是否挂载lify组件</button>
      <v-lify v-if="flag"></v-lify>
      

  </div>
</template>

<script>
import Home from './components/Home.vue'
import News from './components/News.vue'
import Lify from './components/Lify.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      flag:true
    }
  },
  components:{
    "v-home":Home,
    "v-news":News,
    "v-lify":Lify
  }
}
</script>

<style lang="scss">


</style>
