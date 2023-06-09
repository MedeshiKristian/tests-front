import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './layout'
import reportWebVitals from './reportWebVitals'
import StoreProvider from './components/context/store-context'
import ThemeProvider from './components/context/theme-context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <StoreProvider>
        <App/>
      </StoreProvider>
    </ThemeProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your layout, pass a function
// to log user-results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
