import routes from './router'
import store from '../vuex/index'

/* eslint-disable */
Vue.use(VueRouter)

const scrollBehavior = (to,from,savePosition) => {      // 页面滚动
  if(savePosition) {
    return savePosition
  }
  return new Promise(resolve => {
    setInterval(() => {
      resolve({x: 0,y: to.meta.scrollTop || 0})
    },0)
  })
}
const router = new VueRouter({
  routes,
  scrollBehavior
})
router.beforeEach((to, from, next) => {
  const {token, isCheck} = store.state.user
  const {path, fullPath, meta: {auth, keepAlive}, matched} = to
  console.log(to)
  to.meta.auth = !auth ? matched[0].meta.auth : auth      // 子路由无登录权限标识，使用父路由的标识
  to.meta.keepAlive = !keepAlive ? matched[0].meta.keepAlive : keepAlive
  
  if(!token && to.meta.auth === 1 && path != '/login') {  // 需要登录的页面未登录，跳转到登录页
    return next({
      path: '/login',
      query: {redirect: fullPath}
    })
  }
  if(token) {                                             // 登录之后
    if(path === '/login') {                               // 不能再次进入登录页
      return next({
        path: '/home'
      })
    }
    if(!isCheck) {                                        // 首次进入页面检查登录态是否过期
      return store.dispatch('GET_USER', {token: localStorage.getItem('token'), id: localStorage.getItem('userId')}).then(() => {
        next()
      }).catch(err => {
        next({
          path: '/login',
          query: {redirect: fullPath}
        })
      })
    }
  }
  next()
})
export default router
