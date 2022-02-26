import React, { FC, useEffect } from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux'
import { GetAll } from '../../redux/actions/category'

// components
import Actions from './Actions'
import Category from './Category'

// style
import './style/categories.scss'

const Categories: FC = () => {
    const dispatch = useDispatch()
    const CategoryState = useSelector((s: RootState) => s.Category)

    useEffect(() => {
        dispatch(GetAll())
    }, [dispatch])

    return (
        <div className='categories-container'>
            <div className='categories'>
                {CategoryState.map((c, index) => (
                    <Category {...c} key={index} />
                ))}
            </div>

            <Actions />
        </div>
    )
}

export default Categories

// const CS: CategoryModel[] = [
//     {
//         id: 1,
//         name: 'category 1234567890 1234567890 1234567890 1234567890 ',
//         // checked: true,
//         // todos: [
//         //     {
//         //         id: 1,
//         //         name: 'todo 1 todo 1 todo 1 todo 1 todo 1 todo 1 ',
//         //         checked: true,
//         //     },
//         //     { id: 2, name: 'todo 2', checked: true },
//         //     { id: 3, name: 'todo 3', checked: true },
//         //     { id: 4, name: 'todo 4', checked: true },
//         //     { id: 5, name: 'todo 5', checked: true },
//         // ],
//     },
//     {
//         id: 2,
//         name: 'Category 2',
//         // checked: false,
//         // todos: [
//         //     { id: 1, name: 'todo 1', checked: false },
//         //     { id: 2, name: 'todo 2', checked: true },
//         //     { id: 3, name: 'todo 3', checked: false },
//         // ],
//     },
//     {
//         id: 3,
//         name: 'gg',
//         // checked: true,
//         // todos: [
//         //     { id: 1, name: 'todo 1', checked: true },
//         //     { id: 2, name: 'todo 2', checked: false },
//         // ],
//     },
// ]
