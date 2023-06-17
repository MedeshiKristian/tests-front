import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SquareButton, List, Carousel, Pagination } from '../../components/ui'
import { ResultService, TestService } from '../../services'
import { observer } from 'mobx-react-lite'
import { TimerAnimation, TimerContainer, TimerText, Topic } from './style'
import Confirmation from '../../components/modals/confirmation'
import { StoreContext } from '../../components/context/store-context'
import { ThemeContext } from '../../components/context/theme-context'
import TaskQuestions from '../task'

const Testing = observer(() => {
  const params = useParams()
  const [test, setTest] = useState({})
  const { userStore, questionsStore } = useContext(StoreContext)
  const [isConfirmationSubmit, setIsConfirmationSubmit] = useState(false)
  const [isConfirmationRestart, setIsConfirmationRestart] = useState(false)
  const total = questionsStore.data.length
  const [correct, setCorrect] = useState(0)
  const answersKey = `answers ${params.test_id}`
  const [answers, setAnswers] = useState(() => {
    const saved = localStorage.getItem(answersKey)
    return JSON.parse(saved) ?? {}
  })
  const [page, setPage] = useState(1)
  const timerKey = `timer ${params.test_id}`
  const [timerSeconds, setTimerSeconds] = useState(0)
  const [locked, setLocked] = useState(false)
  const hours = Math.floor(timerSeconds / 3600)
  const minutes = Math.floor((timerSeconds % 3600) / 60)
  const seconds = timerSeconds % 60
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    localStorage.setItem(answersKey, JSON.stringify(answers))
  }, [answers])

  const checkTimerSave = () => {
    const saved = localStorage.getItem(timerKey)
    let time = JSON.parse(saved)
    if (time) {
      setTimerSeconds(parseInt(time))
    }
  }

  useEffect(() => {
    TestService.get(params.test_id)
      .then(response => {
        console.log(response.data)
        setTest(response.data.test)
        setTimerSeconds(parseInt(response.data.test.deadline_seconds))
        checkTimerSave()
        questionsStore.set(response.data.questions)
      })
      .catch(error => {
        console.error(error)
      })
    // assert questionsStore.data.length > 0
  }, [])

  useEffect(() => {
    if (timerSeconds !== 0) {
      localStorage.setItem(timerKey, timerSeconds)
    }
    if (timerSeconds > 0) {
      const timeout = setTimeout(() => {
        setTimerSeconds((value) => {
          if (value === 1) handleSubmit()
          return value - 1
        })
      }, 1000)

      return () => clearTimeout(timeout)
    }
  }, [timerSeconds])

  const handleSubmit = () => {
    // console.log('submit')
    setLocked(true)
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
    localStorage.removeItem(timerKey)
    ResultService.create({
      test_id: params.test_id,
      user_id: userStore.user.id,
      correct: match,
      total: total,
      answers: encodedAnswers
    })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.error(error)
      })
    setAnswers({})
  }

  const restartTest = () => {
    // console.log('restarting')
    setAnswers([])
    setLocked(false)
    setTimerSeconds(test.deadline_seconds)
    localStorage.removeItem(answersKey)
  }

  return (
    <>
      <div style={{ width: '100%', margin: '0 5vw' }}>
        <List style={{ margin: '30px 0' }}>
          {/*<h1>Testing page {params.test_id}</h1>*/}
          <Topic>{test?.topic}</Topic>
          <TimerContainer>
            <TimerText>
              <TimerAnimation>
                {hours.toString().padStart(2, '0')}:
                {minutes.toString().padStart(2, '0')}:
                {seconds.toString().padStart(2, '0')}
              </TimerAnimation>
            </TimerText>
          </TimerContainer>
          {questionsStore.data.length &&
            <Carousel infinite slide={page} setSlide={setPage}>
              {questionsStore.data.map((question) => (
                <Carousel.Page>
                  <TaskQuestions question={question}
                                 answers={answers}
                                 setAnswers={setAnswers}
                                 lock={locked}/>
                </Carousel.Page>
              ))}
            </Carousel>}
          <Pagination itemPerPage={1} data={questionsStore.data} page={page} setPage={setPage}/>
          <SquareButton style={{ width: '30%', height: '50px' }}
                        onClick={() => setIsConfirmationSubmit(true)}>
            Submit
          </SquareButton>
          <SquareButton style={{ width: '30%', height: '50px' }}
                        onClick={() => setIsConfirmationRestart(true)}>
            Restart
          </SquareButton>
        </List>
      </div>
      <Confirmation title={'Are you sure you want to save and submit answers?'}
                    isConfirmationModal={isConfirmationSubmit}
                    setIsConfirmationModal={setIsConfirmationSubmit}
                    confirm={() => setTimerSeconds(1)}/>
      <Confirmation title={'Are you sure you want reset timer and all answers?'}
                    confirm={restartTest}
                    isConfirmationModal={isConfirmationRestart}
                    setIsConfirmationModal={setIsConfirmationRestart}/>
    </>
  )
})

export default Testing