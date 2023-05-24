import styled from 'styled-components'
import { COLORS } from '../../../values/colors'

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  padding: 10px 10px 10px 15px;
  border: 1px solid ${COLORS.borderColor};
  border-radius: 7px;
  align-items: center;
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
  transition: all .5s ease-in-out;

  &:focus {
    outline: 0;
  }
`