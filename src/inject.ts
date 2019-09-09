import { VueConstructor } from 'vue'
import VueRouter from 'vue-router'
import { Store } from 'vuex'
import '@/theme/global/index.scss'
import SvgIcon from '@/components/SvgIcon.vue'
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
 * 注册SVG图标库和图标组件
 * @param Vue
 */
function registerMZIcon(Vue: VueConstructor) {
  const svgs = require.context('@/icons', false, /\.svg$/)
  const requireAll = (requireContext: __WebpackModuleApi.RequireContext) =>
    requireContext.keys().map(requireContext)
  requireAll(svgs)
  Vue.component('mz-icon', SvgIcon)
}

/**
 * 绑定到 window
 */
window.Message = Message

/**
 * 添加自定义变量或方法到 Vue 原型
 * @param Vue
 */
function bindToVue(Vue: VueConstructor) {
  registerMZIcon(Vue)
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
