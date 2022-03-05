import { CategoryTypes, State } from '../models/Category'

export interface Action {
    type: CategoryTypes.SET_CATEGORIES
    payload: State
}

interface TOGGLE_SELECT {
    type: CategoryTypes.TOGGLE_SELECT
}

interface TOGGLE_SELECTED {
    type: CategoryTypes.TOGGLE_SELECTED
    payload: number
}

export type SelectAction = TOGGLE_SELECT | TOGGLE_SELECTED
