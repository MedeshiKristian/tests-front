import React, { useContext, useEffect, useState } from 'react'
import { Card, SquareButton } from '../../../components/ui'
import { CourseService } from '../../../services'
import { useNavigate } from 'react-router-dom'
import ConfirmationModal from '../../../components/modals/confirmation'
import { observer } from 'mobx-react-lite'
import { getCourseTestsPath } from '../../../components/router'
import { StoreContext } from '../../../components/context/store-context'

const Course = observer(({ course }) => {
  const { userStore, coursesStore } = useContext(StoreContext)
  const navigate = useNavigate()
  const [isConfirmationModal, setIsConfirmationModal] = useState(false)
  const CONFIRM_COURSE_DELETING_TITLE = `Are you sure you want to delete course "${course.name}?"`

  const handleCourseShow = (event, id) => {
    event.preventDefault()
    navigate(getCourseTestsPath(id))
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
            Show
          </SquareButton>}
        {userStore.isAdmin && course.id &&
          <SquareButton onClick={() => setIsConfirmationModal(true)}>
            Delete
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