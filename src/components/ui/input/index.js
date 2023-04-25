import styled from 'styled-components'

export const Input = styled.input`
  border: 1px solid blue;
  border-radius: 7px;
  height: 100%;
  width: 100%;
  padding: 10px;
  margin: 10px;
  
  &:hover {
    cursor: pointer;
  }
  
  &:focus {
    outline: 0;
    //background-color: red;
  }
`