import React, { useContext, useState } from 'react'
import AuthInput from '../../ui/auth-input'
import { FormModal, RoundButton } from '../../ui'
import { DocumentOutline, TimeOutline } from 'react-ionicons'
import { TestService } from '../../../services'
import ConfirmationModal from '../confirmation'
import { useParams } from 'react-router-dom'
import { StoreContext } from '../../context/store-context'

const CreateTest = ({
  isCreateTestModal,
  setIsCreateTestModal
}) => {
  const params = useParams()
  const { testsStore } = useContext(StoreContext)
  const [testData, setTestData] = useState({
    course_id: params.course_id,
    topic: '',
    deadline_seconds: ''
  })

  const handleTestDataChange = (event) => {
    event.preventDefault()
    const { name, value } = event.target
    setTestData({
      ...testData,
      [name]: value,
    })
    // console.log(testData)
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
      topic: '',
      deadline_seconds: ''
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
        <AuthInput name="deadline_seconds"
                   value={testData.deadline_seconds}
                   placeholder="Duration"
                   onChange={handleTestDataChange}
                   BaseIcon={TimeOutline}/>
      </FormModal>
    </ConfirmationModal>
  )
}

export default CreateTest