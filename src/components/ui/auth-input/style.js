import styled from 'styled-components'
import { COLORS } from '../../../constants/colors'
import { TRANSITION_DURATION } from '../../../constants/globals'
import { hexToRGB } from '../../../utils/colorsUtils'

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  padding: 10px;
  margin: 10px 0 0 0;
  border-radius: 7px;
  align-items: center;
  background: ${props => props.theme === 'light' ? COLORS.firstLight : COLORS.firstDark};
  color: ${props => props.theme === 'light' ? COLORS.textLight : COLORS.textDark};

  transition: all ${TRANSITION_DURATION} ease-in-out;
  
  border: 2px solid ${props => props.theme === 'light' ? COLORS.color2 : COLORS.color1};

  &:focus-within {
    box-shadow: 0 0 5px 0 rgba(${props => props.theme === 'light' ? hexToRGB(COLORS.color1) : hexToRGB(COLORS.color2, 0.5)});
  }
`

export const Input = styled.input`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  font-size: 1rem;
  border: 0;
  padding: 0;
  //padding: 0 10vw 0 0;
  margin: 0 0 0 3px;
  //margin: 1vh 1vw;
  background: ${props => props.theme === 'light' ? COLORS.firstLight : COLORS.firstDark};
  color: ${props => props.theme === 'light' ? COLORS.textLight : COLORS.textDark};

  &:focus {
    outline: 0;
  }
`

export const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
  text-align: left;
  margin-top: auto;
  margin-right: auto;
  padding: 0;
  height: 14px;
`