import React from 'react'
import { COLORS } from '../../values/colors'

const Icon = ({ BaseIcon, onClick}) => {
  return (
    <BaseIcon style={{padding:"5px 3px 0 0", color:`${COLORS.iconColor}`}} onClick={onClick}/>
  )
}

export default Icon