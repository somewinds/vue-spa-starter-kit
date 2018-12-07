import Vue from 'vue'
import Vuex from 'vuex'
import {Message} from 'element-ui'

Vue.use(Vuex)

const store = new Vuex.Store({
    // namespaced: true,
    state: {
        callingAPI: false, // 是否正在调用API
    },
    mutations: {
    },
        
})

export default store;