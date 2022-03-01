import { combineReducers } from 'redux'

// reducers
import { App } from './app'

// data
import { Category, SelectCategory } from './category'

const reducers = combineReducers({
    App,
    Category,
    SelectCategory,
})

export type RootState = ReturnType<typeof reducers>

export default reducers
