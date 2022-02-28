import { AppTypes } from '../models/App'

interface SET_TITLE {
    type: AppTypes.SET_TITLE
    payload: string
}

interface SET_THEME {
    type: AppTypes.SET_THEME
    payload: string
}

export type Action = SET_TITLE | SET_THEME
