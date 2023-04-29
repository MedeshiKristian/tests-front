import styled from 'styled-components'

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
  background-color: white;
  height: auto;
  width: auto;
  border-radius: 20px;
  padding: 0.5% 2%;
`

export const Title = styled.h1`
  
`