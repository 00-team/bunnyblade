import React, { FC, HTMLAttributes, useState, KeyboardEvent } from 'react'

interface InputProps extends HTMLAttributes<HTMLInputElement> {
    init?: string
    onSave?: (v: string) => void
    change?: (v: string) => void
    quit?: () => void
}

const Input: FC<InputProps> = props => {
    const { init, change, onSave, quit, ...attr } = props
    const [value, setValue] = useState(init || '')

    const InputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter' || e.code === 'NumpadEnter') {
            e.preventDefault()
            if (onSave) onSave(value)
        } else if (e.code === 'Escape') {
            e.preventDefault()
            if (quit) quit()
        }
    }

    const Change = (v: string) => {
        setValue(v)
        if (change) change(v)
    }

    return (
        <input
            {...attr}
            onChange={e => Change(e.target.value)}
            autoFocus
            defaultValue={value}
            onKeyDown={InputKeyDown}
            tabIndex={0}
            spellCheck={false}
        />
    )
}

export default Input
