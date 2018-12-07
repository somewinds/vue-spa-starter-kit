import Vue from 'vue'
import Vuex from 'vuex'
import {Message} from 'element-ui'

// 如果是开发环境
if(process.env.NODE_ENV === 'development'){
	Vue.use(Vuex)
}
// Vue.use(Vuex)

const store = new Vuex.Store({
    // namespaced: true,
    state: {
        callingAPI: false, // 是否正在调用API
    },
    mutations: {
    },
        
})

export default store;