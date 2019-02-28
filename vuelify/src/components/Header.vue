<template lang="">
    <div>
        <p>{{title}}</p>
        <p>接收父组件传的值===={{msg}} =Msg={{Msg}}</p>
        <button @click="run()">执行home组件run方法</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            title:"Header组件"
        }
    },
    methods: {
        getChild(){
            alert("我是子组件的方法")
        }

    },
    //接收父组件传过来的数据的两种方法
    //1.
    // props:["msg","Msg","run"],
    //2. 可以验证传过来的数据类型
    props:{
        'msg':String,
        'Msg':String,
        'run':Function,
    }
}
</script>