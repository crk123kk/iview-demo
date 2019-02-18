import Vue from 'vue'
import Router from 'vue-router'
import PageMain from '@/components/layout/PageMain'
import Home from '@/modules/home'
import Login from '@/modules/login'
import User from '@/modules/user'
import Settings from '@/modules/settings'
import ContentManagement from '@/modules/contentManagement'
import Statistics from '@/modules/statistics'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      redirect: '/home',
      component: PageMain,
      children: [
        {
          path: '/',
          component: Home
        }
      ]
    }
  ]
})
