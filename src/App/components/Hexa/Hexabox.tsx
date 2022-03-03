import React, { CSSProperties, FC, useEffect, useRef, useState } from 'react'

// style
import './style/hexabox.scss'

interface HexaboxProps {
    width?: number
    heigth?: number
    contentStyle?: CSSProperties
}

const Hexabox: FC<HexaboxProps> = props => {
    const { width = 500, heigth = 400, children } = props

    const [BoxSize, setBoxSize] = useState({ width: width, heigth: heigth })

    const box = useRef(null)
    const ratio = ((BoxSize.width + BoxSize.heigth) / 100) * 5
    const hypotenuse = Math.sqrt(Math.pow(ratio, 2) + Math.pow(ratio, 2))

    useEffect(() => {
        if (!box.current) return

        const observer = new ResizeObserver(entries => {
            const ebox = entries[0]
            if (!ebox) return

            setBoxSize({
                width: ebox.contentRect.width,
                heigth: ebox.contentRect.height,
            })
        })

        observer.observe(box.current)

        return () => {
            observer.disconnect()
        }
    }, [box])

    return (
        <div
            ref={box}
            className='hexabox'
            style={
                {
                    width: BoxSize.width,
                    height: BoxSize.heigth,
                    '--ratio': `${ratio}px`,
                    '--h-ratio': `${BoxSize.heigth - ratio}px`,
                    '--hypotenuse': `${hypotenuse}px`,
                } as any
            }
        >
            <div className='triangle' />
            <div className='triangle' />

            <div className='content'>{children}</div>

            <div className='borders'>
                <div className='top' />
                <div className='top-right-con'>
                    <div className='top-right' />
                </div>
                <div className='right' />
                <div className='left' />
                <div className='bottom' />
                <div className='bottom-left-con'>
                    <div className='bottom-left' />
                </div>
            </div>

            <svg
                className='bg'
                viewBox={`0 0 ${BoxSize.width} ${BoxSize.heigth}`}
            >
                <path
                    d={`M 0 0 
                    L ${BoxSize.width - ratio} 0 
                    L ${BoxSize.width} ${ratio}
                    L ${BoxSize.width} ${BoxSize.heigth} 
                    L ${ratio} ${BoxSize.heigth} 
                    L 0 ${BoxSize.heigth - ratio} Z`}
                />
            </svg>
        </div>
    )
}

export default Hexabox
