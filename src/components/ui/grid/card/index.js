import React, { useContext } from 'react'
import {CardActions, Logo, Wrapper} from './style'
import logo from '../../../../school-outline.svg'
import { ThemeContext } from '../../../context/theme-context'


const Card = ({ title, onClick, children, courseID }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <Wrapper onClick={onClick} key={courseID} theme={theme}>
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