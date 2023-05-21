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
  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: 0;
  }
`