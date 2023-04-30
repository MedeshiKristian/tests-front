import React, { useContext, useState } from 'react'
import TemplateModal from '../index'
import AuthInput from '../../ui/input'
import { AuthButton, AuthForm } from '../../ui'
import { DocumentOutline } from 'react-ionicons'
import { Context } from '../../../index'
import { TestService } from '../../../services'

const CreateTest = ({ courseID, setIsCreateTestModal }) => {
  const { testsStore } = useContext(Context)
  const [testData, setTestData] = useState({
    course_id: courseID,
    topic: ''
  })

  const handleTestDataChange = (event) => {
    const { name, value } = event.target
    setTestData({
      ...testData,
      [name]: value,
    })
    console.log(testData)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsCreateTestModal(false)
    TestService.create(testData)
      .then(response => {
        console.log(response)
        testsStore.add(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <TemplateModal title="Add test" close={() => setIsCreateTestModal(false)}>
      <AuthForm onSubmit={handleSubmit}>
        <AuthInput name="topic"
                   value={testData.topic}
                   placeholder="Test topic"
                   onChange={handleTestDataChange}
                   BaseIcon={DocumentOutline}
        />
        <AuthButton type="submit" style={{ padding: '1.5vh 5vw', margin: '10px' }}>Submit</AuthButton>
      </AuthForm>
    </TemplateModal>
  )
}

export default CreateTest