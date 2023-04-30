import React, { useContext, useEffect, useState } from 'react'
import { CourseService } from '../../../services'
import { Context } from '../../../index'
import { observer } from 'mobx-react-lite'
import CreateCourse from '../../modals/create-course'
import { useNavigate } from 'react-router-dom'
import { GridWrapper, Grid, Card, CardButton } from '../../ui'

const Courses = observer(() => {
  const { userStore, coursesStore } = useContext(Context)
  const [isCreateCourseModal, setIsCreateCourseModal] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    CourseService.fetch()
      .then(response => {
        console.log(response.data)
        coursesStore.set(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [coursesStore])

  const handleCourseAdding = (event) => {
    event.preventDefault()
    setIsCreateCourseModal(true)
  }

  const handleCourseShow = (event, id) => {
    event.preventDefault()
    try {
      navigate(`/course/${id}`)
    } catch (error) {
      console.error(error)
    }
  }

  const handleCourseDelete = (event, id) => {
    CourseService.delete(id)
      .then(response => {
        console.log(response)
        coursesStore.delete(id)
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <GridWrapper>
      <Grid>
        {coursesStore.data.map((course) => (
          <Card title={course.name}>
            <CardButton onClick={(event) => handleCourseShow(event, course.id)}>Show Course</CardButton>
            {userStore.isAdmin &&
              <CardButton onClick={(event) => handleCourseDelete(event, course.id)}>
                Delete Course
              </CardButton>}
          </Card>
        ))}
        {userStore.isAdmin && <Card title={'Add course'} onClick={handleCourseAdding}/>}
        {(() => {
          const cards = []
          for (let i = 0; i < 10; i++) {
            cards.push(
              <Card title={'Course'}>
                <CardButton>Show Course</CardButton>
              </Card>)
          }
          return cards
        })()}
      </Grid>
      {isCreateCourseModal && <CreateCourse setIsCreateCourseModal={setIsCreateCourseModal}/>}
    </GridWrapper>
  )
})

export default Courses