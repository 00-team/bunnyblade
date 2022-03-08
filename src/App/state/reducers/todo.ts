import { DefaultTState, TodoState, TodoTypes } from '../models/Todo'
import { Action } from '../action-types/todo'

const Todo = (state = DefaultTState, action: Action): TodoState => {
    switch (action.type) {
        case TodoTypes.SET_TODO:
            return { ...state, todo: action.payload }

        case TodoTypes.SET_TODOS:
            return { ...state, todos: action.payload }

        case TodoTypes.SET_PICTURES:
            return { ...state, pictures: action.payload }

        default:
            return state
    }
}

export { Todo }
