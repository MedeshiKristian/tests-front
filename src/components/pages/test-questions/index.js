import React, { useContext, useEffect, useState } from 'react'
import { List, SquareButton } from '../../ui'
import { useParams } from 'react-router-dom'
import { QuestionService, TestService } from '../../../services'
import { Topic } from '../testing/style'
import { AddOutline } from 'react-ionicons'
import { COLORS } from '../../values/colors'
import { observer } from 'mobx-react-lite'
import CreateQuestion from '../../modals/create-question'
import { StoreContext } from '../../context/store-context'
import { QuestionWrapper } from '../task/style'
import TaskQuestions from '../task'
import { ThemeContext } from '../../context/theme-context'

const TestQuestions = observer(() => {
  const params = useParams()
  const { questionsStore } = useContext(StoreContext)
  const [test, setTest] = useState({})
  const [timerSeconds, setTimerSeconds] = useState()
  const [answers, setAnswers] = useState({})
  const [isCreateQuestionModal, setIsCreateQuestionModal] = useState(false)
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    TestService.get(params.test_id)
      .then(response => {
        console.log(response.data)
        setTest(response.data.test)
        setTimerSeconds(parseInt(response.data.test.deadline_seconds))
        questionsStore.set(response.data.questions)
        let ans = {}
        questionsStore.data.forEach(question => {
          switch (question.answer) {
            case question.a:
              ans[question.id] = 'a'
              break
            case question.b:
              ans[question.id] = 'b'
              break
            case question.c:
              ans[question.id] = 'c'
              break
            case question.d:
              ans[question.id] = 'd'
              break
          }
        })
        setAnswers(ans)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  const handleDelete = (id) => {
    QuestionService.delete(id)
      .then(response => {
        questionsStore.delete(id)
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <>
      <List>
        <Topic>{test?.topic}</Topic>
        {questionsStore.data.map(question => (
          <TaskQuestions question={question}
                         answers={answers}
                         setAnswers={setAnswers}
                         lock={true}>
            <SquareButton onClick={() => handleDelete(question.id)}>Delete</SquareButton>
          </TaskQuestions>))}
        <QuestionWrapper key={-1}
                         style={{ margin: '10px', width: '90%', height: '300px', cursor: 'pointer' }}
                         onClick={() => setIsCreateQuestionModal(true)} theme={theme}>
          <AddOutline color={COLORS.borderColor}
                      height="70px"
                      width="auto"/>
        </QuestionWrapper>
      </List>
      <CreateQuestion isCreateQuestionsModal={isCreateQuestionModal}
                      setIsCreateQuestionsModal={setIsCreateQuestionModal}
                      setAnswers={setAnswers}
                      answers={answers}/>
    </>
  )
})

export default TestQuestions