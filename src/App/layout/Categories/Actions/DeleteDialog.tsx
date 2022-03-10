import React, { FC, useState } from 'react'

// style
import './style/delete-dialog.scss'

// hexa
import Hexabox from '~Hexa/Hexabox'

// dialog
import { useDialog } from '~comps/dialog'

// utils
import { C } from '@00-team/utils'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'state'
import { Delete as DeleteTodo } from 'state/actions/todo'
import { Delete as DeleteCategory } from 'state/actions/category'
import { SelectedTypes } from 'state/models/Selected'

interface HoverState {
    hovering: boolean
    onTriangles: boolean
    close: boolean
}

const DefaultHState: HoverState = {
    hovering: false,
    onTriangles: false,
    close: false,
}

interface DeleteDialogProps {}

const DeleteDialog: FC<DeleteDialogProps> = () => {
    const dialog = useDialog()
    const dispatch = useDispatch()
    const SelectedMap = useSelector((s: RootState) => s.Selected)
    const [active, setActive] = useState<HoverState>(DefaultHState)

    const closeHover = (hovering: boolean) => {
        setActive(s => {
            return { ...s, close: hovering }
        })
    }

    const closeShow = () =>
        active.close || (active.hovering && !active.onTriangles)

    const DeleteSelected = () => {
        dispatch({ type: SelectedTypes.CLEAR_ALL })
        SelectedMap.todos.forEach(t => dispatch(DeleteTodo(t.id)))
        SelectedMap.categories.forEach(c => dispatch(DeleteCategory(c.id)))
        dialog.setContent(null)
    }

    return (
        <Hexabox
            width={550}
            onHover={props => setActive({ ...active, ...props })}
        >
            Are you sure you wanna delete this categories ?
            <CategoryMap />
            <button onClick={() => DeleteSelected()}>Delete</button>
            <div className='del-dia'>
                <svg
                    className={'close' + C(closeShow(), 'active')}
                    viewBox='0 0 1 1'
                    onMouseEnter={() => closeHover(true)}
                    onMouseLeave={() => closeHover(false)}
                    style={!closeShow() ? { transitionDelay: '0ms' } : {}}
                >
                    <clipPath id='close-clip'>
                        <path d='M 0 0 L .9 0 L 1 .1 L 1 1 Z' />
                    </clipPath>

                    <path
                        clipPath='url(#close-clip)'
                        className='close-bg'
                        d='M0 0 .9 0 1 .1 1 1ZM.58.14.86.42ZM.86.14.58.42Z'
                        onClick={() => dialog.setContent(null)}
                    />
                </svg>
            </div>
        </Hexabox>
    )
}

export default DeleteDialog

const CategoryMap: FC = () => {
    const SelectedMap = useSelector((s: RootState) => s.Selected)

    return (
        <div className='selected-map'>
            {SelectedMap.categories.map((c, index) => (
                <div key={index}>{c.title}</div>
            ))}

            {SelectedMap.todos.map((t, index) => (
                <div key={index}>{t.title}</div>
            ))}
        </div>
    )
}
