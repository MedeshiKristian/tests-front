import React from 'react'
import { CardActions, Wrapper } from './style'

const Card = ({ title, onClick, children }) => {
  return (
    <Wrapper onClick={onClick}>
      <h2>{title}</h2>
      {/*<Logo>*/}
      {/*  <img src={logo} alt={logo}/>*/}
      {/*</Logo>*/}
      <div className="description">
        <CardActions className="actions">
          {children}
        </CardActions>
      </div>
    </Wrapper>
  )
}

export default Card