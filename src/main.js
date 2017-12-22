// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import SubTitle from './components/SubTitle'
import FoodImage from './components/FoodImage'
import PageBg from './view/bg/PageBg'
import ChickFeed from './view/chick/ChickFeed'
import ChickEgg from './view/chick/ChickEgg'
import ActionSheet from './ActionSheet'
import VueEvents from 'vue-events'
import {ActionSheetPlugin} from './utils/plugins'
import '../static/styles/base.less'

Vue.config.productionTip = false

Vue.use(VueEvents)

/* eslint-disable no-new */
Vue.component('sub-title', SubTitle)

Vue.component('food-image', FoodImage)

Vue.component('page-bg', PageBg)

Vue.component('chick-feed', ChickFeed)

Vue.component('chick-egg', ChickEgg)

Vue.component('action-sheet', ActionSheet)
Vue.use(ActionSheetPlugin)

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
