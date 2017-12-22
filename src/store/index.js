import Vue from 'vue'
import Vuex from 'vuex'
import foodsState from './state/foodsState'

Vue.use(Vuex)

const state = {
  count: 6,
  // 食物列表
  foods: foodsState
}

const mutations = {
  add (state, n) {
    state.count += n
  },
  reduce (state) {
    state.count--
  }
}

const getters = {
  count: function (state) {
    state.count += 100
    return state.count
  }
}

const actions = {
  addAction (context) {
    context.commit('add', 10)
    setTimeout(() => {
      context.commit('reduce')
    }, 3000)
    console.log('我比reduce提前执行')
  },
  reduceAction ({commit}) {
    commit('reduce')
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
