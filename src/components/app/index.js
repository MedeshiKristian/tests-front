import Header from '../header'
import { BrowserRouter } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import AppRouter from '../router'
import { useContext, useEffect } from 'react'
import { Context } from '../../index'

const App = observer(() => {
  const { userStore } = useContext(Context)

  useEffect(() => {
    userStore.checkStorage()
  }, [userStore])

  return (
    <BrowserRouter>
      <Header/>
      <AppRouter/>
    </BrowserRouter>
  )
})

export default App
