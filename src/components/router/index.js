import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Courses from '../pages/courses'
import Tests from '../pages/tests'
import Testing from '../pages/testing'
import Result from '../pages/result'
import { Context } from '../../index'
import { observer } from 'mobx-react-lite'
import Results from '../pages/results'

const COURSES_PATH = '/'

const TESTS_PATH = '/course/:course_id'

const TESTING_PATH = '/test/:test_id'

const RESULTS_PATH = '/results'

const RESULT_PATH = '/result/:result_id'

const TEST_RESULTS_PATH = 'test/:test_id/results/'

const AppRouter = observer(() => {
  const { userStore } = useContext(Context)

  return (
    <>
      {userStore.isAuth &&
        <Routes>
          <Route path={`${COURSES_PATH}`} element={<Courses/>}/>
          <Route path={`${TESTS_PATH}`} element={<Tests/>}/>
          <Route path={`${TESTING_PATH}`} element={<Testing/>}/>
          <Route path={`${RESULTS_PATH}`} element={<Results/>}/>
          <Route path={`${RESULT_PATH}`} element={<Result/>}/>
        </Routes>}
      {/*<Navigate to="/"/>*/}
    </>
  )
})

export default AppRouter