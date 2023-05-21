import React from 'react'
import {CardActions, Logo, Wrapper} from './style'
import logo from '../../../../school-outline.svg'


const Card = ({ title, onClick, children, courseID }) => {
  return (
    <Wrapper onClick={onClick} key={courseID}>
      <h2>{title}</h2>
      <Logo>
        <img src={logo} alt={logo}/>
      </Logo>
      <div className="description">
        <CardActions className="actions">
          {children}
        </CardActions>
      </div>
    </Wrapper>
  )
}

export default Card