import React, { useContext, useState } from 'react'
import { Card, SquareButton } from '../../../ui'
import { CourseService } from '../../../../services'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../../../index'
import ConfirmationModal from '../../../modals/confirmation'
import { observer } from 'mobx-react-lite'

const Course = observer(({ course }) => {
  const { userStore, coursesStore } = useContext(Context)

  const navigate = useNavigate()

  const [isConfirmationModal, setIsConfirmationModal] = useState(false)

  const CONFIRM_COURSE_DELETING_TITLE = `Are you sure you want to delete course "${course.name}?"`

  const handleCourseShow = (event, id) => {
    event.preventDefault()
    try {
      navigate(`/course/${id}`)
    } catch (error) {
      console.error(error)
    }
  }

  const handleCourseDelete = (id) => {
    setIsConfirmationModal(false)
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
    <>
      <Card title={course.name} courseID={course.id} className="card">
        {course.id &&
          <SquareButton onClick={(event) => handleCourseShow(event, course.id)}>
            Show Course
          </SquareButton>}
        {userStore.isAdmin && course.id &&
          <SquareButton onClick={(event) => setIsConfirmationModal(true)}>
            Delete Course
          </SquareButton>}
      </Card>
      <ConfirmationModal title={CONFIRM_COURSE_DELETING_TITLE}
                         confirm={() => handleCourseDelete(course.id)}
                         isConfirmationModal={isConfirmationModal}
                         isSubmit={false}
                         setIsConfirmationModal={setIsConfirmationModal}
      />
    </>
  )
})

export default Course