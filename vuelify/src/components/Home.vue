<template lang="">
    <div>
        <p>{{title}}</p>
        父组件获取子组件的属性和方法
            1.先给子组件定义一个ref
        <br/>
        <br/>
         <button v-on:click="sendNews()">给news组件传值</button>
         <br/>
        <v-header ref="header" msg="传值给Header" :Msg="Msg" :run="run"></v-header>
        
        
        <br/>
        <br/>
        {{"主动获取Header属性==="+headertitle}}
        <br/>
        <button @click="getHeaderFun()">主动获取子组件的方法</button>
        <hr/>
        <button @click="getData()">请求数据vue-resource</button>
        <ul>
            <li v-for="(item, index) in list" :key="index">{{item.title}}</li>
        </ul>
        <hr/>
        <p>axios方式</p>
        <button @click="axiosGetData()">请求数据axios</button>
        <ul>
            <li v-for="(item, index) in list1" :key="index">{{item.title}}</li>
        </ul>
    </div>
</template>
<script>
import Header from './Header.vue'
//axios 方式请求数据 先安装 那里用在那引入
import Axios from 'axios'

//引入vue实例
import VueEvent from '../model/VueEvent.js'


let api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=1';
export default {
    data(){
        return{
            title:"Home组件111",
            Msg:"绑绽传值",
            list:[],
            list1:[],
            headertitle:""
        }
    },
    methods: {
        
        getData(){
            //'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=2&page=1'
            // var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=1'
             this.$http.get(api).then(response => {

                // console.log(response)
                this.list = response.body.result

            }, response => {
                // error callback
            });
        
        },
        axiosGetData(){
            Axios.get(api)
            .then((response)=> {
                // handle success
                // console.log(response.data);
                this.list1 = response.data.result
            })
            .catch((error)=> {
                // handle error
                console.log(error);
            })
        },
        run(){
            alert("我是Home组件run方法")
        },
        getHeaderFun(){
            this.$refs.header.getChild();
        },
        sendNews(){
            //给非父子组件传值
            
            VueEvent.$emit("toNews",this.title)//表示广播数据
        }

    },
    components:{
        "v-header":Header
    },
    mounted() {
        //生命周期函数
        this.getData();
        this.headertitle = this.$refs.header.title;
    },
}
</script>