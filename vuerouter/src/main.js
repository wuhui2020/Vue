import Vue from 'vue';
import App from './App.vue';

//引入路由模块
import router from './router/router.js' 


//1.引入路由
// import VueRouter from 'vue-router'; 
// Vue.use(VueRouter)
// //2.创建组件（引入）
// import Home from './components/Home.vue';
// import News from './components/News.vue';
// //3.配制路由
//   {path:'/news/:id',component:News}, 动态路由传值
// const routes = [
//   {path:'/home',component:Home},
//   {path:'/news',component:News},
//   {path:"*",redirect:"/home"} //表示没有匹配到重定向在Home页
// ]
// //4.实例化VueRouter
// const router = new VueRouter({
//     routes	 //缩写  相当于routes:routes
//   })
//5.在new Vue里面挂载router

//6.路由出口<router-view></router-view>
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
