import React, { useContext } from 'react'
import { COLORS } from '../../../constants/colors'
import { ThemeContext } from '../../context/theme-context'

const Icon = ({ BaseIcon, onClick}) => {
  const { theme } = useContext(ThemeContext)
  const color = theme === 'light' ? COLORS.color1 : COLORS.color2;

  return (
    <BaseIcon style={{padding:"5px 3px 0 0", color:`${color}`}} onClick={onClick}/>
  )
}

export default Icon