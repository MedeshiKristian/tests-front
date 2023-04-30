import React, { useContext, useState } from 'react'
import TemplateModal from '../index'
import AuthInput from '../../ui/input'
import { AuthButton, AuthForm } from '../../ui'
import { DocumentOutline } from 'react-ionicons'
import { CourseService } from '../../../services'
import { Context } from '../../../index'
import { COLORS } from '../../values/colors'

const CreateCourse = ({ setIsCreateCourseModal }) => {
  const { coursesStore } = useContext(Context)
  const [courseData, setCourseData] = useState({
    name: ''
  })

  const handleCourseDataChange = (event) => {
    const { name, value } = event.target
    setCourseData({
      ...courseData,
      [name]: value,
    })
    console.log(courseData)
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
  }

  return (
    <TemplateModal title="Add course" close={() => setIsCreateCourseModal(false)}>
      <AuthForm onSubmit={handleSubmit}>
        <AuthInput name="name"
                   value={courseData.name}
                   placeholder="Course name"
                   onChange={handleCourseDataChange}
                   BaseIcon={DocumentOutline}
        />
        <AuthButton type="submit" style={{ padding: '1.5vh 5vw', margin: '10px' }}>Submit</AuthButton>
      </AuthForm>
    </TemplateModal>
  )
}

export default CreateCourse