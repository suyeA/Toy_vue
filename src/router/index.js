import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})
// 登陆状态判断
// 路由跳转的时候 判断有没有储存token 如果没有则跳转到登陆页。
// router.beforeEach(function (to, from, next) {
//   // 去localStorage中获取到token
//   const token = localStorage.getItem('token')
//   if (to.path === '/login' || token) {
//     next()
//   } else {
//     next('/login')
//   }
// })

export default router
