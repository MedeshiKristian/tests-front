import React, { useContext } from 'react'
import { Container } from './style'
import { Context } from '../../../index'
import { observer } from 'mobx-react-lite'

const Footer = observer(() => {
  const { userStore } = useContext(Context)

  return (
    <>
        <Container>

        </Container>
    </>
  )
})

export default Footer