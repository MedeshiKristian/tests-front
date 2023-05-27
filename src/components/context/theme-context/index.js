import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext(null)

const ThemeProvider = ({ children }) => {
  const light = 'light'
  const dark = 'dark'
  const themeKey = 'myTheme'
  const [theme, setTheme] = useState(localStorage.getItem(themeKey) ?? light)


  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === light ? dark : light))
  }

  useEffect(() => {
    localStorage.setItem(themeKey, theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider