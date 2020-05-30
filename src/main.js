import Vue from 'vue'
import App from './App.vue'


import router from './router/myRouter' // 导入路由文件
import api from './api' // 导入api接口

import {server} from './api/server' //导入通讯接口

import store from './store' // 导入vuex文件
import { currency } from './assets/js/currency'

Vue.filter('currency', currency)

import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS

Vue.use(iView);

//定义全局变量

Vue.prototype.$server=server;
Vue.prototype.$api = api; // 将api挂载到vue的原型上复制代码


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
