import React, { CSSProperties, FC, useEffect, useState } from 'react'

// style
import './style/todo.scss'

// redux state
import { TodoModel } from 'state/models/Todo'
import { useDispatch } from 'react-redux'
import { Update } from 'state/actions/todo'

// hexa
import Hexacheck from '~Hexa/Hexacheck'

const TodosWrapper: FC<{ todos: TodoModel[] }> = ({ todos }) => {
    return (
        <div className='todos-wrapper'>
            <ul>
                {todos.map((todo, index) => (
                    <TodoItem {...todo} key={index} />
                ))}
            </ul>
        </div>
    )
}

interface ToderState {
    hovering: boolean
    style: CSSProperties
}

const TodoItem: FC<TodoModel> = props => {
    const { id, title, checked } = props
    const dispatch = useDispatch()
    const [Toder, setToder] = useState<ToderState>({
        hovering: false,
        style: {},
    })
    const [Checked, setChecked] = useState(checked)

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
            <span>{title}</span>
            <Hexacheck checked={Checked} onClick={() => setChecked(!Checked)} />

            <div className='toder-container'>
                <div className='toder' style={Toder.style} />
            </div>
        </li>
    )
}

export { TodosWrapper, TodoItem }
