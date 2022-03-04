import React, { FC } from 'react'

// hexa
import Hexabox from '~Hexa/Hexabox'

import { useDialog } from '~comps/dialog'

interface DeleteDialogProps {}

const DeleteDialog: FC<DeleteDialogProps> = () => {
    const dialog = useDialog()
    console.log(dialog)

    return <Hexabox>gg</Hexabox>
}

export default DeleteDialog
