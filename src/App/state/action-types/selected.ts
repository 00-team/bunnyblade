import { SelectedTypes, TodoModel, CategoryModel } from '../models/Selected'

interface TOGGLE {
    type: SelectedTypes.TOGGLE
}

interface TOGGLE_CATEGORY {
    type: SelectedTypes.TOGGLE_CATEGORY
    payload: CategoryModel
}

interface TOGGLE_TODO {
    type: SelectedTypes.TOGGLE_TODO
    payload: TodoModel
}

export type Action = TOGGLE | TOGGLE_CATEGORY | TOGGLE_TODO
