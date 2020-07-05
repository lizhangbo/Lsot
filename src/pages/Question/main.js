import Vue from 'vue'
import App from './App.vue'

// 导入路由文件
import router from './router/questionRouter'
// 导入api接口
import api from '../../api/index'


import store from './store' // 导入vuex文件
import { currency } from '../../assets/js/currency'

Vue.filter('currency', currency)

// 引入组件样式
import AtComponents from 'at-ui'
import 'at-ui-style'

Vue.use(AtComponents)

//vue引入markdown编辑器
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)

//定义全局变量

Vue.prototype.$api = api; // 将api挂载到vue的原型上复制代码


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
