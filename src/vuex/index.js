/**
 * 需要的模块数据存储
 */
import other from './modules/other'
import user from './modules/user'
import active from './modules/active'

/* eslint-disable */
const vuex = new Vuex.Store({
  modules: {
    other,
    user,
    active
  }
})
export default vuex