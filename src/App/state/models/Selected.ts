import { TodoModel } from './Todo'
import { CategoryModel } from './Category'

interface SelectedState {
    active: boolean
    categories: CategoryModel[]
    todos: TodoModel[]
}

const DefaultSState: SelectedState = {
    active: false,
    categories: [],
    todos: [],
}

enum SelectedTypes {
    TOGGLE = 'TOGGLE_SELECTED_ACTIVE',
    TOGGLE_CATEGORY = 'TOGGLE_SELECTED_CATEGORY',
    TOGGLE_TODO = 'TOGGLE_SELECTED_TODO',
}

export { SelectedState, DefaultSState, SelectedTypes }
export { CategoryModel, TodoModel }
