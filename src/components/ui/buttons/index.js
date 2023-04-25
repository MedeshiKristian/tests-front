import styled from 'styled-components'

export const BlueButton = styled.button`
  display: flex;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  font-size: 1rem;
  padding: 1.5vh 4vh;
  margin: 1vh;
  color: white;
  border-radius: 20px;
  border: 0;
  background: #635fc7;

  &:hover {
    background: #a8a0ff;
    box-shadow: 0 8px 24px 0 rgba(255, 235, 167, .2);
  }
`