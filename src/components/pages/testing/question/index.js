import React, { useEffect, useRef, useState } from 'react'
import { Option, OptionsContainer } from '../style'
import { observer } from 'mobx-react-lite'

const markOption = (ref) => {
  ref.current.style.transform = 'scale(1.01)'
  ref.current.style.boxShadow = '0 0 5px 2px teal'
}

const unmarkOption = (ref) => {
  ref.current.style.transform = 'scale(1)'
  ref.current.style.boxShadow = '0.5px 0.5px 3px 0.5px rgba(0, 0, 0, 0.5)'
}

export const QuestionComponent = observer(({ question, answers, setAnswers }) => {
  const [previous, setPrevious] = useState(-1)

  const ref = [useRef(null), useRef(null), useRef(null), useRef(null)]

  const answer = answers[question.id]

  useEffect(() => {
    if (answer !== undefined) {
      markOption(ref[answer])
      setPrevious(answer)
    }
  }, [answer])

  const onClick = (event, index) => {
    event.preventDefault()
    if (previous !== -1) {
      unmarkOption(ref[previous])
    }
    // markOption(ref[index])
    setAnswers({
      ...answers,
      [question.id]: index
    })
    setPrevious(index)
  }

  return (
    <OptionsContainer>
      <Option ref={ref[0]} onClick={(event) => onClick(event, 0)}>
        {question.a}
      </Option>
      <Option ref={ref[1]} onClick={(event) => onClick(event, 1)}>
        {question.b}
      </Option>
      <Option ref={ref[2]} onClick={(event) => onClick(event, 2)}>
        {question.c}
      </Option>
      <Option ref={ref[3]} onClick={(event) => onClick(event, 3)}>
        {question.d}
      </Option>
    </OptionsContainer>
  )
})