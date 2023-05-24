import React, { useContext } from 'react'
import { ListWrapper } from './style'
import { ThemeContext } from '../../context/theme-context'

const List = ({ children }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <ListWrapper theme={theme}>
      {children}
    </ListWrapper>
  )
}

export default List