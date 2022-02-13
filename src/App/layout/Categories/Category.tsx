import React, { FC, useEffect, useState } from 'react'

// redux
import { TodoModel, CategoryModel } from '../../redux/models'

// components
import Hexaput from '../../components/common/Hexaput'
import Hexacheck from '../../components/common/Hexacheck'

// style
import './style/category.scss'

const Category: FC<CategoryModel> = props => {
    const { name, todos } = props

    if (!name) {
        return <NullCategory {...props} />
    }

    const [EditName, setEditName] = useState(false)
    const [CategoryName, setCategoryName] = useState(name)
    const [Checked, setChecked] = useState<boolean | 'barely'>(false)

    const Save = (NewName: string) => {
        setEditName(false)
        if (!NewName) return alert('error')
        setCategoryName(NewName)
    }

    useEffect(() => {
        if (todos.every(t => t.checked)) {
            setChecked(true)
        } else if (todos.some(t => t.checked)) {
            setChecked('barely')
        }
    }, [todos])

    return (
        <div className='category'>
            <div className={`name-wrapper ${EditName ? 'editing' : ''}`}>
                {EditName ? (
                    <Hexaput
                        init={CategoryName}
                        quit={() => setEditName(false)}
                        onSave={n => Save(n)}
                    />
                ) : (
                    <span
                        onDoubleClick={() => setEditName(!EditName)}
                        className='static-name'
                    >
                        {CategoryName}
                    </span>
                )}
                <Hexacheck checked={Checked} />
            </div>
            <TodosWrapper todos={todos} />
        </div>
    )
}

export default Category

const NullCategory: FC<CategoryModel> = ({ todos }) => {
    return (
        <div className='null-category'>
            <TodosWrapper todos={todos} />
        </div>
    )
}

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

const TodoItem: FC<TodoModel> = ({ name, checked }) => {
    const [Checked, setChecked] = useState(checked)

    return (
        <li>
            <span>{name}</span>
            <Hexacheck checked={Checked} onClick={() => setChecked(!Checked)} />

            <div className='toder-container'>
                <div className='toder' />
            </div>
        </li>
    )
}
