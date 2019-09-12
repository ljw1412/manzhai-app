import './ripple.scss'
import { VNodeDirective, VNode } from 'vue'

function transform(el: HTMLElement, value: string) {
  el.style.transform = value
  el.style.webkitTransform = value
}

function opacity(el: HTMLElement, value: number) {
  el.style.opacity = value.toString()
}

function xy(el: HTMLElement, x: string, y: string) {
  el.style.left = x
  el.style.top = y
}

function isRippleEnabled(value: any): value is true {
  return typeof value === 'undefined' || !!value
}

function calculate(
  e: MouseEvent,
  el: HTMLElement,
  options: RippleOptions = {}
) {
  const { offsetX, offsetY } = e
  const { width, height } = el.getBoundingClientRect()

  let scale = 0.15
  const radius = options.center
    ? width / 2
    : Math.sqrt(
        (Math.abs(width / 2 - offsetX) + width / 2) ** 2 +
          (Math.abs(height / 2 - offsetY) + height / 2) ** 2
      )

  const centerX = options.center ? '0' : `${offsetX - radius}px`
  const centerY = options.center ? '0' : `${offsetY - radius}px`

  return { radius, scale, centerX, centerY }
}

const ripple = {
  create(e: MouseEvent, el: HTMLElement, options: RippleOptions) {
    if (!el._ripple || !el._ripple.enabled) return

    const rippleWrapper = document.createElement('span')
    const ripple = document.createElement('span')
    rippleWrapper.className =
      'mz-ripple-wrapper' + (options.class ? options.class : '')
    rippleWrapper.appendChild(ripple)

    const { radius, scale, centerX, centerY } = calculate(e, el, options)
    ripple.className = 'mz-ripple'
    ripple.style.width = ripple.style.height = `${radius * 2}px`

    safeElementPosition(el)
    el.appendChild(rippleWrapper)

    ripple.classList.add('mz-ripple--enter')
    transform(ripple, `scale3d(${scale},${scale},${scale})`)
    xy(ripple, centerX, centerY)
    ripple.dataset.activated = String(performance.now())

    setTimeout(() => {
      ripple.classList.remove('mz-ripple--enter')
      ripple.classList.add('mz-ripple--in')
      transform(ripple, `scale3d(1,1,1)`)
    }, 0)
  },
  remove(el: HTMLElement | null) {
    if (!el || !el._ripple || !el._ripple.enabled) return

    const ripples = el.querySelectorAll('.mz-ripple')

    if (!ripples.length) return

    const ripple = ripples[ripples.length - 1] as HTMLElement

    if (ripple.dataset.isHiding) return
    ripple.dataset.isHiding = 'true'

    const diff = performance.now() - Number(ripple.dataset.activated)
    const delay = Math.max(250 - diff, 0)

    setTimeout(() => {
      ripple.classList.remove('mz-ripple--in')
      ripple.classList.add('mz-ripple--out')
      el.blur()
      setTimeout(() => {
        ripple.parentNode && el.removeChild(ripple.parentNode)
      }, 300)
    }, delay)
  }
}

function showRipple(e: MouseEvent) {
  const options: RippleOptions = {}
  const element = e.currentTarget as HTMLElement
  if (!element || !element._ripple) return

  options.center = element._ripple.centered
  if (element._ripple.class) options.class = element._ripple.class
  ripple.create(e, element, options)
}

function hideRipple(e: Event) {
  const element = e.currentTarget as HTMLElement
  if (!element) return
  ripple.remove(element)
}

function safeElementPosition(el: HTMLElement) {
  const computedStyle = window.getComputedStyle(el)
  if (computedStyle && computedStyle.position === 'static') {
    el.style.position = 'relative'
  }
}

function removeListeners(el: HTMLElement) {
  el.removeEventListener('mousedown', showRipple)
  el.removeEventListener('mouseup', hideRipple)
  el.removeEventListener('mouseleave', hideRipple)
  el.removeEventListener('dragstart', hideRipple)
}

function updateRipple(
  el: HTMLElement,
  binding: VNodeDirective,
  isEnabled: boolean
) {
  const enabled = isRippleEnabled(binding.value)
  if (!enabled) {
    ripple.remove(el)
  }
  el._ripple = el._ripple || {}
  el._ripple.enabled = enabled
  const value = binding.value || {}
  if (value.center) {
    el._ripple.centered = true
  }
  if (value.class) {
    el._ripple.class = value.class
  }
  if (value.circle) {
    el._ripple.circle = value.circle
  }

  if (enabled && !isEnabled) {
    console.log('addEventListener', el)

    el.addEventListener('mousedown', showRipple)
    el.addEventListener('mouseup', hideRipple)
    el.addEventListener('mouseleave', hideRipple)
    el.addEventListener('dragstart', hideRipple, { passive: true })
  } else if (enabled && isEnabled) {
    console.log('removeListeners', el)

    removeListeners(el)
  }
}

export const Ripple = {
  bind: (el: HTMLElement, binding: VNodeDirective, node: VNode) => {
    updateRipple(el, binding, false)
  },
  unbind: (el: HTMLElement) => {
    delete el._ripple
    removeListeners(el)
  },
  update: (el: HTMLElement, binding: VNodeDirective) => {
    console.log(el, binding, binding.value === binding.oldValue)

    if (binding.value === binding.oldValue) return
    updateRipple(el, binding, isRippleEnabled(binding.oldValue))
  }
}

export default Ripple
