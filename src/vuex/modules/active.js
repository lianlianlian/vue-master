import * as types from '../types'
import {getHotActive, getHotActiveDetail, getExclusiveActive, getExclusiveActiveDetail} from '../../http/api'

const state = {
  hotActive: [],
  hotActiveDetail: {},
  exclusiveActive: [],
  exclusiveActiveDetail: {}
}
const mutations = {
  [types.GET_HOT_ACTIVE] (state, data) {
    state.hotActive = data
  },
  [types.GET_HOT_ACTIVE_DETAIL] (state, data) {
    state.hotActiveDetail = data
  },
  [types.GET_EXCLUSIVE_ACTIVE] (state, data) {
    state.exclusiveActive = data
  },
  [types.GET_EXCLUSIVE_ACTIVE_DETAIL] (state, data) {
    state.exclusiveActiveDetail = data
  }
}
const actions = {
  [types.GET_HOT_ACTIVE] ({commit}, data) {
    return new Promise((resolve, reject) => {
      getHotActive(data).then(res => {
        commit(types.GET_HOT_ACTIVE, res.infor)
        resolve(res.infor)
      }).catch(() => {})
    })
  },
  [types.GET_HOT_ACTIVE_DETAIL] ({commit}, data) {
    commit(types.GET_HOT_ACTIVE_DETAIL, {})
    return new Promise((resolve, reject) => {
      getHotActiveDetail(data).then(res => {
        commit(types.GET_HOT_ACTIVE_DETAIL, res.infor)
        resolve(res.infor)
      }).catch(() => {})
    })
  },
  [types.GET_EXCLUSIVE_ACTIVE] ({commit}, data) {
    return new Promise((resolve, reject) => {
      getExclusiveActive(data).then(res => {
        commit(types.GET_EXCLUSIVE_ACTIVE, res.infor)
        resolve(res.infor)
      }).catch(() => {})
    })
  },
  [types.GET_EXCLUSIVE_ACTIVE_DETAIL] ({commit}, data) {
    commit(types.GET_EXCLUSIVE_ACTIVE_DETAIL, {})
    return new Promise((resolve, reject) => {
      getExclusiveActiveDetail(data).then(res => {
        commit(types.GET_EXCLUSIVE_ACTIVE_DETAIL, res.infor)
        resolve(res.infor)
      }).catch(() => {})
    })
  }
}
export default {
  state,
  mutations,
  actions
}
