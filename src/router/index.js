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
        },
        {
          path: '/settings',
          component: Settings
        },
        {
          path: '/contentManagement',
          component: ContentManagement
        },
        {
          path: '/statistics',
          component: Statistics
        }
      ]
    }
  ]
})
