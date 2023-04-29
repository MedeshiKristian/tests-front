import React from 'react'
import { Actions, Logo, Wrapper } from './style'
import logo from '../../../school-outline.svg'

const Card = ({ onClick, data, children }) => {
  return (
    <Wrapper onClick={onClick}>
      <h2>{data.name}</h2>
      {/*<Logo>*/}
      {/*  <img src={logo} alt={logo}/>*/}
      {/*</Logo>*/}
      <div className="description">
        <Actions className="actions">
          {children}
        </Actions>
      </div>
    </Wrapper>
  )
}

export default Card