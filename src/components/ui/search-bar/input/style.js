import styled from 'styled-components'
import { COLORS } from '../../../../constants/colors'
import { TRANSITION_DURATION } from '../../../../constants/globals'
import { hexToRGB } from '../../../../utils/colorsUtils'

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  padding: 10px 10px 10px 15px;
  border-radius: 7px;
  align-items: center;

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
  background: transparent;
  border: 0;
  padding: 0;
  margin: 0 0 0 10px;
  background: ${props => props.theme === 'light' ? COLORS.firstLight : COLORS.firstDark};
  color: ${props => props.theme === 'light' ? COLORS.textLight : COLORS.textDark};
  transition: all ${TRANSITION_DURATION} ease-in-out;

  &:focus {
    outline: 0;
  }
`