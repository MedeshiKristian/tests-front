import React, { useContext, useEffect, useState } from 'react'
import { List, ListWrapper } from '../../components/ui'
import { useParams } from 'react-router-dom'
import { ResultService } from '../../services'
import { observer } from 'mobx-react-lite'
import { decodeAnswers } from '../user-results/result-list'
import { StoreContext } from '../../components/context/store-context'
import { ThemeContext } from '../../components/context/theme-context'
import TaskQuestions from '../task'

const Result = observer(() => {
  const params = useParams()
  const [test, setTest] = useState()
  const { questionsStore } = useContext(StoreContext)
  const [answers, setAnswers] = useState({})
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    ResultService.get(params.result_id)
      .then(response => {
        console.log(response)
        setTest(response.data.test)
        questionsStore.set(response.data.questions)
        setAnswers(decodeAnswers(response.data.result.answers))
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return (
    <List>
      <h1>{test?.topic}</h1>
      {questionsStore.data.map(question => (
        <TaskQuestions question={question}
                       answers={answers}
                       setAnswers={setAnswers}
                       lock={true}/>
      ))}
    </List>
  )
})

export default Result