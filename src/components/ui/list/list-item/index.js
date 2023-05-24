import React, { useContext } from 'react'
import { Wrapper, ListActions } from './style'
import { ThemeContext } from '../../../context/theme-context'

export const ListItem = ({ title, onClick, children }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <Wrapper onClick={onClick} theme={theme}>
      <h2>{title}</h2>
      <div className="description">
        <ListActions className="actions">
          {children}
        </ListActions>
      </div>
    </Wrapper>
  )
}

export default ListItem