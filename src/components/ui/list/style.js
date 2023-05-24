import styled from 'styled-components'
import { COLORS } from '../../values/colors'

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0.5px 0.5px 3px 0.5px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 50px 0 30px 0;
  margin: 20px 0;
  background: ${props => props.theme === 'light' ? COLORS.firstLight : COLORS.firstDark};
`