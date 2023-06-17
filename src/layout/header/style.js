import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { COLORS } from '../../constants/colors'
import { TRANSITION_DURATION } from '../../constants/globals'

export const Container = styled.header`
  width: 100%;
  height: 100%;
  position: sticky;
  top: 0;
  left: 0;
  box-shadow: 0 -6px 10px 5px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 5;
  transition: all ${TRANSITION_DURATION} ease-in-out;

  background: ${props => props.theme === 'light' ? COLORS.firstLight : COLORS.firstDark};
  color: ${props => props.theme === 'light' ? COLORS.textLight : COLORS.textDark};
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 85%;
  justify-content: space-between;
  align-items: center;
  padding: 0.5% 0;
`

export const Logo = styled(Link)`
  
`

export const ThemeToggle = styled.div`
  margin: 10px;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
`

export const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  margin: 3px 15px 0 0;
  text-decoration: none;
  color: ${props => props.theme === 'light' ? COLORS.textLight : COLORS.textDark};
  transition: all ${TRANSITION_DURATION} ease-in-out;
  user-select: none;
  
  
  &:after {
    content: '';
    padding: 1px;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    background-color: ${COLORS.color1};
    transform-origin: center;
    transition: transform 0.25s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: center;
  }
`