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
                    style={!closeShow() ? { transitionDelay: '0ms' } : {}}
                >
                    <clipPath id='close-clip'>
                        <path d='M 0 0 L .9 0 L 1 .1 L 1 1 Z' />
                    </clipPath>

                    <path
                        clipPath='url(#close-clip)'
                        className='close-bg'
                        d='M0 0 .9 0 1 .1 1 1ZM.54.14.86.42ZM.86.14.54.42Z'
                        onClick={() => dialog.setContent(null)}
                    />
                </svg>
            </div>
        </Hexabox>
    )
}

export default DeleteDialog
