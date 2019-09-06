import { VueConstructor } from 'vue'
import SvgIcon from '@/components/SvgIcon.vue'
import Message from '@/model/Message'

export default function(Vue: VueConstructor) {
  bindToWindow()
  registerMZIcon(Vue)
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

window.Message = Message
/**
 * 绑定到 window
 */
function bindToWindow() {}
