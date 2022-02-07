import React, { FC } from 'react'
import { render } from 'react-dom'

import { Provider as Redux } from 'react-redux'

// App
import App from './App'

import { store } from './redux'

const Root: FC = () => {
    return (
        <Redux store={store}>
            <App />
        </Redux>
    )
}

render(<Root />, document.getElementById('root'))
