import Header from '../Header'
import { BrowserRouter } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import AppRouter from '../AppRouter'
import { useContext, useEffect } from 'react'
import { Context } from '../../index'

const App = observer(() => {
  const { userStore } = useContext(Context)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      userStore.setIsAuth(true)
    }
  },[])

  return (
    <BrowserRouter>
      <Header/>
      <AppRouter/>
    </BrowserRouter>
  )
})

export default App
