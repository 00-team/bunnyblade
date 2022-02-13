interface TodoModel {
    id: number
    name: string
    checked: boolean
}

interface CategoryModel {
    id: number
    name: string | null
    checked: boolean
    todos: TodoModel[]
}

export { TodoModel, CategoryModel }

enum CategoryTypes {
    SET_CATEGORIES = 'SET_CATEGORIES',
    SET_TODO = 'SET_TODO',
}

export { CategoryTypes }
