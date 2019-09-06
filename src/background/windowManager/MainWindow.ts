import { BrowserWindow, ipcMain } from 'electron'

export default class MainWin {
  window: BrowserWindow

  constructor(mainWin: BrowserWindow) {
    this.window = mainWin
    this.addListener()
  }

  addListener() {
    ipcMain.on('main', (e, { action, data }, arg) => {
      // @ts-ignore
      if (this[action] && this[action] instanceof Function) {
        // @ts-ignore
        this[action](data)
      }
    })
  }

  frameController(data: string) {
    switch (data) {
      case 'minimize':
        this.window.minimize()
        break
      case 'maximize':
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
