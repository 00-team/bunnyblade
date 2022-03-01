import { Dispatch } from 'redux'
// import { RootState } from '..'

import { CategoryTypes } from '../models/Category'

// config
import { SIGNALS } from './config'
type D = (d: Dispatch<any>) => Promise<void>

type GA = () => D
const GetAll: GA = () => async dispatch => {
    try {
        const categories = await database.Category({ signal: SIGNALS.ALL })
        if (!categories) return
        dispatch({ type: CategoryTypes.SET_CATEGORIES, payload: categories })
    } catch (error) {}
}

type UC = (props: { id: number; title: string }) => D
const Update: UC = props => async dispatch => {
    try {
        await database.Category({
            signal: SIGNALS.UPDATE,
            ...props,
        })
        dispatch(GetAll())
    } catch (error) {}
}

type AC = (title?: string) => D
const Add: AC = title => async dispatch => {
    try {
        await database.Category({
            signal: SIGNALS.ADD,
            title: title || 'New Category',
        })
        dispatch(GetAll())
    } catch (error) {}
}

type DC = (cid: number) => D
const Delete: DC = id => async dispatch => {
    await database.Category({
        signal: SIGNALS.DELETE,
        id: id,
    })
    dispatch(GetAll())
}

export { GetAll, Update, Add, Delete }

// type CF = (
//     cid?: number
// ) => (d: Dispatch<ActiveAction>, g: () => RootState) => Promise<void>
// const ChangeFocus: CF = cid => async (dispatch, getState) => {
//     const current_id = getState().ActiveCategory
//     if (cid === current_id) return
//     dispatch({ type: CategoryTypes.CHANGE_FOCUS, payload: cid || -1 })
// }

// export { ChangeFocus }
