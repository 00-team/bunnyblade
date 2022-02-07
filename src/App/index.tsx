import React, { FC } from 'react'
import { render } from 'react-dom'

// App
import App from './App'

const Root: FC = () => {
    return (
        <>
            <App />
        </>
    )
}

render(<Root />, document.getElementById('root'))
