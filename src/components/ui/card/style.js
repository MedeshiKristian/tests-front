import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  box-shadow: 0.5px 0.5px 3px 0.5px rgba(0, 0, 0, 0.5);
  background-color: white;
  border-radius: 5px;
  //padding: 0;
  padding: 5px 15px;
  height: 20vw;
  width: 15vw;
  transition: all .5s ease-in-out;
  z-index: 0;
  
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 0 5px 2px teal;
  }
  
  .description {
    display: flex;
    width: auto;
    align-items: center;
    //background-color: red;
    padding: 0;
  }

  &:hover .description {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    bottom: 0;
    color: white;
    background: rgb(27, 27, 27, 0.2);
    padding: 5px 0;
    width: 100%;
    z-index: 10;
  }
  
  &:hover .actions {
    display: flex;
    color: white;
    width: 70%;
    flex-direction: column;
  }
  
  //&:hover .actions {
  //  display: flex;
  //  flex-direction: column;
  //  position: absolute;
  //  left: 0;
  //  bottom: 0;
  //  background: yellow 0.5px;
  //  width: 100%;
  //  z-index: 10;
  //}
`

export const Logo = styled.div`
  //padding: 20px;
  margin: 20px;
`

export const Actions = styled.div`
  display: none;
  //align-items: center;
  //padding: 0;
`