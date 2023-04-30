import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/app'
import reportWebVitals from './reportWebVitals'
import UserStore from './components/store/user'
import CreateStore from './components/store/base'

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Context.Provider value={{
      userStore: new UserStore(),
      coursesStore: CreateStore(),
      testsStore: CreateStore(),
      questionsStore: CreateStore()
    }}>
      <App/>
    </Context.Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
