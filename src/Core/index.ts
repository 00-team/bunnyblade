import { app, BrowserWindow } from 'electron'

import { resolve } from 'path'

import electronReload from 'electron-reload'

const APP_DIR = resolve(__dirname, '../app')
const PUBLIC_DIR = resolve(__dirname, '../../public')
electronReload(APP_DIR, {})

const CreateWindow = (): BrowserWindow => {
    const win = new BrowserWindow({
        title: 'pog',
        backgroundColor: '#000',
        darkTheme: true,
        width: 1280 + 300,
        height: 720,
        resizable: false,
        autoHideMenuBar: true,
        icon: resolve(PUBLIC_DIR, 'icons/favicon.ico'),
        frame: false,
    })

    win.loadFile(resolve(APP_DIR, 'index.html'))

    return win
}

app.whenReady().then(() => {
    CreateWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) CreateWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

// app.commandLine.appendSwitch('ignore-certificate-errors')
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true'
