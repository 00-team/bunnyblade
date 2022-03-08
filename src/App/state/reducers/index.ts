import { combineReducers } from 'redux'

// reducers
import { App } from './app'

// data
import { Category } from './category'
import { Todo } from './todo'
import { Selected } from './selected'

const reducers = combineReducers({
    App,
    Category,
    Selected,
    Todo,
})

export type RootState = ReturnType<typeof reducers>

export default reducers
