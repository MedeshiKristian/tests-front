import styled from 'styled-components'
import { COLORS } from '../../../constants/colors'
import { Link } from 'react-router-dom'
import { TRANSITION_DURATION } from '../../../constants/globals'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  min-height: 270px;
  margin-top: auto;
  justify-content: center;
  align-items: center;
  position: sticky;
  box-shadow: 0 6px 10px 5px rgba(0, 0, 0, 0.5);
  background: ${props => props.theme === 'light' ? COLORS.firstLight : COLORS.firstDark};
  transition: all 0${TRANSITION_DURATION} ease-in-out;
`

export const Container = styled.div`
  width: 85%;
  color: ${COLORS.myGrey};
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 20px;
  padding: 60px 30px 30px 30px;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
`

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1px;
  
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

export const Title = styled.h3`
  margin: 0;  
`

export const FooterLink = styled(Link)`
  margin-top: 10px;
  margin-left: 10px;
  color: ${COLORS.myGrey};
  text-decoration: none;
`