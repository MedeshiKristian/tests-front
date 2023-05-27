import styled from 'styled-components'
import { COLORS } from '../../../../constants/colors'
import { hexToRGB } from '../../../../utils/colorsUtils'
import { TRANSITION_DURATION } from '../../../../constants/globals'

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  font-size: 1rem;
  padding: 1.5vh 2vw;
  margin: 1vh;
  border-radius: 20px;
  border: 2px solid ${props => props.theme === 'light' ? COLORS.color2 : COLORS.color1};

  transition: all ${TRANSITION_DURATION} ease-in-out;
  background: ${props => props.theme === 'light' ? COLORS.firstLight : COLORS.firstDark};
  color: ${props => props.theme === 'light' ? COLORS.textLight : COLORS.textDark};

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px 0 rgba(${props => props.theme === 'light' ? hexToRGB(COLORS.color1) : hexToRGB(COLORS.color2)}, 0.5);
  }
`