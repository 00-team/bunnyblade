import React, { FC, useEffect, useState } from 'react'

// redux
import { useSelector } from 'react-redux'
import { RootState } from '../redux'

// style
import './style/header.scss'

const Header: FC = () => {
    const App = useSelector((s: RootState) => s.App)

    useEffect(() => {
        document.title = App.title
    }, [App])

    const [ActionsActive, setActionsActive] = useState(false)

    return (
        <div className='header-container'>
            <div className='title'>{App.title}</div>
            <div
                className={'open' + ((ActionsActive && ' active') || '')}
                onMouseEnter={() => setActionsActive(true)}
                onMouseLeave={() => setActionsActive(false)}
            >
                <svg
                    viewBox='0 0 10.8 8'
                    xmlns='http://www.w3.org/2000/svg'
                    style={!ActionsActive ? { transitionDelay: '600ms' } : {}}
                >
                    <path
                        className='close'
                        d='M9.3 0 6.3 0 4.8 2.6 6.3 5.2 9.3 5.2 10.8 2.6 9.3 0Z'
                        style={
                            ActionsActive ? { transitionDelay: '200ms' } : {}
                        }
                    />
                    <path
                        className='icon'
                        d='M7.8 2.8545 9.1126 4.1674 9.3674 3.9129 8.0545 2.6 9.3674 1.2874 9.1129 1.0326 7.8 2.3455 6.4874 1.0326 6.2329 1.2874 7.5455 2.6 6.2329 3.9126 6.4874 4.1674 7.8 2.8545Z'
                        style={
                            ActionsActive ? { transitionDelay: '200ms' } : {}
                        }
                    />

                    <path
                        className='minimize'
                        d='M4.5 2.8 1.5 2.8 0 5.4 1.5 8 4.5 8 6 5.4 4.5 2.8Z'
                        style={
                            !ActionsActive ? { transitionDelay: '200ms' } : {}
                        }
                    />
                    <path
                        className='icon'
                        d='M4.74 5.239V5.559H1.22V5.239H4.74Z'
                        style={
                            !ActionsActive ? { transitionDelay: '200ms' } : {}
                        }
                    />
                </svg>
            </div>
        </div>
    )
}

export default Header
