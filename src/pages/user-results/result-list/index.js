import React, { useContext, useState } from 'react'
import { ListItem, SquareButton } from '../../../components/ui'
import { useNavigate } from 'react-router-dom'
import Confirmation from '../../../components/modals/confirmation'
import { ResultService } from '../../../services'
import { observer } from 'mobx-react-lite'
import { getResultPath } from '../../../components/router'
import { StoreContext } from '../../../components/context/store-context'

export const decodeAnswers = (answers) => {
  const decodedAnswers = {}
  answers.split(' ').forEach((answer) => {
    const choosen = answer.slice(-1)
    const questionId = parseInt(answer.slice(0, -1))
    decodedAnswers[questionId] = choosen
  })
  return decodedAnswers
}

const Result = observer(({ item }) => {
  const { userStore, userResultsStore } = useContext(StoreContext)
  const navigate = useNavigate()
  const result = item[0]
  const test = item[1]
  const [isConfirmationModal, setIsConfirmationModal] = useState(false)

  const handleShowResult = (event) => {
    event.preventDefault()
    navigate(getResultPath(result.id))
  }

  const handleResultDeleting = () => {
    ResultService.delete(result.id)
      .then(response => {
        console.log(response)
        userResultsStore.set(userResultsStore.data.filter(item => item[0].id !== result.id))
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <>
      <ListItem title={test.topic + ` ${result.correct}/${result.total}`}>
        <SquareButton onClick={handleShowResult}>
          Show answers
        </SquareButton>
        {userStore.isAdmin &&
          <SquareButton onClick={() => setIsConfirmationModal(true)}>
            Delete
          </SquareButton>}
        {/*{show-result-list.correct}*/}
      </ListItem>
      {<Confirmation title={'Are you sure you want to delete this result?'}
                          confirm={handleResultDeleting}
                          isConfirmationModal={isConfirmationModal}
                          setIsConfirmationModal={setIsConfirmationModal}
                          isSubmit={false}/>}
    </>
  )
})

export default Result