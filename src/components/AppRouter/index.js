import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Courses from '../Courses'

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Courses/>}/>
      </Routes>
      {/*<Navigate to="/"/>*/}
    </>
  )
}

export default AppRouter