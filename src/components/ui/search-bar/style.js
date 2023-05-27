import styled from 'styled-components'
import { COLORS } from '../../../constants/colors'
import { TRANSITION_DURATION } from '../../../constants/globals'

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 30px;
  margin-bottom: 10px;
  transition: all ${TRANSITION_DURATION} ease-in-out;

  background: ${props => props.theme === 'light' ? COLORS.firstLight : COLORS.firstDark};
  color: ${props => props.theme === 'light' ? COLORS.textLight : COLORS.textDark};
  
  &:focus-within {
    box-shadow: 0 0 10px 0 rgba(255, 235, 167, 0.5);
  }
`