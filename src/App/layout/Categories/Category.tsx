import React, { FC, useState } from 'react'

// redux
import { useDispatch } from 'react-redux'
import { CategoryModel } from '../../redux/models'
import { Update } from '../../redux/actions/category'

// components
import Hexaput from '../../components/common/Hexaput'
import Hexacheck from '../../components/common/Hexacheck'

// style
import './style/category.scss'

const Category: FC<CategoryModel> = ({ id, title }) => {
    const dispatch = useDispatch()
    const [EditTitle, setEditTitle] = useState(false)

    const Save = (NewTitle: string) => {
        setEditTitle(false)
        if (!NewTitle) return alert('error')
        dispatch(Update({ id: id, title: NewTitle }))
    }

    // useEffect(() => {
    //     if (todos.every(t => t.checked)) {
    //         setChecked(true)
    //     } else if (todos.some(t => t.checked)) {
    //         setChecked('barely')
    //     }
    // }, [todos])

    return (
        <div className='category'>
            <div className={`name-wrapper ${EditTitle ? 'editing' : ''}`}>
                {EditTitle ? (
                    <Hexaput
                        init={title}
                        quit={() => setEditTitle(false)}
                        onSave={n => Save(n)}
                    />
                ) : (
                    <span
                        onDoubleClick={() => setEditTitle(!EditTitle)}
                        className='static-name'
                    >
                        {title}
                    </span>
                )}
                <Hexacheck checked={false} />
            </div>
            {/* <TodosWrapper todos={todos} /> */}
        </div>
    )
}

export default Category

// const NullCategory: FC<CategoryModel> = ({ todos }) => {
//     return (
//         <div className='null-category'>
//             <TodosWrapper todos={todos} />
//         </div>
//     )
// }

// const TodosWrapper: FC<{ todos: TodoModel[] }> = ({ todos }) => {
//     return (
//         <div className='todos-wrapper'>
//             <ul>
//                 {todos.map((todo, index) => (
//                     <TodoItem {...todo} key={index} />
//                 ))}
//             </ul>
//         </div>
//     )
// }

// const TodoItem: FC<TodoModel> = ({ name, checked }) => {
//     const [Checked, setChecked] = useState(checked)

//     return (
//         <li>
//             <span>{name}</span>
//             <Hexacheck checked={Checked} onClick={() => setChecked(!Checked)} />

//             <div className='toder-container'>
//                 <div className='toder' />
//             </div>
//         </li>
//     )
// }
