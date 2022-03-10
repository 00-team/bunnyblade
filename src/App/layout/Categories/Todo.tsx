import React, { CSSProperties, FC, useEffect, useState } from 'react'

// style
import './style/todo.scss'

// redux state
import { TodoModel } from 'state/models/Todo'
import { SelectedTypes } from 'state/models/Selected'
import { useDispatch, useSelector } from 'react-redux'
import { Update } from 'state/actions/todo'
import { RootState } from 'state'

// hexa
import Hexacheck from '~Hexa/Hexacheck'
import Hexalect from '~Hexa/Hexalect'

// utils
import { C } from '@00-team/utils'

const TodosWrapper: FC<{ todos: TodoModel[] }> = ({ todos }) => {
    return (
        <div className='todos-wrapper'>
            <ul>
                {todos.map((todo, index) => (
                    <TodoItem {...todo} key={index} index={0} />
                ))}
            </ul>
        </div>
    )
}

interface ToderState {
    hovering: boolean
    style: CSSProperties
}

interface TodoItemProps extends TodoModel {
    index: number
}

const TodoItem: FC<TodoItemProps> = props => {
    const { id, title, checked, index } = props
    const dispatch = useDispatch()
    const SelectedState = useSelector((s: RootState) => s.Selected)
    const [Toder, setToder] = useState<ToderState>({
        hovering: false,
        style: {},
    })
    const [Checked, setChecked] = useState(checked)
    const [Selected, setSelected] = useState(false)

    useEffect(() => {
        if (!SelectedState.active) {
            setTimeout(() => {
                setSelected(false)
            }, index * 100)
            return
        }

        if (SelectedState.todos.find(t => t.id === id)) setSelected(true)
        else setSelected(false)
    }, [SelectedState])

    useEffect(() => {
        dispatch(Update({ id: id, checked: Checked }))
    }, [Checked])

    const Reset = () =>
        setTimeout(
            () =>
                setToder(s => {
                    if (!s.hovering) {
                        return {
                            hovering: false,
                            style: { transitionDuration: '0ms' },
                        }
                    }

                    return s
                }),
            400
        )

    const setHovering = (h: boolean) => {
        if (h) setToder({ hovering: true, style: { left: 0 } })
        else {
            setToder({ hovering: false, style: { left: '100%' } })
            Reset()
        }
    }

    return (
        <li
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
        >
            <div
                className={'select' + C(SelectedState.active, 'show')}
                style={{ transitionDelay: `${index * 100}ms` }}
            >
                <Hexalect
                    selected={Selected}
                    onClick={() =>
                        dispatch({
                            type: SelectedTypes.TOGGLE_TODO,
                            payload: props,
                        })
                    }
                />
            </div>

            <span>
                {title} - {id}
            </span>
            <Hexacheck checked={Checked} onClick={() => setChecked(!Checked)} />

            <div className='toder-container'>
                <div className='toder' style={Toder.style} />
            </div>
        </li>
    )
}

export { TodosWrapper, TodoItem }
