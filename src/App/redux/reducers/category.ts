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

import { SelectAction } from '../action-types/category'
import { DefaultSState, SelectCategoryModel } from '../models/Category'

const SelectCategory = (
    state = DefaultSState,
    action: SelectAction
): SelectCategoryModel => {
    const toggle = (id: number) => {
        const category = state.categories.find(c => c === id)
        if (category) return state.categories.filter(c => c !== id)

        return [...state.categories, id]
    }

    switch (action.type) {
        case CategoryTypes.TOGGLE_SELECT:
            return {
                active: !state.active,
                categories: [],
            }

        case CategoryTypes.TOGGLE_SELECTED:
            return {
                ...state,
                categories: toggle(action.payload),
            }

        default:
            return state
    }
}

export { SelectCategory, Category }
