import React, { FC, useState } from 'react'

// redux state
import { TodoModel } from 'state/models/Todo'

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

const TodoItem: FC<TodoModel> = ({ title, checked }) => {
    const [Checked, setChecked] = useState(checked)

    return (
        <li>
            <span>{title}</span>
            <Hexacheck checked={Checked} onClick={() => setChecked(!Checked)} />

            <div className='toder-container'>
                <div className='toder' />
            </div>
        </li>
    )
}

export { TodosWrapper, TodoItem }
