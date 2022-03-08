import { CategoryTypes, State } from '../models/Category'

export interface Action {
    type: CategoryTypes.SET_CATEGORIES
    payload: State
}
