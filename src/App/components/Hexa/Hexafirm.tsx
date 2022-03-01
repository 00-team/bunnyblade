import React, { FC } from 'react'

import './style/hexafirm.scss'

interface HexafirmProps {}

const Hexafirm: FC<HexafirmProps> = ({ children }) => {
    return <div className='__hexafirm__'>{children}</div>
}

export default Hexafirm
