import React, { FC, createContext } from 'react'
import { useCallback, useContext, useState } from 'react'
import { createPortal } from 'react-dom'

// style
import './style/hexafirm.scss'

// hexa
import Hexabox from './Hexabox'

const HexaRoot = document.getElementById('__hexafirm__')!
const HexaContext = createContext<{ cb: (data: string) => void } | null>(null)

interface HexafirmProps {}

const Hexafirm: FC<HexafirmProps> = ({ children }) => {
    const [State, setState] = useState('')
    State
    const cb = useCallback(
        (data: string) => {
            setState(data)
        },
        [setState]
    )

    const HexaValue = { cb: cb }

    return (
        <HexaContext.Provider value={HexaValue}>
            {children}
            {createPortal(
                <div className='main'>
                    <Hexabox></Hexabox>
                </div>,
                HexaRoot
            )}
        </HexaContext.Provider>
    )
}

export const useHexafirm = () => useContext(HexaContext)

export default Hexafirm
