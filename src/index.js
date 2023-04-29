import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/App'
import reportWebVitals from './reportWebVitals'
import UserStore from './components/store/UserStore'
import CoursesStore from './components/store/CoursesStore'

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Context.Provider value={{
      userStore: new UserStore(),
      coursesStore: new CoursesStore(),
    }}>
      <App/>
    </Context.Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
