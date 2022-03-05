import React, { FC, useState } from 'react'

// style
import './style/delete-dialog.scss'

// hexa
import Hexabox from '~Hexa/Hexabox'

// dialog
import { useDialog } from '~comps/dialog'

// utils
import { C } from '@00-team/utils'

interface HoverState {
    hovering: boolean
    onTriangles: boolean
    close: boolean
}

const DefaultHState: HoverState = {
    hovering: false,
    onTriangles: false,
    close: false,
}

interface DeleteDialogProps {}

const DeleteDialog: FC<DeleteDialogProps> = () => {
    const dialog = useDialog()
    const [active, setActive] = useState<HoverState>(DefaultHState)
    // cpa == close path active
    const [CPA, setCPA] = useState(false)

    const closeHover = (hovering: boolean) => {
        setActive(s => {
            return { ...s, close: hovering }
        })
    }

    const closeShow = () =>
        active.close || (active.hovering && !active.onTriangles)

    return (
        <Hexabox
            width={550}
            onHover={props => setActive({ ...active, ...props })}
        >
            Are you sure you wanna delete this categories???
            <div className='del-dia'>
                <svg
                    className={'close' + C(closeShow(), 'active')}
                    viewBox='0 0 1 1'
                    onMouseEnter={() => closeHover(true)}
                    onMouseLeave={() => closeHover(false)}
                    style={!closeShow() ? { transitionDelay: '300ms' } : {}}
                >
                    <path
                        className='close-bg'
                        style={
                            CPA
                                ? {}
                                : closeShow()
                                ? { transitionDelay: '300ms' }
                                : {}
                        }
                        d='M 0 0 L 1 0 L 1 1 Z'
                        onClick={() => console.log(dialog)}
                        onMouseDown={() => setCPA(true)}
                        onMouseUp={() => setTimeout(() => setCPA(false), 300)}
                    />

                    <path
                        style={
                            CPA
                                ? {}
                                : closeShow()
                                ? { transitionDelay: '300ms' }
                                : {}
                        }
                        className='close-sign'
                        d='M 0.5 0.08 L 0.9 0.48 Z M 0.9 0.08 L 0.5 0.48 Z'
                        // d='M 0.6875 0.0625 L 0.6875 0.5625 Z M 0.4375 0.3125 L 0.9375 0.3125 Z'
                    />
                </svg>
            </div>
        </Hexabox>
    )
}

export default DeleteDialog
