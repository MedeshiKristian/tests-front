import { Container, Title, Wrapper } from './style'
import { useContext } from 'react'
import { ThemeContext } from '../context/theme-context'

const BaseModal = ({ children, title, close, style }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <Wrapper onClick={close}>
      <Container style={style} onClick={event => event.stopPropagation()}  theme={theme}>
        <Title>{title}</Title>
        {children}
      </Container>
    </Wrapper>
  )
}

export default BaseModal