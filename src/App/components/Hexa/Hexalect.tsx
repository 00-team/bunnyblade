import { C } from '@00-team/utils'
import React, { FC } from 'react'

import './style/hexalect.scss'

interface HexalectProps {
    selected?: boolean
    onClick?: () => void
}

const Hexalect: FC<HexalectProps> = ({ selected, onClick }) => {
    return (
        <div className={'hexalect' + C(selected, 'selected')}>
            <svg viewBox='0 0 6.8 5.8'>
                <clipPath id='hexalect-path-clip'>
                    <path d='M 5.1 0 L 1.7 0 L 0 2.9 L 1.7 5.8 L 5.1 5.8 L 6.8 2.9 L 5.1 0 Z' />
                </clipPath>

                <path
                    clipPath='url(#hexalect-path-clip)'
                    className='main'
                    d='M4.9.3 1.9.3.4 2.9 1.9 5.5 4.9 5.5 6.4 2.9 4.9.3Z'
                    onClick={onClick}
                />

                <path
                    clipPath='url(#hexalect-path-clip)'
                    className='overlay'
                    d='M4.9.3 1.9.3.4 2.9 1.9 5.5 4.9 5.5 6.4 2.9 4.9.3Z'
                />
            </svg>
        </div>
    )
}

export default Hexalect
