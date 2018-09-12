import * as types from '.././types'

const state = {
  loading: false
}
const mutations = {
  [types.LOADING] (state, data) {
    state.loading = data
  }
}
const actions = {
  [types.LOADING] ({commit}, data) {
    commit(types.LOADING, data)
  }
}

export default {
  state,
  mutations,
  actions
}
