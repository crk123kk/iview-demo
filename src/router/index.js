import Vue from 'vue'
import Router from 'vue-router'
import PageMain from '@/components/layout/PageMain'
import Home from '@/modules/home'
import Login from '@/modules/login'
import User from '@/modules/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageMain',
      redirect: '/home',
      component: PageMain,
      children: [
        {
          path: '/home',
          component: Home
        },
        {
          path: '/login',
          component: Login
        },
        {
          path: '/user',
          component: User
        }
      ]
    }
  ]
})
