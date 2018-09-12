/**
 * meta 自定义属性
 * auth：1（need login），2（dont need login）
 * title：header title
 * link：header link
 */
const routes = [
  {
    path: '/',
    redirect: '/home/hot-active'
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      auth: 1,
      keepAlive: true,
      title: '首页'
    },
    redirect: '/home/hot-active',
    component: () => import('@/pages/home').then(m => m.default),
    children: [
      {
        path: 'hot-active',
        name: 'hotActive',
        meta: {
          title: '热门活动',
          showTitle: false
        },
        component: () => import('@/components/hot-active/HotActive').then(m => m.default)
      },
      {
        path: 'exclusive-active',
        name: 'ExclusiveActive',
        meta: {
          title: '专属活动',
          showTitle: false
        },
        component: () => import('@/components/exclusive-active/ExclusiveActive').then(m => m.default)
      },
      {
        path: 'my-active',
        name: 'MyActive',
        meta: {
          title: '专属福利详情',
          showTitle: false
        },
        component: () => import('@/components/my-active/MyActive').then(m => m.default)
      }
    ]
  },
  {
    path: '/hot-active-detail',
    name: 'hotActiveDetail',
    meta: {
      auth: 1,
      title: '热门活动详情',
      showTitle: true
    },
    component: () => import('@/pages/hotActiveDetail').then(m => m.default)
  },
  {
    path: '/exclusive-active-detail',
    name: 'ExclusiveActiveDetail',
    meta: {
      auth: 1,
      title: '专属福利详情',
      showTitle: true
    },
    component: () => import('@/pages/ExclusiveActiveDetail').then(m => m.default)
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login').then(m => m.default)
  }
]

export default routes
