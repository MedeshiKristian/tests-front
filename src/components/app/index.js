import Header from './header'
import { BrowserRouter } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import AppRouter from '../router'
import { useContext, useEffect } from 'react'
import Footer from './footer'
import { Wrapper } from './style'
import { StoreContext } from '../context/store-context'
import { ThemeContext } from '../context/theme-context'

const App = observer(() => {
  const { userStore } = useContext(StoreContext)

  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    userStore.checkAuth()
  }, [])

  return (
    <BrowserRouter>
      <Wrapper theme={theme}>
        <Header/>
        <AppRouter/>
        <Footer/>
      </Wrapper>
    </BrowserRouter>
  )
})

export default App
