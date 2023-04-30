import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0.5px 0.5px 3px 0.5px rgba(0, 0, 0, 0.5);
  background-color: white;
  border-radius: 5px;
  width: 100%;
  height: auto;
  padding: 10px;
  margin: 5px;

  transition: all .5s ease-in-out;

  &:hover {
    transform: scale(1.005);
    box-shadow: 0 0 5px 2px teal;
  }

  &:hover .actions {
  }
`

export const ListActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
`