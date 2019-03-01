import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

//1. state在vuex中用于存储数据
var state = {
    count:1,
    list:[]

}

//2 mutations 里面放的是方法，方法主要用于改变state里面的数据

var mutations = {
    inCount(){
        ++state.count
    },
    addList(state,data){
        state.list = data
    }
}

//3. 计算   基本不怎么用
var getters = {
    computedCount:(state)=>{
        return state.count * 2;
    }
}

//vuex 实例化 Vuex.store
const store = new Vuex.Store({
    state,
    mutations,
    getters
})

export default store;