import React, { FC } from 'react'

// redux
import { CategoryType } from '../../redux/models'

// components
import Actions from './Actions'
import Category from './Category'

// style
import './style/categories.scss'

const Categories: FC = () => {
    return (
        <div className='categories-container'>
            <div className='categories'>
                {CS.map((c, index) => (
                    <Category {...c} key={index} />
                ))}
            </div>

            <Actions />
        </div>
    )
}

export default Categories

const CS: CategoryType[] = [
    {
        id: 1,
        name: 'category 1234567890 1234567890 1234567890 1234567890 ',
        checked: true,
        todos: [
            {
                id: 1,
                name: 'todo 1 todo 1 todo 1 todo 1 todo 1 todo 1 ',
                checked: true,
            },
            { id: 2, name: 'todo 2', checked: false },
            { id: 3, name: 'todo 3', checked: true },
        ],
    },
    {
        id: 2,
        name: 'Category 2',
        checked: false,
        todos: [{ id: 1, name: 'todo 1', checked: false }],
    },
    {
        id: 3,
        name: null,
        checked: true,
        todos: [{ id: 1, name: 'todo 1', checked: false }],
    },
]
