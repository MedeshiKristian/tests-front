import styled from 'styled-components'
import { COLORS } from '../values/colors'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: ${props => (props.theme === 'light' ? COLORS.secondLight : COLORS.secondDark)};
  color: ${props => (props.theme === 'light' ? COLORS.textLight : COLORS.textDark)};
`