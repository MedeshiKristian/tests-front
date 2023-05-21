import React, { useContext, useEffect, useState } from 'react'
import { CourseService } from '../../../services'
import { Context } from '../../../index'
import { observer } from 'mobx-react-lite'
import { GridWrapper, Grid, Card, Pagination, SearchBar } from '../../ui'
import Course from './course'
import CreateCourse from '../../modals/create-course'

const Courses = observer(() => {
  const { userStore, coursesStore } = useContext(Context)

  const [isCreateCourseModal, setIsCreateCourseModal] = useState(false)

  const coursesPerPage = 7

  const [page, setPage] = useState(1)

  const [pageCourses, setPageCourses] = useState([])

  const [filteredCourses, setFilteredCourses] = useState([])

  useEffect(() => {
    CourseService.fetch()
      .then(response => {
        console.log('response', response.data)
        coursesStore.set(response.data)
        for (let i = 0; i < 100; i++) {
          coursesStore.add({ name: `Course ${i}` })
        }
        setPage(1)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  const handleCourseAdding = (event) => {
    event.preventDefault()
    setIsCreateCourseModal(true)
  }

  const predicate = (course, text) => {
    if (text === '') {
      return true
    }
    text = text.toLowerCase()
    return course.name.toLowerCase().includes(text.toLowerCase())
  }

  return (
    <>
      <GridWrapper>
        <SearchBar predicate={predicate}
                   store={coursesStore}
                   filteredStore={filteredCourses}
                   setFilteredStore={setFilteredCourses}
                   setPage={setPage}/>
        <Grid>
          {pageCourses.map((course) => (
            <Course course={course} key={course.id}/>
          ))}
          {userStore.isAdmin && <Card title={'Add course'} onClick={handleCourseAdding}/>}
        </Grid>
        <CreateCourse
          isCreateCourseModal={isCreateCourseModal}
          setIsCreateCourseModal={setIsCreateCourseModal}/>
      </GridWrapper>
      <Pagination itemPerPage={coursesPerPage}
                  setPage={setPage}
                  page={page}
                  data={filteredCourses}
                  setPageItems={setPageCourses}/>
    </>
  )
})

export default Courses