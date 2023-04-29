import React, { useContext, useEffect, useState } from 'react'
import { CourseService } from '../../services'
import { Container, Grid } from './style'
import Card from '../ui/card'
import { Context } from '../../index'
import { observer } from 'mobx-react-lite'
import { CardButton } from '../ui/buttons'
import CreateCourse from '../modals/CreateCourse'

const Courses = observer(() => {
  const { userStore, coursesStore } = useContext(Context)
  const [isCreateCourseModal, setIsCreateCourseModal] = useState(false)

  useEffect(() => {
    CourseService.fetch()
      .then(response => {
        console.log(response.data)
        coursesStore.setCourses(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  const handleCourseAdding = (event) => {
    event.preventDefault()
    setIsCreateCourseModal(true)
  }

  const handleCourseDelete = (event, id) => {
    console.log('courseDeleting')
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
    <Container>
      <Grid>
        {coursesStore.courses.map((course) => (
          <Card data={course}>
            <CardButton>Show Course</CardButton>
            {userStore.isAdmin &&
              <CardButton onClick={(event) => handleCourseDelete(event, course.id)}>
                Delete Course
              </CardButton>}
          </Card>
        ))}
        {userStore.isAdmin && <Card data={{ name: 'Add Course' }} onClick={handleCourseAdding}/>}
        {(() => {
          const cards = []
          for (let i = 0; i < 10; i++) {
            cards.push(
              <Card data={{ name: 'Title' }}>
                <CardButton>Show Course</CardButton>
              </Card>)
          }
          return cards
        })()}
      </Grid>
      {isCreateCourseModal && <CreateCourse setIsCreateCourseModal={setIsCreateCourseModal}/>}
    </Container>
  )
})

export default Courses