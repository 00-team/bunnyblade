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
                    <Category {...c} key={index} index={index} />
                ))}
            </div>

            <Actions />
        </div>
    )
}

export default Categories
