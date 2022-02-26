import { Dispatch } from 'redux'
import { Action } from '../action-types/category'
import { CategoryTypes } from '../models'

// config
import { SIGNALS } from './config'
type D = (d: Dispatch<Action>) => Promise<void>

type GA = () => D
const GetAll: GA = () => async dispatch => {
    try {
        const categories = await database.Category({ signal: SIGNALS.ALL })
        dispatch({ type: CategoryTypes.SET_CATEGORIES, payload: categories })
    } catch (error) {}
}

type UG = (props: { id: number; title: string }) => D
const Update: UG = props => async dispatch => {
    try {
        const category = await database.Category({
            signal: SIGNALS.UPDATE,
            ...props,
        })
        dispatch({ type: CategoryTypes.UPDATE_CATEGORY, payload: category })
    } catch (error) {}
}

export { GetAll, Update }
