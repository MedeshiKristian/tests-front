import styled from 'styled-components'
import { COLORS } from '../../constants/colors'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgb(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  z-index: 10;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: auto;
  width: auto;
  min-width: 400px;
  min-height: 200px;
  border-radius: 10px;
  padding: 0.5% 2%;
  background: ${props => props.theme === 'light' ? COLORS.secondLight : COLORS.secondDark};
  color: ${props => props.theme === 'light' ? COLORS.textLight : COLORS.textDark};
`

export const Title = styled.h2`
  padding: 0;
  margin: 12px;
`