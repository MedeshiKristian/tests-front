import React, { useContext, useState } from 'react'
import ConfirmationModal from '../confirmation'
import { FormModal } from '../../ui'
import AuthInput from '../../ui/auth-input'
import { DocumentOutline } from 'react-ionicons'
import { CourseService } from '../../../services'

import { StoreContext } from '../../context/store-context'

const CreateCourse = ({
  isCreateCourseModal,
  setIsCreateCourseModal
}) => {
  const { coursesStore } = useContext(StoreContext)
  const [courseData, setCourseData] = useState({
    name: ''
  })

  const handleCourseDataChange = (event) => {
    const { name, value } = event.target
    setCourseData({
      ...courseData,
      [name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsCreateCourseModal(false)
    CourseService.create(courseData)
      .then(response => {
        console.log(response)
        coursesStore.add(response.data)
      })
      .catch(error => {
        console.error(error)
      })
    setCourseData({
      ...courseData,
      name: ''
    })
  }

  return (
    <ConfirmationModal title="Add course"
                       isConfirmationModal={isCreateCourseModal}
                       setIsConfirmationModal={setIsCreateCourseModal}
                       isSubmit={true}
                       confirm={handleSubmit}>
      <FormModal>
        <AuthInput name="name"
                   value={courseData.name}
                   placeholder="Course name"
                   onChange={handleCourseDataChange}
                   BaseIcon={DocumentOutline}/>
      </FormModal>
    </ConfirmationModal>
  )
}

export default CreateCourse