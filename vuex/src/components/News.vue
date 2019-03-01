<template lang="">
    <div>
        {{msg}}
        <p>{{this.$store.state.count}}</p>
        <ul>
            <li v-for="(item, index) in this.$store.state.list" :key="index">
                {{item.title}}
            </li>
        </ul>
    </div>
</template>
<script>
import store from '../vuex/store.js';
export default {
    data(){
        return {
            msg:"news组件",
            list:[]
        }
    },
    store,
    methods: {
        getData(){
            //'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=2&page=1'
            var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=1'
             this.$http.get(api).then(response => {

                // console.log(response)
                this.list = response.body.result
                this.$store.commit('addList',response.body.result)

            }, response => {
                // error callback
            });
        
        }
    },
    mounted() {
        var listData = this.$store.state.list;
        if(listData.length > 0){
            this.list = this.$store.state.list
        }else{
            this.getData();
        }

        
    },

}
</script>