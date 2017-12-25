import Vue from 'vue'
import Vuex from 'vuex'
import foodsState from './state/foodsState'
// import foodsMutatuins from './mutations/foodsMutations'

Vue.use(Vuex)

const state = {
  count: 6,
  // 食物列表
  foods: foodsState,
  user: {
    name: 'view',
    money: 1000
  }
}

const mutations = {
  // 添加营养值
  changeNutrition (state, change = 0) {
    state.user.money += change
  },
  // 扣除商品数
  costCount (staet, count = 0) {
    count--
  },
  add (state) {
    this.state.foods.count --
  },
  reduce (state) {
    this.state.foods.count--
  },
  setfeeding (state, feeding) {
    state.foods.forEach(obj => {
      if (obj.id === feeding.id) {
        // 加营养
        // console.log(feeding.count)
        this.commit('changeNutrition', feeding.nutrition)
        feeding.count--
      }
    })
  }
  // foods: foodsMutatuins
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
