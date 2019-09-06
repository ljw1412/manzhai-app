import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import inject from './inject'

Vue.config.productionTip = false

inject(Vue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
