import React, { FC } from 'react'

// style
import './style/hexacheck.scss'

interface HexacheckProps {
    checked?: boolean | 'barely'
    onClick?: () => void
}

const Hexacheck: FC<HexacheckProps> = ({ checked, onClick }) => {
    return (
        <div className='hexacheck-container'>
            <svg viewBox='0 0 6.8 5.8'>
                <path
                    className='main'
                    d='M4.9.3 1.9.3.4 2.9 1.9 5.5 4.9 5.5 6.4 2.9 4.9.3Z'
                    onClick={onClick}
                />

                <path
                    className={`barely ${checked === 'barely' ? 'active' : ''}`}
                    d='M4.3 1.34 2.5 1.34 1.6 2.9 2.5 4.46 4.3 4.46 5.2 2.9 4.3 1.34Z'
                />

                {checked && checked !== 'barely' && <Tick />}
            </svg>
        </div>
    )
}

export default Hexacheck

const ANIME = {
    fill: 'freeze',

    calcMode: 'linear',
    // calcMode: 'spline',
    // keyTimes: '0; 1',
    // keySplines: '.2 0 0 1',
    dur: '200ms',
}
const ANIME2 = {
    ...ANIME,
    dur: '300ms',
    begin: '140ms',
    calcMode: 'spline',
    keyTimes: '0; 1',
    // keySplines: '0 .1 .9 0',
    keySplines: '0.42, 0.0, 0.58, 1.0',
}
const LINE1 = {
    x1: '1.8',
    y1: '2.5',
    x2: '1.8',
    y2: '2.5',
    clipPath: 'url(#tick-clip-1)',
}
const LINE2 = {
    x1: '3.4',
    y1: '4.1',
    x2: '3.4',
    y2: '4.1',
    clipPath: 'url(#tick-clip-2)',
}

const Tick: FC = () => {
    return (
        <svg viewBox='0 0 6.8 5.8'>
            {/* M6.8.7 3.4 4.1 1.8 2.5 2.4 1.9 3.4 2.9 6.2.1 6.8.7Z */}
            <clipPath id='tick-clip-1'>
                <path d='M2.4 1.9 1.8 2.5 3.4 4.1 4 3.5 2.4 1.9Z' />
            </clipPath>

            <clipPath id='tick-clip-2'>
                <path d='M3.4 4.1 6.8.7 6.2.1 2.8 3.5 3.4 4.1Z' />
            </clipPath>

            <line {...LINE1}>
                <animate attributeName='x2' values='1.8;3.4' {...ANIME} />
                <animate attributeName='y2' values='2.5;4.1' {...ANIME} />
            </line>

            <line {...LINE2}>
                <animate attributeName='x2' values='3.4;6.9' {...ANIME2} />
                <animate attributeName='y2' values='4.1;0.6' {...ANIME2} />
            </line>
        </svg>
    )
}
