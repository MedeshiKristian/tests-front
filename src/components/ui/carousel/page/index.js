import React, { useContext } from 'react'
import { CarouselContext } from '../context'
import { Container } from './style'

const Page = ({ children }) => {
  const { width } = useContext(CarouselContext)

  return (
    <Container style={{
      minWidth: `${width}px`,
      maxWidth: `${width}px`,
    }}>
      {children}
    </Container>
  )
}

export default Page