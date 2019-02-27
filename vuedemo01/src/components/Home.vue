<template>
    <div>
        <h1>我是Home组件，所有的内容被根节点包含起来</h1>
        <div>{{msg}}</div>
        <button @click="run()">执行run方法</button>
    
    </div>
</template>
<script>
    //在里面写数据和方法
    export default {
        data(){
            return{
                msg:"我是一个首页组件"
            }
        },
        methods:{
            run(){
                console.log(this.msg)
            }
        }
    }
</script>
<style lang="scss">
    
</style>