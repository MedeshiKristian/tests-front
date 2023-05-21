import Header from './header'
import { BrowserRouter } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import AppRouter from '../router'
import { useContext, useEffect } from 'react'
import { Context } from '../../index'
import Footer from './footer'
import { Wrapper } from './style'

const App = observer(() => {
  const { userStore } = useContext(Context)

  useEffect(() => {
    userStore.checkStorage()
  }, [userStore])

  return (
    <BrowserRouter>
      <Wrapper>
        <Header/>
        <AppRouter/>
        <Footer/>
      </Wrapper>
    </BrowserRouter>
  )
})

export default App
