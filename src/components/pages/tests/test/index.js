import React, { useContext, useState } from 'react'
import { SquareButton, ListItem } from '../../../ui'
import { Context } from '../../../../index'
import { TestService } from '../../../../services'
import { useNavigate } from 'react-router-dom'
import ConfirmationModal from '../../../modals/confirmation'

const Test = ({ test }) => {
  const { userStore, testsStore } = useContext(Context)

  const navigate = useNavigate()

  const CONFIRM_TEST_DELETING_TITLE = `Are you sure you want to delete test "${test.topic}"?`

  const [isConfirmationModal, setIsConfirmationModal] = useState(false)

  const handleTestShow = (event, id) => {
    event.preventDefault()
    try {
      // TODO Navigate to page with questions
    } catch (error) {
      console.error(error)
    }
  }

  const handleTestStart = (event, id) => {
    event.preventDefault()
    try {
      navigate(`/test/${id}`)
    } catch (error) {
      console.error(error)
    }
  }

  const handleTestDelete = (id) => {
    TestService.delete(id)
      .then(response => {
        console.log(response)
        testsStore.delete(id)
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <>
      <ListItem title={test.topic}>
        {userStore.isAuth && test.id &&
          <SquareButton onClick={(event) => handleTestStart(event, test.id, test.topic)}>
            Start Test
          </SquareButton>}
        {userStore.isAdmin && test.id &&
          <>
            <SquareButton onClick={(event) => handleTestShow(event, test.id)}>
              Show Test
            </SquareButton>
            <SquareButton onClick={() => setIsConfirmationModal(true)}>
              Delete Test
            </SquareButton>
          </>}
      </ListItem>
      {isConfirmationModal &&
        <ConfirmationModal title={CONFIRM_TEST_DELETING_TITLE}
                           confirm={() => handleTestDelete(test.id)}
                           isConfirmationModal={isConfirmationModal}
                           setIsConfirmationModal={setIsConfirmationModal}
                           isSubmit={false}
        />}
    </>
  )
}

export default Test