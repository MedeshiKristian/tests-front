import styled from 'styled-components'
import { COLORS } from '../../values/colors'

export const RoundButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  font-size: 1rem;
  padding: 1.5vh 2vw;
  margin: 1vh;
  color: black;
  border-radius: 20px;
  background: ${COLORS.main};
  border: 2px solid ${COLORS.borderColor};

  &:hover {
    background: ${COLORS.main};
    cursor: pointer;
    box-shadow: 0 8px 24px 0 rgba(255, 235, 167, 0.5);
  }
`

export const SquareButton = styled.button`
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