import React, { FC, useState } from 'react'

// redux
import { CategoryType } from '../../redux/models'

// components
import Hexaput from '../../components/common/Hexaput'

// style
import './style/category.scss'

const Category: FC<CategoryType> = props => {
    const { name, todos } = props

    if (!name) {
        return <NullCategory {...props} />
    }

    const [EditName, setEditName] = useState(false)
    const [CategoryName, setCategoryName] = useState(name)

    const Save = (NewName: string) => {
        setEditName(false)
        if (!NewName) return alert('error')
        setCategoryName(NewName)
    }

    return (
        <div className='category'>
            <div className='name-wrapper'>
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
            </div>
            <div className='todos-wrapper'>
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>{todo.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Category

const NullCategory: FC = () => {
    return <></>
}
