import React, { FC } from 'react'

// layout
import Header from './layout/Header'

import Todo from './layout/Todo'
import Categories from './layout/Categories'

import './style/fonts/imports.scss'
import './style/base.scss'

// const w = 6.8
// const h = 5.8

const App: FC = () => {
    return (
        <>
            <Header />
            <main>
                <Todo />
                <Categories />

                {/* <line stroke='red' x1='0' y1={h / 2} x2={w} y2={h / 2} />
                    <line stroke='red' x1={w / 2} y1='0' x2={w / 2} y2={h} />

                    <line stroke='red' x1='0' y1='0' x2='0' y2={h} />

                    <line stroke='red' x1='0' y1={h} x2={w} y2={h} />
                    <line stroke='red' x1={w} y1={h} x2={w} y2='0' />
                    <line stroke='red' x1={w} y1='0' x2='0' y2='0' /> */}
            </main>
        </>
    )
}

export default App
