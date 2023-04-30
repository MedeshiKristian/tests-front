import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { COLORS } from '../values/colors'

export const Wrapper = styled.header`
  width: 100%;
  height: 100%;
  position: sticky;
  top: 0;
  left: 0;
  box-shadow: 0 -6px 10px 5px rgba(0, 0, 0, 0.5);
  background: white;
  //border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5% 0;
  z-index: 5;
`

export const Logo = styled(Link)`
  margin-left: 60px;
`

export const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  color: black;
  margin: 3px 15px 0 0;
  text-decoration: none;
  
  &:after {
    content: '';
    padding: 1px;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    background-color: ${COLORS.primaryVariant};
    transform-origin: center;
    transition: transform 0.25s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: center;
  }
`