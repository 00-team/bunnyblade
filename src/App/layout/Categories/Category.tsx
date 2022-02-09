import React, { FC, useState } from 'react'

// redux
import { CategoryType } from '../../redux/models'

// components
import Hexaput from '../../components/common/Hexaput'

// style
import './style/category.scss'

const Category: FC<CategoryType> = props => {
    const { name } = props

    if (!name) {
        return <NullCategory {...props} />
    }

    const [EditName, setEditName] = useState(true)
    const [CategoryName, setCategoryName] = useState(name)

    return (
        <div className='category'>
            <div className='name-wrapper'>
                {EditName ? (
                    <Hexaput
                        init={CategoryName}
                        quit={() => setEditName(false)}
                        onSave={n => {
                            setCategoryName(n)
                            setEditName(false)
                        }}
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
        </div>
    )
}

export default Category

const NullCategory: FC = () => {
    return <></>
}
