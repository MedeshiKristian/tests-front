import React, { useContext, useEffect, useRef, useState } from 'react'
import { ListItem, SquareButton } from '../../../ui'
import { useNavigate } from 'react-router-dom'
import { getResultPath } from '../../../router'
import { StoreContext } from '../../../context/store-context'
import Confirmation from '../../../modals/confirmation'
import { ResultService } from '../../../../services'

const TestResult = ({ data }) => {
  const result = data[0]
  const user = data[1]
  const [title, setTitle] = useState(user.email)
  const navigate = useNavigate()
  const { userStore, testResultsStore } = useContext(StoreContext)
  const [isConfirmationModal, setIsConfirmationModal] = useState(false)

  useEffect(() => {
    const resizeHandler = () => {
      const maxLength = window.innerWidth / 30
      if (user.email.length > maxLength) {
        setTitle(user.email.slice(0, maxLength) + "...")
      } else {
        setTitle(user.email)
      }
      console.log(maxLength)
    }

    resizeHandler()
    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [user.email])

  const handleShowResult = (id) => {
    navigate(getResultPath(id))
  }

  const handleResultDeleting = () => {
    ResultService.delete(result.id)
      .then(response => {
        console.log(response)
        testResultsStore.set(testResultsStore.data.filter(item => item[0].id !== result.id))
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <>
      <ListItem title={title}>
        {result.correct}/{result.total}
        <SquareButton onClick={() => handleShowResult(result.id)}>
          Show
        </SquareButton>
        {userStore.isAdmin &&
          <SquareButton onClick={() => setIsConfirmationModal(true)}>
            Delete
          </SquareButton>}
      </ListItem>
      {<Confirmation title={'Are you sure you want to delete this result?'}
                          confirm={handleResultDeleting}
                          isConfirmationModal={isConfirmationModal}
                          setIsConfirmationModal={setIsConfirmationModal}
                          isSubmit={false}/>}
    </>
  )
}

export default TestResult