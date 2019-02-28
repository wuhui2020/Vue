import Vue from 'vue'
import App from './App.vue'

//官方组件引入与使用
import VueResource from 'vue-resource';
Vue.use(VueResource)

new Vue({
  el: '#app',
  render: h => h(App)
})
