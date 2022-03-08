import { SelectedState, DefaultSState, SelectedTypes } from '../models/Selected'
import { Action } from '../action-types/selected'

type E = (L: { id: number }[], id: number) => boolean
const exists: E = (list, id) => !!list.find(item => item.id === id)

const Selected = (state = DefaultSState, action: Action): SelectedState => {
    switch (action.type) {
        case SelectedTypes.TOGGLE:
            return { ...state, active: !state.active }

        case SelectedTypes.TOGGLE_CATEGORY:
            if (exists(state.categories, action.payload.id))
                return {
                    ...state,
                    categories: state.categories.filter(
                        category => category.id !== action.payload.id
                    ),
                }

            return {
                ...state,
                categories: [...state.categories, action.payload],
            }

        case SelectedTypes.TOGGLE_TODO:
            if (exists(state.todos, action.payload.id))
                return {
                    ...state,
                    todos: state.todos.filter(
                        todo => todo.id !== action.payload.id
                    ),
                }

            return {
                ...state,
                todos: [...state.todos, action.payload],
            }

        default:
            return state
    }
}

export { Selected }
