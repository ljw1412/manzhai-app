import { Message } from './model'

declare global {
  interface Window {
    Message?: typeof Message
  }
}
