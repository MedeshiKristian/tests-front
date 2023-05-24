import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-row-gap: 15px;
  grid-column-gap: 7%;
  height: 100%;
  width: 100%;
  margin: 20px 0;
  
  grid-template-columns: repeat(4, 1fr);
  
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`