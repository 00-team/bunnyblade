import React, { CSSProperties, FC, useEffect, useRef, useState } from 'react'

// style
import './style/hexabox.scss'

interface HoverState {
    hovering: boolean
    onTriangles: boolean
}

interface HexaboxProps {
    width?: number
    heigth?: number
    contentStyle?: CSSProperties
    onHover?: (state: HoverState) => void
}

const Hexabox: FC<HexaboxProps> = props => {
    const { width = 500, heigth = 400, children, onHover } = props

    const [BoxSize, setBoxSize] = useState({ width: width, heigth: heigth })
    const [isHovering, setIsHovering] = useState<HoverState>({
        hovering: false,
        onTriangles: false,
    })

    const box = useRef(null)
    const ratio = ((BoxSize.width + BoxSize.heigth) / 100) * 5
    const hypotenuse = Math.sqrt(Math.pow(ratio, 2) + Math.pow(ratio, 2))
    const BasePointProps = {
        w: BoxSize.width,
        h: BoxSize.heigth,
        r: ratio,
    }

    useEffect(() => {
        if (!onHover) return
        onHover(isHovering)
    }, [isHovering])

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

    const onTriangles = (isit: boolean) => {
        setIsHovering(s => {
            return { ...s, onTriangles: isit }
        })
    }

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
            {...(onHover
                ? {
                      onMouseEnter: () => {
                          setIsHovering({ hovering: true, onTriangles: false })
                      },
                      onMouseLeave: () =>
                          setIsHovering({
                              hovering: false,
                              onTriangles: false,
                          }),
                  }
                : {})}
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
                className='box-bg-con'
                viewBox={`0 0 ${BoxSize.width} ${BoxSize.heigth}`}
            >
                <path
                    d={GetPathData({ ...BasePointProps, type: 'BG' })}
                    className='box-bg'
                />
            </svg>

            {onHover && (
                <svg
                    className='box-hovering'
                    viewBox={`0 0 ${BoxSize.width} ${BoxSize.heigth}`}
                >
                    <path
                        onMouseEnter={() => onTriangles(true)}
                        onMouseLeave={() => onTriangles(false)}
                        d={GetPathData({ ...BasePointProps, type: 'BL' })}
                    />
                    <path
                        onMouseEnter={() => onTriangles(true)}
                        onMouseLeave={() => onTriangles(false)}
                        d={GetPathData({ ...BasePointProps, type: 'TR' })}
                    />
                </svg>
            )}
        </div>
    )
}

export default Hexabox

interface PathDataProps {
    // bg == background
    // bl == bottom left
    // tr == top right
    type: 'BG' | 'BL' | 'TR'
    w: number
    h: number
    r: number
}
const GetPathData = (props: PathDataProps) => {
    const { type, w, h, r } = props

    switch (type) {
        case 'BG':
            return `M0 0 ${w - r} 0 ${w} ${r} ${w} ${h} ${r} ${h} 0 ${h - r}Z`
        case 'BL':
            return `M 0 ${h - r} L 0 ${h} L ${r} ${h} Z `
        case 'TR':
            return `M ${w - r} 0 L ${w} 0 L ${w} ${r}Z`
    }
}
