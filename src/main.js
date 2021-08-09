import axios from 'axios'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './axios'


Vue.config.productionTip = false

new Vue({
  router,
  axios,
  render: h => h(App),
}).$mount('#app')
