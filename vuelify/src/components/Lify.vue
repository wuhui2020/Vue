<template lang="">
    <div>
        <h1>生命周期实例</h1>
        {{msg}}
        <input type="text" v-model="msg" />
        <button @click="setMsg()">执行setmsg</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:"我是一个生命周期函数"
        }
    },
    methods:{
        setMsg(){
            this.msg="我是改变后的msg"
        }
    },
    beforeCreate() {
        console.log("实例创建之前 === beforeCreate")
    },
    created() {
        console.log("实例创建完成 ===  created")
    },
    beforeMount() {
        console.log("模板编译之前 == beforeMount")
    },
    mounted() {
         console.log("模板编译完成 mounted")
    },
    beforeUpdate() {
        console.log("实例更新前 beforeUpdate")
    },
    updated() {
        console.log("实例更新后  updated")
    },
    beforeDestroy() {
        console.log("实例销毁之前 beforeDestroy")
    },
    destroyed() {
        console.log("实例销毁之后 destroyed")
    },
}
</script>