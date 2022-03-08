import { Action } from '../action-types/category'
import { State, CategoryTypes } from '../models/Category'

const Category = (state: State = [], action: Action): State => {
    switch (action.type) {
        case CategoryTypes.SET_CATEGORIES:
            return action.payload

        default:
            return state
    }
}

export { Category }
