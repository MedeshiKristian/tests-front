import React, { useContext, useEffect, useState } from 'react'
import { List, ListItem, ListWrapper, SquareButton } from '../../ui'
import { ResultService } from '../../../services'
import { Context } from '../../../index'
import { useNavigate } from 'react-router-dom'

const Results = () => {
  const { userStore } = useContext(Context)
  const navigate = useNavigate()
  const [results, setResults] = useState({})

  useEffect(() => {
    ResultService.getResultByUserId(userStore.user.id)
      .then(response => {
        console.log(response.data)
        setResults(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [userStore.user.id])

  const handleShowResult = (event, result) => {
    event.preventDefault()
    const testId = result[1].id
    const encodedAnswers = result[0].answers
    console.log(result)
    const answers = {}
    encodedAnswers.split(' ').forEach((answer) => {
      const choosen = answer.slice(-1)
      const questionId = parseInt(answer.slice(0, -1))
      answers[questionId] = choosen
    })
    const answersKey = `answers ${result[1].id}`
    localStorage.setItem(answersKey, JSON.stringify(answers))
    sessionStorage.setItem("showAnswers", "true")
    navigate(`/test/${testId}`)
  }

  return (
    <ListWrapper>
      <List>
        {Object.keys(results).map(item => (
          <ListItem title={results[item][1].topic + ` ${results[item][0].correct}/${results[item][0].total}`}>
            <SquareButton onClick={(event) => handleShowResult(event, results[item])}>
              Show answers
            </SquareButton>
            {/*{results[item][0].correct}*/}
          </ListItem>
        ))}
      </List>
    </ListWrapper>
  )
}

export default Results