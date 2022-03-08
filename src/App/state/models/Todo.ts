// models
interface TodoModel {
    id: number
    title: string
    category: number | null // category id or null for no category
    checked: boolean
    date: number // timestamp
    description: string | null
}

interface PictureModel {
    id: number
    todo: number // todo id
    date: number // timestamp
    src: string // path to the binary file
    caption: string | null // description for this picture
}

export { TodoModel, PictureModel }

// state
interface TodoState {
    todos: TodoModel[]
    todo: TodoModel | null
    pictures: PictureModel[]
}

const DefaultTState: TodoState = {
    todos: [],
    todo: null,
    pictures: [],
}

export { TodoState, DefaultTState }

// types
enum TodoTypes {
    SET_TODOS = 'SET_TODOS',
    SET_TODO = 'SET_TODO',
    SET_PICTURES = 'SET_PICTURES',
}

export { TodoTypes }
