import { Action } from '../action-types/category'
import { State, CategoryTypes } from '../models'

const Category = (state: State = [], action: Action): State => {
    switch (action.type) {
        case CategoryTypes.SET_CATEGORIES:
            return action.payload

        case CategoryTypes.UPDATE_CATEGORY:
            return [
                ...state.filter(c => c.id !== action.payload.id),
                action.payload,
            ].sort((a, b) => (a.id > b.id ? 1 : -1))

        default:
            return state
    }
}

export default Category
