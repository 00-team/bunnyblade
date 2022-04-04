import React, { FC, useEffect, useState } from 'react'

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

interface TodoItemProps extends TodoModel {
    index: number
    category_index: number
}

const TodoItem: FC<TodoItemProps> = props => {
    // props
    const { checked, id, title } = props

    // hooks setup
    const dispatch = useDispatch()

    // state
    const [Checked, setChecked] = useState(checked)

    // effects
    useEffect(() => {
        dispatch(Update({ id: id, checked: Checked }))
    }, [Checked])

    return (
        <li>
            <SelectTodo {...props} />

            <span>{title}</span>

            <Hexacheck checked={Checked} onClick={() => setChecked(!Checked)} />

            <div className='hover-anime' />
        </li>
    )
}

const SelectTodo: FC<TodoItemProps> = ({ category_index, index, ...todo }) => {
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
