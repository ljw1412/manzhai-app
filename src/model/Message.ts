export default class Message {
  action: string
  data: any
  constructor(action: string, data: any) {
    this.action = action
    this.data = data
  }
}
