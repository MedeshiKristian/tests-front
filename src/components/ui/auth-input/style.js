import styled from 'styled-components'
import { COLORS } from '../../values/colors'

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  padding: 10px;
  margin: 10px 0 0 0;
  border: 1px solid ${COLORS.borderColor};
  border-radius: 7px;
  align-items: center;
  background: ${props => props.theme === 'light' ? COLORS.firstLight : COLORS.firstDark};
  color: ${props => props.theme === 'light' ? COLORS.textLight : COLORS.textDark};
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
  //padding: 0 10vw 0 0;
  margin: 0 0 0 3px;
  //margin: 1vh 1vw;

  &:hover {
    cursor: pointer;
  }

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