import '@/styles/global/index.scss'
import { VueConstructor } from 'vue'
import VueRouter from 'vue-router'
import { Store } from 'vuex'
import * as directives from '@/directives'
import mzui from '@/mzui/index'
import Message from '@/model/Message'

export default function(
  Vue: VueConstructor,
  router: VueRouter,
  store: Store<any>
) {
  bindToVue(Vue)
  bindStoreFnToVue(Vue, store)
}

/**
 * 绑定到 window
 */
window.Message = Message

/**
 * 注册SVG图标库和图标组件
 * @param Vue
 */
function registerMZIcon(Vue: VueConstructor) {
  const svgs = require.context('@/icons', false, /\.svg$/)
  const requireAll = (requireContext: __WebpackModuleApi.RequireContext) =>
    requireContext.keys().map(requireContext)
  requireAll(svgs)
}

/**
 * 绑定自定义指令
 * @param Vue
 */
function bindDirectives(Vue: VueConstructor) {
  Object.keys(directives).forEach(key => {
    Vue.directive(key.toLowerCase(), (directives as Record<string, any>)[key])
  })
}

/**
 * 添加自定义变量或方法到 Vue 原型
 * @param Vue
 */
function bindToVue(Vue: VueConstructor) {
  bindDirectives(Vue)
  registerMZIcon(Vue)
  Vue.use(mzui)
}

/**
 * 添加 store 方法到 Vue 原型
 * @param Vue
 * @param store
 */
function bindStoreFnToVue(Vue: VueConstructor, store: Store<any>) {
  Vue.prototype.$setTitle = (title: string) => {
    store.commit('layout/setTitle', title)
  }
}
