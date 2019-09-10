import './ripple.scss'
import { VNodeDirective, VNode } from 'vue'

function transform(el: HTMLElement, value: string) {
  el.style.transform = value
  el.style.webkitTransform = value
}

function opacity(el: HTMLElement, value: number) {
  el.style.opacity = value.toString()
}

function isTouchEvent(e: Event): e is TouchEvent {
  return e.constructor.name === 'TouchEvent'
}

function isRippleEnabled(value: any): value is true {
  return typeof value === 'undefined' || !!value
}

export const Ripple = {
  bind: (el: HTMLElement, binding: VNodeDirective, node: VNode) => {
    console.log(el, binding, node)
  },
  unbind: (el: HTMLElement) => {},
  update: (el: HTMLElement, binding: VNodeDirective) => {}
}

export default Ripple
