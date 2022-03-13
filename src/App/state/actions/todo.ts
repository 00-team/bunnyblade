import { Dispatch } from 'redux'
import { TodoTypes } from '../models/Todo'

// config
import { SIGNALS } from './config'

type D = (d: Dispatch<any>) => Promise<void>

type GA = () => D
const GetAll: GA = () => async dispatch => {
    try {
        const todos = await database.Todo({ signal: SIGNALS.ALL })

        if (!todos) return

        dispatch({ type: TodoTypes.SET_TODOS, payload: todos })
    } catch (error) {}
}

interface UpdateProps {
    id: number
    title?: string
    category?: number
    checked?: boolean
    description?: string
}

type UT = (props: UpdateProps) => D
const Update: UT = props => async dispatch => {
    try {
        await database.Todo({
            signal: SIGNALS.UPDATE,
            ...props,
        })
        dispatch(GetAll())
    } catch (error) {}
}

interface AddProps {
    title?: string
    category?: number
}

type AT = (props: AddProps) => D
const Add: AT = props => async dispatch => {
    const { title = 'New Todo' } = props
    try {
        await database.Todo({
            signal: SIGNALS.ADD,
            ...props,
            title: title,
        })
        dispatch(GetAll())
    } catch (error) {}
}

type DT = (id: number) => D
const Delete: DT = id => async dispatch => {
    await database.Todo({
        signal: SIGNALS.DELETE,
        id: id,
    })
    dispatch(GetAll())
}

export { GetAll, Update, Add, Delete }
