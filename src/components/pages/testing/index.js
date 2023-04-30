import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { CardButton, List, ListWrapper } from '../../ui'
import { Context } from '../../../index'
import { TestService } from '../../../services'
import { observer } from 'mobx-react-lite'
import { QuestionWrapper, Task } from './style'
import { QuestionComponent } from './question'
import { codeOutline } from 'ionicons/icons'

const Testing = observer(() => {
  const params = useParams()

  const [testTopic, setTestTopic] = useState('')
  const { questionsStore } = useContext(Context)

  const answersKey = 'answers'

  const [answers, setAnswers] = useState(() => {
    const saved = sessionStorage.getItem(answersKey)
    return JSON.parse(saved) ?? {}
  })

  useEffect(() => {
    sessionStorage.setItem(answersKey, JSON.stringify(answers))
  }, [answers])

  useEffect(() => {
    TestService.get(params.test_id)
      .then(response => {
        console.log(response.data)
        setTestTopic(response.data.test.topic)
        questionsStore.set(response.data.questions)
      })
      .catch(error => {
        console.error(error)
      })
  }, [questionsStore])

  const total = questionsStore.data.length
  const [correct, setCorrect] = useState(0)

  const handleSubmit = () => {
    // console.log("submit")
    let match = 0
    questionsStore.data.map((question) => {
      const choosen = String.fromCharCode('a'.charCodeAt(0) + answers[question.id])
      if (question.answer === question[choosen]) {
        match += 1
      }
    })
    setCorrect(match)
  }

  return (
    <ListWrapper style={{ margin: '0 5vw' }}>
      <List>
        {/*<h1>Testing page {params.test_id}</h1>*/}
        <h1>{testTopic}</h1>
        {questionsStore.data.map((question) => (
          <QuestionWrapper key={question.id}>
            <Task>{question.task}</Task>
            <QuestionComponent question={question} answers={answers} setAnswers={setAnswers}/>
          </QuestionWrapper>
        ))}
        <CardButton style={{ width: '30%', height: '50px' }} onClick={handleSubmit}>Submit</CardButton>
        {correct}/{total}
      </List>
    </ListWrapper>
  )
})

export default Testing