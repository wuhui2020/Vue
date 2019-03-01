<template lang="">
    <div id="user">
        <div class="left">
            <router-link to="/user/">个人中心</router-link>
            <router-link to="/user/userset">个人设置</router-link>
        </div>
        <div class="right">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:"用户组件"
        }
    }
}
</script>
<style lang="scss" >
    .left{
        width:200px;
        height:600px;
        border:1px solid #ccc;
        float:left;
    }
    .right{
        width:600px;
        height:600px;
        border:1px solid #ccc;
        float:left;
    }
    
</style>