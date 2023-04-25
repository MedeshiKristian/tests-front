import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.header`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5% 0;
`

export const Logo = styled(Link)`
  padding-left: 3vw;
  
  img {
    height: 10vh;
  }
`

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`