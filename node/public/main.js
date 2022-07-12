
const {app, BrowserWindow} = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')
//const BB = require('nospeakerpop')
require("@electron/remote/main").initialize()

app.disableHardwareAcceleration()

function createWindow() {
    //run bb
    //const speaker = new BB(false, "../../nospeakerpop/assets/sis.mp3")
    
    const win = new BrowserWindow({
      width:1080,
      height: 1920,
      /* Uncomment this piece of code when this program is released to the RPI screen; this forces the progam to enter fullscreen mode.
      fullscreen: true, 
      */
      webPreferences: {
        nodeIntegration: true,
        enableRemoteModule:true,
        contextIsolation: false,
        webSecurity: false,

      },
    })

    win.loadURL(isDev
                    ? 'http://localhost:3000'
                    : `file://${path.join(__dirname, '../build/index.html')}`)
}

app.on('ready', createWindow)

app.on('window-all-closed', function() {
    if(process.platform !== 'darwin'){
      app.quit()
    }
})

app.on('activate', function () {
    if(BrowserWindow.getAllWindows().length === 0) createWindow()
})