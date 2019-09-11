interface Window {
  Message: typeof Message
}

interface HTMLElement {
  _ripple?: {
    enabled?: boolean
    centered?: boolean
    class?: string
    circle?: boolean
    touched?: boolean
    isTouch?: boolean
  }
}
