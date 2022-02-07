import React, { FC, useEffect } from 'react'

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

    return <div className='header-container'>{App.title}</div>
}

export default Header
