import { app, session } from 'electron'
import { BrowserWindow, Menu, nativeImage, Tray } from 'electron'
import { ipcMain } from 'electron'

// file system
import { existsSync } from 'fs'

// paths
import { resolve } from './config/path'
import { DEV_THEME, REACT_EXT } from './config/path'

// database
import { InitDB } from './Data'

// config
import { DEBUG, App, APP_ICON } from './config/main'

// process
process.traceProcessWarnings = true

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
    win.loadURL('http://localhost:8000')

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
    if (DEBUG) {
        if (existsSync(DEV_THEME))
            await session.defaultSession.loadExtension(DEV_THEME)

        if (existsSync(REACT_EXT))
            await session.defaultSession.loadExtension(REACT_EXT)
    }
    await InitDB()

    const win = CreateWindow()
    CreateTray(win)

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) CreateWindow()
    })
})
