import React, { FC, useState } from 'react'

import './style/category.scss'

interface CategoryProps {
    name: string | null
}

const Category: FC<CategoryProps> = ({ name }) => {
    const [EditName, setEditName] = useState(false)
    // const [TheName, setTheName] = useState(name)

    return (
        <div className='category'>
            {/* {name && (
                <input type='text' className='name' value={name} disabled />
            )} */}
            <div
                className='name-wrapper'
                onClick={() => setEditName(!EditName)}
            >
                {EditName}
                <span>{name}</span>
            </div>
        </div>
    )
}

export default Category
