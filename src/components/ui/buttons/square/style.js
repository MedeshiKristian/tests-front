import styled from 'styled-components'
import { COLORS } from '../../../../constants/colors'
import { hexToRGB } from '../../../../utils/colorsUtils'
import { TRANSITION_DURATION } from '../../../../constants/globals'

export const Button = styled.button`
  display: flex;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  font-size: 1rem;
  border-radius: 5px;
  margin: 5px;
  padding: 2vh;
  min-width: 80px;
  border: 2px solid ${props => props.theme === 'light' ? COLORS.color2 : COLORS.color1};

  transition: all ${TRANSITION_DURATION} ease-in-out;
  background: ${props => props.theme === 'light' ? COLORS.firstLight : COLORS.firstDark};
  color: ${props => props.theme === 'light' ? COLORS.textLight : COLORS.textDark};

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px 0 rgba(${props => props.theme === 'light' ? hexToRGB(COLORS.color1) : hexToRGB(COLORS.color2)}, 0.5);
  }
`