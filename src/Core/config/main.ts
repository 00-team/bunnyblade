import { resolve, PUBLIC_DIR } from './path'

const DEBUG = true

const App = {
    title: 'BunnyBlade',
    width: 1280 + 300,
    height: 720,
}

const APP_ICON = resolve(PUBLIC_DIR, 'icons/favicon.ico')

export { DEBUG, App, APP_ICON }
