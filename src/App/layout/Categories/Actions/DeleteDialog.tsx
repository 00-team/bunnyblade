import React, { FC } from 'react'

// style
import './style/delete-dialog.scss'

// hexa
import Hexabox from '~Hexa/Hexabox'

import { useDialog } from '~comps/dialog'

interface DeleteDialogProps {}

const DeleteDialog: FC<DeleteDialogProps> = () => {
    const dialog = useDialog()
    console.log(dialog)

    return (
        <Hexabox width={550}>
            Are you sure you wanna delete this categories???
            <div className='del-dia'></div>
        </Hexabox>
    )
}

export default DeleteDialog
