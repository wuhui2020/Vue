<template lang="">
    <div>
        <p>{{this.$store.state.count}}</p>
        <p>{{this.$store.getters.computedCount}}</p>
        <button @click="addCount()">增加</button>
    </div>
</template>
<script>
import store from '../vuex/store.js';
export default {
    data(){
        return {
            msg:"home组件"
        }
    },
    store,
    methods: {
        addCount(){
            //触发store组件中的方法
           this.$store.commit("inCount") 
        }
    },
}
</script>