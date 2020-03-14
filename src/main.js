import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import Store from './store'
import Vuelidate from "vuelidate"


window.$ = require('jquery')
window.JQuery = require('jquery')

Vue.config.productionTip = false

Vue.use(Vuelidate);

new Vue({
  router: Router,
  store: Store,
  render: h => h(App)
}).$mount('#app')
