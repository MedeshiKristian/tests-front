import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5vh 5vw;
  width: auto;
  height: auto;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background: white;
  align-items: center;
  justify-content: center;
  grid-column-gap: 20px;
  grid-row-gap: 15px;
  height: 100%;
  width: 100%;
  margin: 20px 0;
`