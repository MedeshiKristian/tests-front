import styled from 'styled-components'
import { COLORS } from '../../../values/colors'

export const Button = styled.button`
  display: flex;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  font-size: 1rem;
  border-radius: 5px;
  margin: 5px;
  padding: 2vh;
  color: white;
  border: 0;
  background: ${COLORS.iconColor};

  &:hover {
    cursor: pointer;
  }
`