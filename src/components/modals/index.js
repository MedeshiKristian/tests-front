import { Container, Title, Wrapper } from './style'

const TemplateModal = ({ children, title, close }) => {
  return (
    <Wrapper onClick={close}>
      <Container onClick={event => event.stopPropagation()}>
        <Title>{title}</Title>
        {children}
      </Container>
    </Wrapper>
  )
}

export default TemplateModal