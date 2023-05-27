import styled from 'styled-components'
import { COLORS } from '../../../../constants/colors'
import { TRANSITION_DURATION } from '../../../../constants/globals'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0.5px 0.5px 3px 0.5px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  width: 90%;
  height: auto;
  margin: 5px;
  padding: 10px;
  user-select: none;
  background: ${props => props.theme === 'light' ? COLORS.secondLight : COLORS.secondDark};
  
  transition: all ${TRANSITION_DURATION} ease-in-out;

  &:hover {
    transform: scale(1.005);
    box-shadow: 0 0 5px 2px teal;
  }

  &:hover .actions {
  }
`

export const ListActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
`