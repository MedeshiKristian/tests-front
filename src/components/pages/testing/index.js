import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { SquareButton, List, ListWrapper, Carousel, Pagination } from '../../ui'
import { Context } from '../../../index'
import { ResultService, TestService } from '../../../services'
import { observer } from 'mobx-react-lite'
import { QuestionWrapper, Task, TimerAnimation, TimerContainer, TimerText, Topic } from './style'
import { Question } from './question'
import Confirmation from '../../modals/confirmation'

const Testing = observer(() => {
  const params = useParams()
  const [test, setTest] = useState({})
  const { userStore, questionsStore } = useContext(Context)
  const [isConfirmationSubmit, setIsConfirmationSubmit] = useState(false)
  const [isConfirmationRestart, setIsConfirmationRestart] = useState(false)
  const [showAnswers, setShowAnswers] = useState(false)
  const total = questionsStore.data.length
  const [correct, setCorrect] = useState(0)
  const answersKey = `answers ${params.test_id}`
  const [answers, setAnswers] = useState(() => {
    const saved = localStorage.getItem(answersKey)
    return JSON.parse(saved) ?? {}
  })
  const [page, setPage] = useState(1)
  const [timerSeconds, setTimerSeconds] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const hours = Math.floor(timerSeconds / 3600)
  const minutes = Math.floor((timerSeconds % 3600) / 60)
  const seconds = timerSeconds % 60

  useEffect(() => {
    localStorage.setItem(answersKey, JSON.stringify(answers))
  }, [answers])

  useEffect(() => {
    TestService.get(params.test_id)
      .then(response => {
        console.log(response.data)
        setTest(response.data.test)
        setTimerSeconds(parseInt(response.data.test.deadline_seconds))
        console.log(response.data.test)
        // setTestTopic(response.data.test.topic)
        questionsStore.set(response.data.questions)
      })
      .catch(error => {
        console.error(error)
      })
    if (sessionStorage.getItem('showAnswers') === 'true') {
      setShowAnswers(true)
      console.log('problem')
      let match = 0
      questionsStore.data.map((question) => {
        const chosen = answers[question.id]
        if (question.answer === question[chosen]) {
          match += 1
        }
      })
      setCorrect(match)
      sessionStorage.removeItem('showAnswers')
    }
  }, [])

  useEffect(() => {

    if (timerSeconds > 0 && !showAnswers) {
      const timeout = setTimeout(() => {
        setTimerSeconds(timerSeconds - 1)
      }, 1000)

      return () => clearTimeout(timeout)
    } else {
      handleSubmit()
    }
  }, [timerSeconds])

  useEffect(() => {
    setIsAnimating(true)
    const timerAnimationTimeout = setTimeout(() => {
      setIsAnimating(false)
    }, 500)

    return () => clearTimeout(timerAnimationTimeout)
  }, [timerSeconds])

  const handleSubmit = () => {
    let match = 0
    let encodedAnswers = ''
    questionsStore.data.map((question) => {
      const chosen = answers[question.id]
      if (chosen !== undefined) {
        encodedAnswers += `${question.id}${chosen} `
      }
      if (question.answer === question[chosen]) {
        match += 1
      }
    })
    setCorrect(match)
    localStorage.removeItem(answersKey)
    ResultService.create({
      test_id: params.test_id,
      user_id: userStore.user.id,
      correct: match,
      total: total,
      answers: encodedAnswers
    })
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.error(error)
      })
    setShowAnswers(true)
    setAnswers({})
  }

  const restartTest = () => {
    setShowAnswers(false)
    setAnswers([])
    setTimerSeconds(test.deadline_seconds)
  }

  return (
    <>
      <ListWrapper style={{ margin: '0 5vw' }}>
        <List style={{ margin: '30px' }}>
          {/*<h1>Testing page {params.test_id}</h1>*/}
          <Topic>{test.topic}</Topic>
          {!showAnswers && <TimerContainer>
            <TimerText animate={isAnimating}>
              <TimerAnimation>
                {hours.toString().padStart(2, '0')}:
                {minutes.toString().padStart(2, '0')}:
                {seconds.toString().padStart(2, '0')}
              </TimerAnimation>
            </TimerText>
          </TimerContainer>}
          {questionsStore.data.length &&
            <Carousel infinite slide={page} setSlide={setPage}>
              {questionsStore.data.map((question) => (
                <Carousel.Page>
                  <QuestionWrapper key={question.id} style={{ resize: 'none' }}>
                    <Task>{question.task}</Task>
                    <Question question={question}
                              answers={answers}
                              setAnswers={setAnswers}
                              showAnswers={showAnswers}/>
                    {showAnswers && question.answer}
                  </QuestionWrapper>
                </Carousel.Page>
              ))}
            </Carousel>}
          <Pagination itemPerPage={1} data={questionsStore.data} page={page} setPage={setPage}/>
          {!showAnswers &&
            <>
              <SquareButton style={{ width: '30%', height: '50px' }}
                            onClick={() => setIsConfirmationSubmit(true)}>
                Submit
              </SquareButton>
            </>}
          {showAnswers &&
            <h3>
              Your result is {correct}/{total}
            </h3>}
          <SquareButton style={{ width: '30%', height: '50px' }}
                        onClick={() => setIsConfirmationRestart(true)}>
            Restart
          </SquareButton>
        </List>
      </ListWrapper>
      <Confirmation title={'Are you sure you want to save and submit answers?'}
                    isConfirmationModal={isConfirmationSubmit}
                    setIsConfirmationModal={setIsConfirmationSubmit}
                    confirm={handleSubmit}/>
      <Confirmation title={'Are you sure you want reset timer and all answers?'}
                    confirm={restartTest}
                    isConfirmationModal={isConfirmationRestart}
                    setIsConfirmationModal={setIsConfirmationRestart}/>
    </>
  )
})

export default Testing