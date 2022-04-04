import React, { FC, useEffect } from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'state'
import { GetAll } from 'state/actions/category'
import { GetAll as GetAllTodos } from 'state/actions/todo'

// components
import Actions from './Actions'
import Category from './Category'
import { TodosWrapper } from './Todo'

// style
import './style/categories.scss'

const Categories: FC = () => {
    const dispatch = useDispatch()
    const CategoryState = useSelector((s: RootState) => s.Category)
    const OrphanTodos = useSelector((s: RootState) =>
        s.Todo.todos.filter(todo => todo.category === null)
    )

    useEffect(() => {
        dispatch(GetAll())
        dispatch(GetAllTodos())
    }, [dispatch])

    return (
        <div className='categories-container'>
            <div className='categories'>
                {CategoryState.map((c, index) => (
                    <Category {...c} key={index} index={index} />
                ))}

                <div className='orphan-todos'>
                    <TodosWrapper
                        todos={OrphanTodos}
                        category_index={CategoryState.length}
                    />
                </div>
            </div>

            <Actions />
        </div>
    )
}

export default Categories
