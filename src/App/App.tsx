import React, { FC } from 'react'

// layout
import Header from './layout/Header'

import './style/base.scss'

const App: FC = () => {
    return (
        <>
            <Header />
        </>
    )
}

export default App

// {/* <svg
//                 style={{ width: '100vw', height: 'calc(100vh - 28px)' }}
//                 viewBox={`0 0 ${w} ${h}`}
//                 xmlns='http://www.w3.org/2000/svg'
//             >
//                 {/* init
//                 <path d='M10.5 0 7.5 0 6 2.6 7.5 5.2 10.5 5.2 12 2.6 10.5 0Z' />
//                 <path d='M4.5 5.2 1.5 5.2 0 7.8 1.5 10.4 4.5 10.4 6 7.8 4.5 5.2Z' /> */}

//                 <path
//                     d='M9.3 0 6.3 0 4.8 2.6 6.3 5.2 9.3 5.2 10.8 2.6 9.3 0Z'
//                     fill='#fff'
//                 />
//                 <path d='M4.5 2.8 1.5 2.8 0 5.4 1.5 8 4.5 8 6 5.4 4.5 2.8Z' />

//                 <path
//                     fill='red'
//                     d='M7.8 2.8545 9.1126 4.1674 9.3674 3.9129 8.0545 2.6 9.3674 1.2874 9.1129 1.0326 7.8 2.3455 6.4874 1.0326 6.2329 1.2874 7.5455 2.6 6.2329 3.9126 6.4874 4.1674 7.8 2.8545Z'
//                 />

//                 {/* <path
//                     d='M7.8 0 10.4 1.5 10.4 4.5 7.8 6 5.2 4.5 5.2 1.5Z'

//                 /> */}
//                 {/* <path fill='red' d='M4.8 2.8v.4H.4V2.8h4.4z'></path> */}

//                 {/* translate(11.5px, -.5px) */}

//                 {/* debug lines */}
//                 <line stroke='red' x1='0' y1={h / 2} x2={w} y2={h / 2} />
//                 <line stroke='red' x1={w / 2} y1='0' x2={w / 2} y2={h} />

//                 {/* <line stroke='#fff' x1='7.8' y1='0' x2='7.8' y2='6' /> */}

//                 <line stroke='red' x1='0' y1='0' x2='0' y2={h} />

//                 <line stroke='#000' x1='0' y1='2.6' x2={w} y2='2.6' />
//                 <line stroke='#000' x1='7.8' y1='0' x2='7.8' y2={h} />

//                 <line stroke='red' x1='0' y1={h} x2={w} y2={h} />
//                 <line stroke='red' x1={w} y1={h} x2={w} y2='0' />
//                 <line stroke='red' x1={w} y1='0' x2='0' y2='0' />
//                 {/* debug lines */}
//             </svg> */}
