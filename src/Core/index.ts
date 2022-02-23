import { app, BrowserWindow, Menu, nativeImage, Tray } from 'electron'
import { ipcMain } from 'electron'
import electronReload from 'electron-reload'

// paths
import { resolve, APP_DIR } from './config/path'

// database
import { InitDB } from './database'

// config
import { DEBUG, App, APP_ICON } from './config/main'

// debug setup
if (DEBUG) electronReload(APP_DIR, {})

// global variables
var TaryMenu: Tray | null = null
var isAppQuiting = false

const CreateWindow = (): BrowserWindow => {
    const win = new BrowserWindow({
        title: App.title,
        backgroundColor: '#040404',
        darkTheme: true,

        width: App.width,
        height: App.height,

        // alwaysOnTop:true,

        show: false,
        maximizable: false,
        resizable: false,
        fullscreenable: false,
        frame: false,

        icon: APP_ICON,

        webPreferences: {
            devTools: DEBUG,
            preload: resolve(__dirname, 'preload.js'),
        },
    })

    win.loadFile(resolve(APP_DIR, 'index.html'))

    win.once('ready-to-show', () => {
        win.show()
    })

    win.on('close', e => {
        if (!isAppQuiting) {
            e.preventDefault()
            win.minimize()
            win.hide()
        }
    })

    ipcMain.on('window:action', (_, type) => {
        switch (type) {
            case 'close':
                win.close()
                break
            case 'minimize':
                win.minimize()
                break
            default:
                break
        }
    })

    return win
}

const CreateTray = (win: BrowserWindow) => {
    TaryMenu = new Tray(APP_ICON)

    const contextMenu = Menu.buildFromTemplate([
        {
            label: App.title,
            enabled: false,
            icon: nativeImage.createFromPath(APP_ICON).resize({ width: 16 }),
        },
        {
            type: 'separator',
        },
        {
            label: 'Minimize',
            click: () => {
                win.minimize()
            },
        },
        {
            label: 'Close',
            click: () => {
                win.minimize()
                win.hide()
            },
        },
        {
            type: 'separator',
        },
        {
            label: 'Quit ' + App.title,
            type: 'normal',
            click: () => {
                isAppQuiting = true
                win.close()
                app.quit()
            },
        },
    ])

    TaryMenu.setToolTip(App.title)

    TaryMenu.setContextMenu(contextMenu)
    TaryMenu.addListener('click', () => {
        win.show()
    })
}

app.whenReady().then(async () => {
    await InitDB()

    const win = CreateWindow()
    CreateTray(win)

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) CreateWindow()
    })
})

// app.commandLine.appendSwitch('ignore-certificate-errors')
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true'
