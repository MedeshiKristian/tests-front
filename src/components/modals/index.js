import { Container, Title, Wrapper } from './style'

const BaseModal = ({ children, title, close, style }) => {
  return (
    <Wrapper onClick={close}>
      <Container style={style} onClick={event => event.stopPropagation()}>
        <Title>{title}</Title>
        {children}
      </Container>
    </Wrapper>
  )
}

export default BaseModal