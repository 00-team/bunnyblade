import { combineReducers } from 'redux'

// reducers
import { App } from './app'

// data
import Category from './category'

const reducers = combineReducers({
    App,
    Category,
})

export type RootState = ReturnType<typeof reducers>

export default reducers
