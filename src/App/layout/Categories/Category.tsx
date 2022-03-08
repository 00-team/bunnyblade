import React, { CSSProperties, FC, useEffect, useState } from 'react'

import { Transition, TransitionStatus } from 'react-transition-group'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'state'
import { CategoryModel } from 'state/models/Category'
import { SelectedTypes } from 'state/models/Selected'
import { Update } from 'state/actions/category'

// components
import Input from '~comps/common/Input'
import Hexacheck from '~Hexa/Hexacheck'
import Hexalect from '~Hexa/Hexalect'

// todos
import { TodosWrapper } from './Todo'

// utils
import { C } from '@00-team/utils'

// style
import './style/category.scss'

interface CategoryProps extends CategoryModel {
    index: number
}

const Category: FC<CategoryProps> = ({ id, title, index }) => {
    const dispatch = useDispatch()
    // Selected Categories State
    const SelectedState = useSelector((s: RootState) => s.Selected)
    const Todos = useSelector((s: RootState) =>
        s.Todo.todos.filter(t => t.category === id)
    )

    const [CTitle, setCTitle] = useState(title)
    const [Selected, setSelected] = useState(false)
    const [EditTitle, setEditTitle] = useState(false)

    useEffect(() => {
        if (SelectedState.active) setEditTitle(false)
        if (!SelectedState.active) {
            setTimeout(() => {
                setSelected(false)
            }, index * 100)
            return
        }

        if (SelectedState.categories.find(c => c.id === id)) setSelected(true)
        else setSelected(false)
    }, [SelectedState])

    useEffect(() => {
        setCTitle(title)
    }, [title])

    const Save = (NewTitle: string) => {
        setEditTitle(false)
        if (!NewTitle) return alert('error')
        setCTitle(NewTitle)
        dispatch(Update({ id: id, title: NewTitle }))
    }

    return (
        <div className='category-container'>
            <div
                className={'category' + C(SelectedState.active, 'show-select')}
            >
                <div className={'bborder' + C(Selected, 'active')}>
                    <div />
                    <div />
                </div>

                <div className='edit-border'>
                    <Transition
                        in={EditTitle}
                        timeout={!EditTitle ? 5 * 300 : 0}
                    >
                        {status =>
                            [0, 1, 2, 3, 4].map(n => (
                                <div key={n} style={EBStyle(n, status)} />
                            ))
                        }
                    </Transition>
                </div>

                <div
                    className='select'
                    style={{ transitionDelay: `${index * 100}ms` }}
                >
                    <Hexalect
                        selected={Selected}
                        onClick={() =>
                            dispatch({
                                type: SelectedTypes.TOGGLE_CATEGORY,
                                payload: {
                                    id: id,
                                    title: title,
                                },
                            })
                        }
                    />
                </div>

                <div className='title-wrapper'>
                    {EditTitle ? (
                        <Input
                            className='title-input'
                            init={CTitle}
                            quit={() => setEditTitle(false)}
                            onSave={n => Save(n)}
                        />
                    ) : (
                        <span
                            onDoubleClick={() => {
                                if (!SelectedState.active)
                                    setEditTitle(!EditTitle)
                            }}
                            className='static-title'
                        >
                            {CTitle}
                        </span>
                    )}
                </div>
                <div className='checked'>
                    <Hexacheck checked={false} />
                </div>
            </div>
            <TodosWrapper todos={Todos} />
        </div>
    )
}

export default Category

type EBS = (index: number, status: TransitionStatus) => CSSProperties
const EBStyle: EBS = (index, status) => {
    const EBDelay = 200

    switch (status) {
        case 'entering':
            return {
                opacity: 1,
                transform: 'translateX(-300px)',
            }

        case 'entered':
            return {
                opacity: 1,
                transform: 'translateX(0)',
                transitionDelay: `${(4 - index) * EBDelay}ms`,
            }

        case 'exiting':
            return {
                opacity: 1,
                transform: 'translateX(300px)',
                transitionDelay: `${(4 - index) * EBDelay}ms`,
            }
        case 'exited':
            return {
                opacity: 0,
                transform: 'translateX(-300px)',
            }

        default:
            return {}
    }
}

// const NullCategory: FC<CategoryModel> = ({ todos }) => {
//     return (
//         <div className='null-category'>
//             <TodosWrapper todos={todos} />
//         </div>
//     )
// }
