import React, { FC, StrictMode } from 'react'
import { render } from 'react-dom'

import { DialogProvider } from './components/dialog'

// redux
import { Provider as Redux } from 'react-redux'

// App
import App from './App'

import { store } from 'state'

const Root: FC = () => {
    return (
        <StrictMode>
            <Redux store={store}>
                <DialogProvider>
                    <App />
                </DialogProvider>
            </Redux>
        </StrictMode>
    )
}

render(
    <Root />,

    document.getElementById('root')
)
