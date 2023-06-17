import styled from 'styled-components'
import { COLORS } from '../constants/colors'
import { TRANSITION_DURATION } from '../constants/globals'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  transition: all ${TRANSITION_DURATION} ease-in-out;
  background: ${props => (props.theme === 'light' ? COLORS.secondLight : COLORS.secondDark)};
  color: ${props => (props.theme === 'light' ? COLORS.textLight : COLORS.textDark)};
`