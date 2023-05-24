import React, { useContext, useState } from 'react'
import { SquareButton, ListItem } from '../../../ui'
import { TestService } from '../../../../services'
import { useNavigate } from 'react-router-dom'
import ConfirmationModal from '../../../modals/confirmation'
import { getTestingPath, getTestQuestionsPath, getTestResultsPath } from '../../../router'
import { observer } from 'mobx-react-lite'
import { StoreContext } from '../../../context/store-context'

const Test = observer(({ test }) => {
  const { userStore, testsStore } = useContext(StoreContext)

  const navigate = useNavigate()

  const CONFIRM_TEST_DELETING_TITLE = `Are you sure you want to delete test "${test.topic}"?`

  const [isConfirmationModal, setIsConfirmationModal] = useState(false)

  const handleTestShow = (event, id) => {
    event.preventDefault()
    navigate(getTestQuestionsPath(id))
  }

  const handleShowResults = (event, id) => {
    event.preventDefault()
    navigate(getTestResultsPath(id))
  }

  const handleTestStart = (event, id) => {
    event.preventDefault()
    navigate(getTestingPath(id))
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
            <SquareButton onClick={(event) => handleShowResults(event, test.id)}>
              Show results
            </SquareButton>
            <SquareButton onClick={() => setIsConfirmationModal(true)}>
              Delete Test
            </SquareButton>
          </>}
      </ListItem>
      {<ConfirmationModal title={CONFIRM_TEST_DELETING_TITLE}
                          confirm={() => handleTestDelete(test.id)}
                          isConfirmationModal={isConfirmationModal}
                          setIsConfirmationModal={setIsConfirmationModal}
                          isSubmit={false}/>}
    </>
  )
})

export default Test