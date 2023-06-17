import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Courses from '../../pages/courses'
import CourseTests from '../../pages/course-tests'
import Testing from '../../pages/testing'
import { observer } from 'mobx-react-lite'
import UserResults from '../../pages/user-results'
import Result from '../../pages/result'
import TestQuestions from '../../pages/test-questions'
import { Wrapper } from './style'
import TestResults from "../../pages/test-results";
import { StoreContext } from '../context/store-context'

export const COURSES_PATH = '/'

export const getCourseTestsPath = (id = ':course_id') => {
  return `/course/${id}/tests`
}

export const getTestingPath = (id = ':test_id') => {
  return `/testing/${id}`
}

export const getUserResultsPath = (id = ':user_id') => {
  return `/user/${id}/results`
}

export const getTestResultsPath = (id = ':test_id') => {
  return `/tests/${id}/results`
}

export const getResultPath = (id = ':result_id') => {
  return `/results/${id}`
}

export const getTestQuestionsPath = (id = ':test_id') => {
  return `/test/${id}`
}

const AppRouter = observer(() => {
  const { userStore } = useContext(StoreContext)

  return (
    <Wrapper>
      {userStore.isAuth &&
        <Routes>
          <Route path={COURSES_PATH} element={<Courses/>}/>
          <Route path={getCourseTestsPath()} element={<CourseTests/>}/>
          <Route path={getTestingPath()} element={<Testing/>}/>
          <Route path={getUserResultsPath()} element={<UserResults/>}/>
          <Route path={getTestResultsPath()} element={<TestResults/>}/>
          <Route path={getResultPath()} element={<Result/>}/>
          <Route path={getTestQuestionsPath()} element={<TestQuestions/>}/>
        </Routes>}
    </Wrapper>
  )
})

export default AppRouter