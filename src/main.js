import Vue from 'vue'
import App from './App.vue'

import {Vuelidate} from "vuelidate";

Vue.use(Vuelidate)

import router from './routes'
import store from './store'

import './assets/style/main.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) },
}).$mount('#app')
