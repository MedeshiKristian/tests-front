import React, { useContext, useState } from 'react'
import AuthInput from '../../ui/auth-input'
import { FormModal, RoundButton } from '../../ui'
import { DocumentOutline } from 'react-ionicons'
import { Context } from '../../../index'
import { TestService } from '../../../services'
import ConfirmationModal from '../confirmation'

const CreateTest = ({
  courseID,
  isCreateTestModal,
  setIsCreateTestModal
}) => {
  const { testsStore } = useContext(Context)
  const [testData, setTestData] = useState({
    course_id: courseID,
    topic: ''
  })

  const handleTestDataChange = (event) => {
    event.preventDefault()
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
    setTestData({
      ...testData,
      topic: ''
    })
  }

  return (
    <ConfirmationModal title="Add test"
                       isConfirmationModal={isCreateTestModal}
                       setIsConfirmationModal={setIsCreateTestModal}
                       isSubmit={true}
                       confirm={handleSubmit}>
      <FormModal>
        <AuthInput name="topic"
                   value={testData.topic}
                   placeholder="Test topic"
                   onChange={handleTestDataChange}
                   BaseIcon={DocumentOutline}/>
      </FormModal>
    </ConfirmationModal>
  )
}

export default CreateTest