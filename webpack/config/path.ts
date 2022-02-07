import { resolve } from 'path'

const BASE_DIR = resolve(__dirname, '../../')
const PUBLIC_DIR = resolve(BASE_DIR, 'public')
const DIST_DIR = resolve(BASE_DIR, 'dist/app')
const APP_DIR = resolve(BASE_DIR, 'src/App')

export { BASE_DIR, DIST_DIR, APP_DIR, PUBLIC_DIR }
