<template>
  <div id="app">
      <v-home></v-home>
      <v-news></v-news>
      <h1>你好,vue</h1>
      <div>{{msg}}</div>
      <input type="text" v-model="msg" />
      <button v-on:click="getMsg()">获取msg</button>
      <button @click="getMsg2()">@click获取msg</button>
      <div v-text="msg"></div>
      <div>{{obj.name}}</div>
      <div v-bind:title="title">{{title}}</div>
      <ul>
        <li v-for="(item, index) in list" :key="index" :class="{'red':index==0,'blue':index==1}">
          {{index}}---{{item.title}}
        </li>
      </ul>
      <br/>
      {{h}}
      <div v-html="h" :class="{'red':flag}"></div>
      <div  v-bind:class="{'red':flag,'blue':!flag}">测试绑定class</div>
      <div  :class="{'red':flag,'blue':!flag}">测试绑定class</div>
      <div class="box">box</div>
      <hr/>
      <br/>
      <input type="text" v-model="todoContext" /><button @click="addTodo()">增加</button>
      <div>待办事项</div>
     
      <ul>
        <li v-for="(item, index) in todolist" v-if="!item.checked" v-bind:key='index'>
          <input type="checkbox" v-model='item.checked' @click='isCheck(index)'/>
          {{item.text}}-----
          <button @click="delTodo(index)">删除</button>
        </li>
      </ul>
      <div>已办事项</div>
      <ul>
        <li v-for="(item, index) in todolist" v-if="item.checked" v-bind:key='index'>
          <input type="checkbox" v-model='item.checked' @click='isCheck(index)'/>
          {{item.text}}
          <button @click="delTodo(index)">删除</button>
        </li>
      </ul>
      <h2>v-for与v-if分开</h2>
      <div>待办事项</div>
      <ul>
        <li v-for="item in FTodolist" :key="item.id">
        <input type="checkbox" v-model='item.checked' @click='isCheck1(item.id)'/>
          {{item.text}}
          <button @click="delTodo1(item.id)">删除</button>
        </li>
      </ul>
      <div>已办事项</div>
      <ul>
        <li v-for="item in TTodolist" :key="item.id">
        <input type="checkbox" v-model='item.checked' @click='isCheck1(item.id)'/>
          {{item.text}}
          <button @click="delTodo1(item.id)">删除</button>
        </li>
      </ul>


  </div>
</template>

<script>
//1.引入组件 2.挂载组件 3.在模板中使用
import Home from "./components/Home.vue"
import News from "./components/News.vue"
//引入storage.js模块
import storage from './model/storage.js'
// console.log(storage)
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title:"我是一个title",
      h:'<h1>绑定h2</h2>',
      flag:true,
      obj:{
        name:"wu"
      },
      list:[
        {title:"11111"},
        {title:"22222"},
        {title:"33333"},
        {title:"44444"},
        {title:"55555"}
      ],
      todoContext:"",
      todolist:[
        // {text:"1111",flag:true},
        // {text:"2222",flag:false},
      ],
      todolist1:[
        // {id:1,text:"1111",flag:true},
        // {id:2,text:"2222",flag:false},
      ]

    }
  },
  components:{
    //挂载组件
    'v-home':Home,
    'v-news':News
  },
  methods: {
    getMsg:function(){
      alert(this.msg)
    },
    getMsg2(){
      alert("msg2="+this.msg)
    },
    addTodo(){
      this.todolist.push({text:this.todoContext,checked:false});
      this.todolist1.push({id:this.todolist1.length,text:this.todoContext,checked:false});
      this.todoContext = "";
      storage.set("list",this.todolist)
      storage.set("list1",this.todolist1)
      // localStorage.setItem("list",JSON.stringify(this.todolist))
      // localStorage.setItem("list1",JSON.stringify(this.todolist1))
    },
    delTodo(index){
      this.todolist.splice(index,1);
      // localStorage.setItem("list",JSON.stringify(this.todolist))
      storage.set('list',this.todolist)
    },
    delTodo1(id){
      for(var i = 0; i < this.todolist1.length; i++){
        if(id == this.todolist1[i].id){
          this.todolist1.splice(i,1);
        }
      }
      // localStorage.setItem("list1",JSON.stringify(this.todolist1))
      storage.set('list1',this.todolist1)
    },
    isCheck(index){
      this.todolist[index].checked = !this.todolist[index].checked;
      // localStorage.setItem("list",JSON.stringify(this.todolist))
      storage.set('list',this.todolist)
    },
    isCheck1(id){
      for(var i = 0; i < this.todolist1.length; i++){
        if(id == this.todolist1[i].id){
          this.todolist1[i].checked = !this.todolist1[i].checked;
        }
      }
      // localStorage.setItem("list1",JSON.stringify(this.todolist1))
      storage.set('list1',this.todolist1)
    }
  },
  computed:{
    TTodolist:function(){
      return this.todolist1.filter(function(item){
        return item.checked;
      })
    },
    FTodolist:function(){
      return this.todolist1.filter(function(item){
        return !item.checked;
      })
    }
  },
  mounted(){
    
    //生命周期函数 
    // var list = JSON.parse(localStorage.getItem("list"))
    // var list1 = JSON.parse(localStorage.getItem("list1"))
    var list = storage.get('list')
    var list1 = storage.get('list1')
  //  console.log(list)
    if(list){
      this.todolist = list
    }
    if(list1){
      this.todolist1 = list1
    }
  }
}
</script>

<style lang="scss">
.red{
  color:red;
}
.blue{
  color:blue;
}
.box{
  color:red;
}
</style>
