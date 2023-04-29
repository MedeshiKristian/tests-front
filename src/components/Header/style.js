import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.header`
  width: 100%;
  height: 100%;
  position: sticky;
  top: 0;
  left: 0;
  box-shadow: 0 -6px 10px 5px rgba(0, 0, 0, 0.5);
  background: white;
  //border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5% 0;
  z-index: 5;
`

export const Logo = styled(Link)`
  padding-left: 3vw;
`

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`