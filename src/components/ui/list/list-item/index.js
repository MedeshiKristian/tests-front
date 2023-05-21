import React from 'react'
import { Wrapper, ListActions } from './style'

export const ListItem = ({ title, onClick, children }) => {
  return (
    <Wrapper onClick={onClick}>
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