import { createStore } from "vuex"

export default createStore({
  state: {
    num: 888,
    token: "",
    username: "",
  },
  mutations: {
    setToken(state, data) {
      state.token = data
    },
    setUsername(state, data) {
      state.username = data
    },
  },
  actions: {
    SetToken({ commit }, data) {
      commit("setToken", data)
    },
    SetUsername({ commit }, data) {
      commit("setUsername", data)
    },
  },
  modules: {},
})
