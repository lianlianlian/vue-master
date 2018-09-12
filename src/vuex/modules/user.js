import * as types from '.././types'
import {login, getUser} from '../../http/api'

const state = {
  token: localStorage.getItem('token') || '',   // 用户登录态标识
  userId: localStorage.getItem('userId') || '', // 用户登录id
  isCheck: sessionStorage.getItem('isCheck') || false, // 检查登录态
  userInfor: {}                                 // 用户信息
}

const mutations = {
  [types.LOGIN] (state, data) {
    state.token = data.token
    state.userId = data.id
    localStorage.setItem('token', data.token)
    localStorage.setItem('userId', data.id)
  },
  [types.GET_USER] (state, data) {
    state.userInfor = data
  },
  [types.IS_CHECK] (state) {
    state.isCheck = true
    sessionStorage.setItem('isCheck', true)
  },
  [types.LOGINOUT] (state) {
    state.token = ''
    state.userId = ''
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
  }
}

const actions = {
  [types.LOGIN] ({commit}, data) {
    return new Promise((resolve, reject) => {
      login(data).then(res => {
        commit(types.LOGIN, res.infor[0])
        resolve(res.infor[0])
      }).catch(() => {})
    })
  },
  [types.GET_USER] ({commit}, data) {
    return new Promise((resolve, reject) => {
      getUser(data).then(res => {
        commit(types.GET_USER, res)
        commit(types.IS_CHECK)
        resolve(res)
      }).catch(() => {})
    })
  }
}

export default {
  state,
  mutations,
  actions
}
