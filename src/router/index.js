import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// 如果是开发环境
if(process.env.NODE_ENV === 'development'){
	Vue.use(Router)
}
// Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
