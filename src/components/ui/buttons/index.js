import styled from 'styled-components'

export const AuthButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  font-size: 1rem;
  padding: 1.5vh 2vw;
  margin: 1vh;
  color: black;
  border-radius: 20px;
  //border: 0;
  background: #ffffff;
  border: 2px solid #5bff51;
  //border: 2px solid #635fc7;

  //background: transparent;

  &:hover {
    //background: #5bff51;
    cursor: pointer;
    box-shadow: 0 8px 24px 0 rgba(255, 235, 167, 0.5);
  }
`

export const CardButton = styled.button`
  display: flex;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  font-size: 1rem;
  border-radius: 5px;
  margin: 5px;
  padding: 10px;
  color: white;
  border: 0;
  background: darkslategrey;
  
  &:hover {
    cursor: pointer;
  }
`