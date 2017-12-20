// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import PageBg from './view/bg/PageBg'
import ChickFeed from './view/chick/ChickFeed'
import ChickEgg from './view/chick/ChickEgg'
import '../static/styles/base.less'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.component('page-bg', PageBg)
Vue.component('chick-feed', ChickFeed)
Vue.component('chick-egg', ChickEgg)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
