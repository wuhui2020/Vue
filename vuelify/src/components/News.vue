<template lang="">
    <div>
        <p>{{title}}</p>
    </div>
</template>
<script>
import VueEvent from '../model/VueEvent.js'
export default {

    data(){
        return{
            title:"新闻组件"
        }
    },
    methods: {
        
    },
    mounted() {
        //接收非父子组件传过来的值
        VueEvent.$on("toNews",function(data){
            console.log(data)
        })
    },
}
</script>