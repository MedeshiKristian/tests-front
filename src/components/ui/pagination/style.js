import styled from 'styled-components'
import { COLORS } from '../../../constants/colors'
import { TRANSITION_DURATION } from '../../../constants/globals'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 50px;
  width: 100%;
  margin: 10px;
`

export const PageButton = styled.div`
  display: flex;
  justify-content: center;
  height: 25px;
  width: 25px;
  padding: 5px;
  margin: 3px;
  box-shadow: 0.5px 0.5px 3px 0.5px rgba(0, 0, 0, 0.5);
  border-radius: 3px;

  cursor: pointer;
  transition: all ${TRANSITION_DURATION} ease-in-out;
  z-index: 0;

  user-select: none;
  
  background: ${props => props.theme === 'light' ? COLORS.firstLight : COLORS.firstDark};
  

  //&:hover {
  //  transform: scale(1.01);
  //  box-shadow: 0 0 5px 2px teal;
  //}
`