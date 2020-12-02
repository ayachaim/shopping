export default [
  {
    path: '',
    name: 'demohome',
    component: () => import('@/views/Home'),
    meta: {
      title: '首页'
    }
  },
  {
    path: 'about',
    name: 'demoabout',
    component: () => import('@/views/Register'),
    meta: {
      title: '关于Demo'
    }
  }
]
