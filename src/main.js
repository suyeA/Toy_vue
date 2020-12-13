import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI)

// 把axios绑定到vue的原型上
// vue-resource: $http  引用类型
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
axios.interceptors.request.use(function (config) {
  // console.log('config', config)
  // 请求拦截器中统一的修改config.headers
  // config.baseURL = 'http://localhost:8888/api/private/v1/'
  if (config.url !== 'login') {
    config.headers.Authorization = localStorage.getItem('token')
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

// 配置响应拦截器
axios.interceptors.response.use(function (response) {
  // console.log('响应的数据', response)
  // 拦截到所有的响应，直接把res的data返回
  return response.data
}, function (error) {
  return Promise.reject(error)
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
