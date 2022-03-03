import React, { FC } from 'react'
import { render } from 'react-dom'

import Hexafirm from './components/Hexa/Hexafirm'

// redux
import { Provider as Redux } from 'react-redux'

// App
import App from './App'

import { store } from './redux'

const Root: FC = () => {
    return (
        <Redux store={store}>
            <Hexafirm>
                <App />
            </Hexafirm>
        </Redux>
    )
}

render(<Root />, document.getElementById('root'))
