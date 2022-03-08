import { TodoTypes, TodoModel, PictureModel } from '../models/Todo'

interface SET_TODO {
    type: TodoTypes.SET_TODO
    payload: TodoModel | null
}

interface SET_TODOS {
    type: TodoTypes.SET_TODOS
    payload: TodoModel[]
}

interface SET_PICTURES {
    type: TodoTypes.SET_PICTURES
    payload: PictureModel[]
}

export type Action = SET_TODO | SET_TODOS | SET_PICTURES
