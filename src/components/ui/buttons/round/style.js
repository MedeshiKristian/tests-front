import styled from 'styled-components'
import { COLORS } from '../../../values/colors'

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
  border: 2px solid ${COLORS.borderColor};
  
  transition: all .5s ease-in-out;
  background: ${props => props.theme === 'light' ? COLORS.firstLight : COLORS.firstDark};
  color: ${props => props.theme === 'light' ? COLORS.textLight : COLORS.textDark};

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px 0 rgba(255, 235, 167, 0.5);
  }
`