import React, { FC, createContext } from 'react'
import { useCallback, useContext, useState } from 'react'
import { createPortal } from 'react-dom'

useCallback
useState

// style
import './style/dialog.scss'

type content = JSX.Element | string | null

interface ContextValue {
    setContent: (c: content) => void
}

const DefaultValue: ContextValue = {
    setContent: () => {},
}

const DialogContext = createContext<ContextValue>(DefaultValue)

interface ProviderProps {
    root?: string
}

const Provider: FC<ProviderProps> = ({ children, root = '__dialog__' }) => {
    const RootElement = document.getElementById(root)!
    const [content, setContent] = useState<content>(null)

    const cb = useCallback((c: content) => {
        setContent(c)
    }, [])

    return (
        <DialogContext.Provider value={{ setContent: cb }}>
            {children}
            {createPortal(
                content && <div className='main'>{content}</div>,
                RootElement
            )}
        </DialogContext.Provider>
    )
}

const useDialog = () => useContext(DialogContext)

export { Provider as DialogProvider, useDialog }
