import { BrowserWindow, ipcMain, IpcMainEvent } from 'electron'
import Message from '../../model/Message'

export default class MainWin {
  window: BrowserWindow

  constructor(mainWin: BrowserWindow) {
    this.window = mainWin
    this.addWindowListener()
    this.addIpcListener()
  }

  addWindowListener() {
    this.window.on('maximize', (e: IpcMainEvent) => {
      e.sender.send('main-relpy', new Message('maximize', true))
    })
    this.window.on('unmaximize', (e: IpcMainEvent) => {
      e.sender.send('main-relpy', new Message('maximize', false))
    })
  }

  addIpcListener() {
    ipcMain.on('main', (e, { action, data }, arg) => {
      // @ts-ignore
      if (this[action] && this[action] instanceof Function) {
        // @ts-ignore
        this[action](e, data)
      }
    })
  }

  frameController(e: IpcMainEvent, data: string) {
    switch (data) {
      case 'minimize':
        this.window.minimize()
        break
      case 'maximize':
        if (this.window.isMaximized()) {
          this.window.unmaximize()
        } else {
          this.window.maximize()
        }
        break
      case 'fullScreen':
        this.window.setFullScreen(!this.window.isFullScreen())
        break
      case 'close':
        this.window.close()
        break
    }
  }

  removeAllListener() {
    ipcMain.removeAllListeners('main')
  }
}
