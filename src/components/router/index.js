import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Courses from '../pages/courses'
import Tests from '../pages/tests'
import Testing from '../pages/testing'

export const COURSES_PATH = '/'
export const TESTS_PATH = '/course/:course_id'

export const TESTING_PATH = '/test/:test_id'

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path={`${COURSES_PATH}`} element={<Courses/>}/>
        <Route path={`${TESTS_PATH}`} element={<Tests/>}/>
        <Route path={`${TESTING_PATH}`} element={<Testing/>}/>
      </Routes>
      {/*<Navigate to="/"/>*/}
    </>
  )
}

export default AppRouter