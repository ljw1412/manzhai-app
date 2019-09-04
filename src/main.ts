import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SvgIcon from '@/components/SvgIcon.vue'

const svgs = require.context('@/icons', false, /\.svg$/)
const requireAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().map(requireContext)
requireAll(svgs)

Vue.config.productionTip = false

Vue.component('mz-icon', SvgIcon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
