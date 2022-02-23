import { resolve } from 'path'

const APP_DIR = resolve(__dirname, '../../app')
const PUBLIC_DIR = resolve(__dirname, '../../../public')
const DATABASE = resolve(__dirname, '../database/default.db')

export { APP_DIR, PUBLIC_DIR, resolve, DATABASE }
