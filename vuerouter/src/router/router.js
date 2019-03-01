import Vue from 'vue';
//1.引入路由
import VueRouter from 'vue-router'; 
Vue.use(VueRouter)
//2.创建组件（引入）
import Home from '../components/Home.vue';
import News from '../components/News.vue';
import User from '../components/User.vue';
import UserCenter from '../components/usermodule/UserCenter.vue';
import UserSet from '../components/usermodule/UserSet.vue';
//3.配制路由
const routes = [
  {path:'/home',component:Home},
  {path:'/news',component:News},
  {path:'/user',component:User,
      children:[
        {path:'/user/',component:UserCenter},
        {path:'/user/userset',component:UserSet},
      ]
  },
  {path:"*",redirect:"/home"} //表示没有匹配到重定向在Home页
]
//4.实例化VueRouter
const router = new VueRouter({
    routes	 //缩写  相当于routes:routes
  })

export default router;