import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import inject from './inject'

Vue.config.productionTip = false

inject(Vue, router, store)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
