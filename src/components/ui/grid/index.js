import styled from 'styled-components'

export const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5vh 10vw;
  width: auto;
  height: auto;
`

export const Grid = styled.div`
  display: grid;
  //background: white;
  align-items: center;
  justify-content: center;
  grid-column-gap: 20px;
  grid-row-gap: 15px;
  height: 100%;
  width: 100%;
  margin: 20px 0;
  
  grid-template-columns: repeat(5, 1fr);
  
  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
  
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media screen and (max-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
  }
`