interface Todo {
    id: number
    name: string
    checked: boolean
}

interface CategoryType {
    id: number
    name: string | null
    checked: boolean
    todos: Todo[]
}

export { Todo, CategoryType }
