import { resolve, join } from 'path'
import { homedir } from 'os'

const APP_DIR = resolve(__dirname, '../../app')
const PUBLIC_DIR = resolve(__dirname, '../../../public')

export { APP_DIR, PUBLIC_DIR, resolve }

const EXTS = '/AppData/Local/Google/Chrome/User Data/Default/Extensions/'
const REACT_ID = 'fmkadmapgofadopljbjfkapdkoienihi'
const REACT_EXT = join(homedir(), EXTS, REACT_ID, '4.24.0_0')

const DEV_THEME = resolve('P:/00 Team/Fun/00 Team DevTools Theme')

export { REACT_EXT, DEV_THEME }
