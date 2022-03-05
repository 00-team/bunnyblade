import React, { FC, useEffect, useState } from 'react'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { Add } from 'state/actions/category'
import { CategoryTypes } from 'state/models/Category'
import { RootState } from 'state'

// dialog
import { useDialog } from '../../../components/dialog'
import DeleteDialog from './DeleteDialog'

// style
import './style/actions.scss'
import { C } from '@00-team/utils'

interface ActionsProps {}

interface ActionSvg {
    className: string
    onClick: () => void
    icon: string
}

const Actions: FC<ActionsProps> = () => {
    const dispatch = useDispatch()
    const Selected = useSelector((s: RootState) => s.SelectCategory)
    const dialog = useDialog()

    useEffect(() => {
        dialog.setContent(<DeleteDialog />)
    }, [])

    // A = active
    // S = Stay Active
    const [Active, setActive] = useState({ A: false, S: false })

    useEffect(() => {
        if (Selected.active) setActive({ A: true, S: true })
        else setActive({ ...Active, S: false })
    }, [Selected])

    const ActionsData: ActionSvg[] = [
        {
            className: 'add-category',
            onClick: () => dispatch(Add()),
            icon: 'M3 1.3A.1625.1625 90 013.1625 1.4625V2.4375H4.1375A.1625.1625 90 014.1375 2.7625H3.1625V3.7375A.1625.1625 90 012.8375 3.7375V2.7625H1.8625A.1625.1625 90 011.8625 2.4375H2.8375V1.4625A.1625.1625 90 013 1.3Z',
        },
        {
            className: 'mark',
            onClick: () => {},
            icon: 'M1.61 1.16A.46.46 90 012.07.7H3.91A.46.46 90 014.37 1.16V4.26A.11.11 90 014.19 4.36L2.99 3.71 1.79 4.36A.11.11 90 011.61 4.26V1.16ZM2.07.93A.23.23 90 001.84 1.16V4.05L2.93 3.48A.11.11 90 013.05 3.48L4.14 4.05V1.16A.23.23 90 003.91.93H2.07ZM3.6635 1.4865A.125.125 90 013.6635 1.6635L2.9135 2.4135A.125.125 90 012.7365 2.4135L2.3615 2.0385A.125.125 90 112.5385 1.8615L2.825 2.1482 3.4865 1.4865A.125.125 90 013.6635 1.4865Z',
        },
        {
            className: 'unmark',
            onClick: () => {
                dialog.setContent(null)
            },
            icon: 'M1.61 1.16A.46.46 90 012.07.7H3.91A.46.46 90 014.37 1.16V4.26A.11.11 90 014.19 4.36L2.99 3.71 1.79 4.36A.11.11 90 011.61 4.26V1.16ZM2.07.93A.23.23 90 001.84 1.16V4.05L2.93 3.48A.11.11 90 013.05 3.48L4.14 4.05V1.16A.23.23 90 003.91.93H2.07ZM2.375 1.925A.125.125 90 012.5 1.8H3.5A.125.125 90 013.5 2.05H2.5A.125.125 90 012.375 1.925Z',
        },
        {
            className: 'checklist',
            onClick: () => dispatch({ type: CategoryTypes.TOGGLE_SELECT }),
            icon: 'M2.9241.6366 1.1563 3.7301 1.6652 3.4361 2.9241 1.2332ZM3.0724.6397V1.2282L4.376 3.4625 4.8924 3.7598C4.2846 2.7205 3.6785 1.6795 3.0724.6397ZM4.3109 3.5959 1.6649 3.6074 1.1484 3.9055 4.8199 3.8899Z',
        },
        {
            className: 'delete',
            onClick: () => {
                dialog.setContent(<DeleteDialog />)
                // if (hexafirm) hexafirm.cb('gggggg')
                // Selected.categories.forEach(c => dispatch(Delete(c)))
                // dispatch({ type: CategoryTypes.TOGGLE_SELECT })
                // dispatch({ type: CategoryTypes.TOGGLE_SELECT })
            },
            icon: 'M2.4352 1.2624V1.2624H3.5296 3.5296V1.5216H3.7888V1.2336C3.7888 1.1065 3.6855 1.0032 3.5584 1.0032H2.4064C2.2793 1.0032 2.176 1.1065 2.176 1.2336V1.5216H2.4352V1.2624ZM4.2496 1.5216H1.7152C1.6515 1.5216 1.6 1.5731 1.6 1.6368V1.6C1.6 1.7678 1.613 1.7808 1.6288 1.7808H1.8462L1.9352 3.6636C1.9409 3.7864 2.0424 3.8832 2.1652 3.8832H3.7996C3.9227 3.8832 4.0239 3.7867 4.0296 3.6636L4.1186 1.7808H4.336C4.3518 1.7808 4.3648 1.7678 4.3648 1.752V1.6368C4.3648 1.5731 4.3133 1.5216 4.2496 1.5216ZM3.7719 3.624H2.1929L2.1058 1.7808H3.859L3.7719 3.624Z',
        },
    ]

    return (
        <div
            className={'actions-container' + C(Active.A, 'active')}
            onMouseEnter={() => setActive({ ...Active, A: true })}
            onMouseLeave={() => !Active.S && setActive({ A: false, S: false })}
            style={!Active.A ? { transitionDelay: '1250ms' } : {}}
        >
            {/* <Hexafirm>gg</Hexafirm>
            <Hexafirm>g2</Hexafirm> */}
            {ActionsData.map((a, i) => (
                <svg
                    viewBox='0 0 6 5.2'
                    key={i}
                    style={{ transitionDelay: `${i * 200}ms` }}
                    className={a.className}
                >
                    <path
                        onClick={a.onClick}
                        className='main'
                        d='M4.5 0 1.5 0 0 2.6 1.5 5.2 4.5 5.2 6 2.6 4.5 0Z'
                    />
                    <path
                        className='over'
                        d='M4.5 0 1.5 0 0 2.6 1.5 5.2 4.5 5.2 6 2.6 4.5 0Z'
                    />
                    <path
                        className='bg'
                        d='M4.5 0 1.5 0 0 2.6 1.5 5.2 4.5 5.2 6 2.6 4.5 0Z'
                    />

                    <path d={a.icon} className={`icon`} />
                </svg>
            ))}
        </div>
    )
}

export default Actions
