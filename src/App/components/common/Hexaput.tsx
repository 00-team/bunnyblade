import React, { CSSProperties, FC, useState, KeyboardEvent } from 'react'

// style
import './style/hexaput.scss'

interface HexaputProps {
    init?: string
    onSave?: (v: string) => void
    onChange?: (v: string) => void
    quit?: () => void
}

const Hexaput: FC<HexaputProps> = props => {
    const { init, onChange, onSave, quit } = props
    const [Active, setActive] = useState(false)
    const [InputValue, setInputValue] = useState(init || '')

    const Style = (b: 1 | 2): CSSProperties => {
        if (b === 2) {
            if (Active) return { right: 0 }
            return { left: 0 }
        } else {
            if (Active) return { left: 0 }
            return { right: 0 }
        }
    }

    const InputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter' || e.code === 'NumpadEnter') {
            e.preventDefault()
            if (onSave) onSave(InputValue)
        } else if (e.code === 'Escape') {
            e.preventDefault()
            if (quit) quit()
        }
    }

    const Change = (v: string) => {
        setInputValue(v)
        if (onChange) onChange(v)
    }

    return (
        <div className={`hexaput-container ${Active ? 'active' : ''}`}>
            <input
                autoFocus
                className='hexaput'
                type='text'
                defaultValue={InputValue}
                onFocus={() => setActive(true)}
                onBlur={() => setActive(false)}
                onChange={e => Change(e.target.value)}
                onKeyDown={InputKeyDown}
                tabIndex={0}
                spellCheck={false}
            />
            <div className='hexaput-border b1'>
                <span style={Style(1)}></span>
            </div>
            <div className='hexaput-border b2'>
                <span style={Style(2)}></span>
            </div>
        </div>
    )
}

export default Hexaput
