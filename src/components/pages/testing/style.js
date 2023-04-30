import styled from 'styled-components'

export const QuestionWrapper = styled.div`
  //border: 1px solid black;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  *, *:before, *:after {
    box-sizing: inherit;
  }
  justify-content: center;
  align-items: center;
  text-align: left;
  width: 100%;
  height: auto;
  margin: 15px;
  padding: 20px 40px;
  box-shadow: 0.5px 0.5px 3px 0.5px rgba(0, 0, 0, 0.5);
`

export const Task = styled.div`
  //border: 1px solid black;
  margin: 0;
  padding: 5px;
  width: 100%;
`

export const OptionsContainer = styled.div`
  //border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
  //padding: 10px;
  width: 100%;
`

export const Option = styled.div`
  //border: 1px solid black;
  border-radius: 5px;
  text-align: left;
  border: 0;
  font-size: 1rem;
  //background-color: white;
  padding: 10px;
  margin: 3px;
  width: 100%;
  box-shadow: 0.5px 0.5px 3px 0.5px rgba(0, 0, 0, 0.5);
  
  transition: all .5s ease-in-out;
  //&:hover {
  //  transform: scale(1.005);
  //  box-shadow: 0 0 5px 2px teal;
  //}
`
