interface CategoryModel {
    id: number
    title: string
}

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

export { CategoryModel, TodoModel, PictureModel }

enum SIGNALS {
    ADD = 'ADD',
    GET = 'GET',
    UPDATE = 'UPDATE',
    DELETE = 'DELETE',
    ALL = 'ALL',
}

interface SIGNAL_GD {
    signal: SIGNALS.GET | SIGNALS.DELETE
    id: number
}

interface SIGNAL_ALL {
    signal: SIGNALS.ALL
}

type BASE_PROPS = SIGNAL_GD | SIGNAL_ALL

type ReturnType<T> = T | T[] | null

export { SIGNALS, SIGNAL_GD, SIGNAL_ALL, BASE_PROPS, ReturnType }
