import { combineReducers } from 'redux'

// reducers
import { App } from './app'

const reducers = combineReducers({
    App,
})

export type RootState = ReturnType<typeof reducers>

export default reducers
