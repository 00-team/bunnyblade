import { Action } from '../action-types/app'
import { App, AppTypes, DefaultAppState } from '../models/App'

const App = (state: App = DefaultAppState, action: Action): App => {
    switch (action.type) {
        case AppTypes.SET_TITLE:
            return {
                ...state,
                title: action.payload,
            }
        case AppTypes.SET_THEME:
            return {
                ...state,
                theme: action.payload,
            }

        default:
            return state
    }
}

export { App }
