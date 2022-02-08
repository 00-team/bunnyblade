import React, { FC, useState } from 'react'

// redux
import { CategoryType } from '../../redux/models'

// style
import './style/category.scss'

const Category: FC<CategoryType> = props => {
    const { name } = props

    if (!name) {
        return <NullCategory {...props} />
    }

    const [EditName, setEditName] = useState(true)
    const [TheName, setTheName] = useState(name)

    return (
        <div className='category'>
            <div
                className='name-wrapper'
                onDoubleClick={() => setEditName(!EditName)}
            >
                {EditName ? (
                    <input
                        type='text'
                        defaultValue={TheName}
                        onChange={e => setTheName(e.target.value)}
                        onDoubleClick={e => e.preventDefault()}
                    />
                ) : (
                    <span>{TheName}</span>
                )}
            </div>
        </div>
    )
}

export default Category

const NullCategory: FC = () => {
    return <></>
}
