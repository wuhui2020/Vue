import Vue from 'vue'
import App from './App.vue'
import router from './router/router';
import VueResource from 'vue-resource';
Vue.use(VueResource)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
