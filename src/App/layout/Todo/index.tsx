import React, { FC } from 'react'

// style
import './style/todo.scss'

interface TodoProps {}

const Todo: FC<TodoProps> = () => {
    return <div className='todo-container'>300ms / 200ms linear</div>
}

export default Todo
