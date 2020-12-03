import Vue from 'vue'
import Router from 'vue-router'

// 按模块管理引用路由
import demo from './demo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/views/Home'),
      meta: {
        title: '商城首页'
      },
    },
    {
      path: '/404',
      name: 'nofind',
      component: () => import('@/views/common/404'),
      meta: {
        title: '找不到页面'
      }
    },
    {
      path: '/login',
      component: () => import('@/views/Login'),
      meta: {
        title: '登录'
      },
    },
    {
      path: '/register',
      component: () => import('@/views/Register'),
      meta: {
        title: '注册'
      },
    }
  ]
})
