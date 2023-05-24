import React, { createContext } from 'react'
import UserStore from '../../store/user'
import CreateStore from '../../store/base'

export const StoreContext = createContext(null)

const StoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={{
      userStore: new UserStore(),
      coursesStore: CreateStore(),
      testsStore: CreateStore(),
      questionsStore: CreateStore(),
      userResultsStore: CreateStore(),
      testResultsStore: CreateStore()
    }}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider
