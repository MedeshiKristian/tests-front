import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 400px;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`

export const Window = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
  overflow: hidden;
`

export const PagesContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: translate;
  transition-property: transform;
  transition-timing-function: ease-in-out;
`