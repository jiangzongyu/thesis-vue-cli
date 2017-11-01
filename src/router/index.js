import Vue from 'vue'
import Router from 'vue-router'
// import VueResource from 'vue-resource'
import Login from '@/components/Login'
import Index from '@/components/Index'
import Register from '@/components/Register'

Vue.use(Router)
// Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/register',
      name: Register,
      component: Register
    }
  ]
})
