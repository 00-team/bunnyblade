import React, { FC } from 'react'

// style
import './style/dialog.scss'

interface DialogProps {}

const Dialog: FC<DialogProps> = ({ children }) => {
    if (!children) return <></>

    return (
        <div className='dialog-container'>
            <div className='dialog-bg' />
            <div className='dialog-wrapper'>
                <div className='dialog'>{children}</div>
            </div>
        </div>
    )
}

export default Dialog
