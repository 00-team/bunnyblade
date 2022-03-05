import React, { FC } from 'react'
import { render } from 'react-dom'

import { DialogProvider } from './components/dialog'

// redux
import { Provider as Redux } from 'react-redux'

// App
import App from './App'

import { store } from 'state'

const Root: FC = () => {
    return (
        <Redux store={store}>
            <DialogProvider>
                <App />
            </DialogProvider>
        </Redux>
    )
}

render(<Root />, document.getElementById('root'))
