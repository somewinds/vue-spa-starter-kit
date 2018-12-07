// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
// 如果是开发环境
if(process.env.NODE_ENV === 'development'){
	require('element-ui/lib/theme-chalk/index.css')
}
import ELEMENT from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import moment from 'moment'
import echarts from 'echarts'
import BaiduMap from 'vue-baidu-map'
import VueDND from 'awe-dnd' // 拖动排序
//import VuePreview from 'vue-preview'
import Croppa from 'vue-croppa' // 图片处理
let Base64 = require('js-base64').Base64; // 引入base64编码

// Require Froala Editor js file.
require('froala-editor/js/froala_editor.pkgd.min')

// Require Froala Editor css files.
require('froala-editor/css/froala_editor.pkgd.min.css')
require('font-awesome/css/font-awesome.css')
require('froala-editor/css/froala_style.min.css')

// Import and use Vue Froala lib.
import VueFroala from 'vue-froala-wysiwyg'
Vue.use(VueFroala);

Vue.use(ELEMENT, { size: 'medium' });
Vue.use(BaiduMap, {
  ak: 'yc3n5fiQQVezzrpESqpE6BCM'
})

// 图片处理
// Vue.use(Croppa, { componentName: 'my-image-cropper' }); // 可自定义组件名
Vue.use(Croppa);

// 拖动排序
Vue.use(VueDND);

moment.locale('zh-CN');
window.moment = moment;
window.echarts = echarts;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
