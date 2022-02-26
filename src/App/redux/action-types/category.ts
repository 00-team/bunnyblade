import { CategoryTypes, State, CategoryModel } from '../models/Category'

interface SET_CATEGORIES {
    type: CategoryTypes.SET_CATEGORIES
    payload: State
}

interface UPDATE_CATEGORY {
    type: CategoryTypes.UPDATE_CATEGORY
    payload: CategoryModel
}

export type Action = SET_CATEGORIES | UPDATE_CATEGORY
