import React, { useContext } from 'react'
import { Button } from './style'
import { ThemeContext } from '../../../context/theme-context'

const SquareButton = ({ children, onClick }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <Button theme={theme} onClick={onClick}>
      {children}
    </Button>
  )
}

export default SquareButton