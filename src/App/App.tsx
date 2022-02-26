import React, { FC } from 'react'

// layout
import Header from './layout/Header'

import Todo from './layout/Todo'
import Categories from './layout/Categories'

import './style/fonts/imports.scss'
import './style/base.scss'

// const w = 6 // 6
// const h = 6 // 5.2
// const S = { margin: '100px' }

const App: FC = () => {
    return (
        <>
            <Header />
            <main>
                <Todo />
                <Categories />

                {/* 
                <svg
                    style={{ width: '100vw', height: 'calc(100vh - 28px)' }}
                    viewBox={`0 0 ${w} ${h}`}
                >
                    <path
                        fill='#333'
                        d='M4.5 0 1.5 0 0 2.6 1.5 5.2 4.5 5.2 6 2.6 4.5 0Z'
                    />


                    <line stroke='red' x1='0' y1={h / 2} x2={w} y2={h / 2} />
                    <line stroke='red' x1={w / 2} y1='0' x2={w / 2} y2={h} />

                    <line stroke='red' x1='0' y1='0' x2='0' y2={h} />

                    <line stroke='red' x1='0' y1={h} x2={w} y2={h} />
                    <line stroke='red' x1={w} y1={h} x2={w} y2='0' />
                    <line stroke='red' x1={w} y1='0' x2='0' y2='0' />
                </svg> */}
            </main>
        </>
    )
}

export default App
