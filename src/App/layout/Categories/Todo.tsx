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

interface TodosWrapperProps {
    todos: TodoModel[]
    category_index: number
}

const TodosWrapper: FC<TodosWrapperProps> = ({ todos, category_index }) => {
    return (
        <div className='todos-wrapper'>
            <ul>
                {todos.map((todo, index) => (
                    <TodoItem
                        {...todo}
                        key={index}
                        index={0}
                        category_index={category_index}
                    />
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
    category_index: number
}

const TodoItem: FC<TodoItemProps> = props => {
    // props
    const { index, category_index, ...todo } = props

    // hooks setup
    const dispatch = useDispatch()

    // state
    const [Toder, setToder] = useState<ToderState>({
        hovering: false,
        style: {},
    })
    const [Checked, setChecked] = useState(todo.checked)

    // effects
    useEffect(() => {
        dispatch(Update({ id: todo.id, checked: Checked }))
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
            <SelectTodo
                todo={todo}
                index={index}
                category_index={category_index}
            />
            <span>
                {todo.title} - {todo.id}
            </span>
            <Hexacheck checked={Checked} onClick={() => setChecked(!Checked)} />

            <div className='toder-container'>
                <div className='toder' style={Toder.style} />
            </div>
        </li>
    )
}

interface SelectTodoProps {
    index: number
    category_index: number
    todo: TodoModel
}

const SelectTodo: FC<SelectTodoProps> = ({ todo, category_index, index }) => {
    const dispatch = useDispatch()

    const SelectedState = useSelector((s: RootState) => s.Selected)

    const isSelected = () => !!SelectedState.todos.find(t => t.id === todo.id)

    return (
        <div
            className={'select' + C(SelectedState.active, 'show')}
            style={{
                transitionDelay: `${(category_index + index) * 100}ms`,
            }}
        >
            <Hexalect
                selected={isSelected()}
                onClick={() => {
                    dispatch({
                        type: SelectedTypes.TOGGLE_TODO,
                        payload: todo,
                    })
                }}
            />
        </div>
    )
}

export { TodosWrapper, TodoItem }
