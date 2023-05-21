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

export const Question = observer(({
  question,
  answers,
  setAnswers,
  showAnswers
}) => {
  const [previous, setPrevious] = useState(null)

  const a = 'a'
  const b = 'b'
  const c = 'c'
  const d = 'd'

  const ref = {
    a: useRef(null),
    b: useRef(null),
    c: useRef(null),
    d: useRef(null)
  }

  const answer = answers[question.id]

  useEffect(() => {
    if (answer !== undefined) {
      markOption(ref[answer])
      setPrevious(answer)
    } else if (previous) {
      unmarkOption(ref[previous])
    }
  }, [answer])

  const onClick = (event, option) => {
    event.preventDefault()
    if (previous === option || showAnswers) {
      return
    }
    if (previous !== null) {
      unmarkOption(ref[previous])
    }
    // markOption(ref[index])
    setAnswers({
      ...answers,
      [question.id]: option
    })
    setPrevious(option)
  }

  return (
    <OptionsContainer>
      <Option ref={ref[a]} onClick={(event) => onClick(event, a)}>
        {question.a}
      </Option>
      <Option ref={ref[b]} onClick={(event) => onClick(event, b)}>
        {question.b}
      </Option>
      <Option ref={ref[c]} onClick={(event) => onClick(event, c)}>
        {question.c}
      </Option>
      <Option ref={ref[d]} onClick={(event) => onClick(event, d)}>
        {question.d}
      </Option>
    </OptionsContainer>
  )
})