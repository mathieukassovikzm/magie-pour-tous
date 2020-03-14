import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  sitePusher: false
}
const getters = {
  sitePusherState: state => state.sitePusher
}
const mutations = {
  TOGGLE_SITEPUSHER: (state) => {
    state.sitePusher === true ? state.sitePusher = false : state.sitePusher = true
  }
}
const actions = {
  toggleSitePusher: (store) => {
    store.commit('TOGGLE_SITEPUSHER')
  }
}

export default new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
})
